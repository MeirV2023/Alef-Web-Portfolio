import React, { useEffect, useId, useRef } from 'react';
import { ShowcaseImage } from '../types';
import { ExternalLinkIcon, XMarkIcon } from './IconComponents';

interface ScreenshotDialogProps {
  image: ShowcaseImage | null;
  liveUrl?: string;
  liveCta?: string;
  closeLabel?: string;
  onClose: () => void;
}

const ScreenshotDialog: React.FC<ScreenshotDialogProps> = ({
  image,
  liveUrl = 'https://labriout.vercel.app',
  liveCta = 'Open Live Demo',
  closeLabel = 'Close',
  onClose,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (image) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [image]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleNativeClose = () => {
      dialog.returnValue = '';
      onClose();
    };

    dialog.addEventListener('close', handleNativeClose);

    // Fallback for browsers without declarative <dialog closedby="any"> support (e.g. Safari)
    let cleanupFallback: (() => void) | undefined;
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const isOutside = (e: PointerEvent) => {
        const rect = dialog.getBoundingClientRect();
        return (
          e.clientX < rect.left ||
          e.clientX > rect.right ||
          e.clientY < rect.top ||
          e.clientY > rect.bottom
        );
      };
      let pressedOutside = false;
      const onPointerDown = (e: PointerEvent) => {
        pressedOutside = e.target === dialog && isOutside(e);
      };
      const onPointerUp = (e: PointerEvent) => {
        if (pressedOutside && e.target === dialog && isOutside(e)) {
          dialog.close();
        }
        pressedOutside = false;
      };
      dialog.addEventListener('pointerdown', onPointerDown);
      dialog.addEventListener('pointerup', onPointerUp);
      cleanupFallback = () => {
        dialog.removeEventListener('pointerdown', onPointerDown);
        dialog.removeEventListener('pointerup', onPointerUp);
      };
    }

    return () => {
      dialog.removeEventListener('close', handleNativeClose);
      cleanupFallback?.();
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      {...({ closedby: 'any' } as any)}
      aria-labelledby={titleId}
      className="m-auto w-[min(94dvw,1120px)] max-h-[90dvh] rounded-3xl bg-[#13151c] text-white border border-white/15 p-0 shadow-2xl overflow-hidden"
    >
      {image && (
        <div className="flex flex-col max-h-[90dvh]">
          <div className="flex items-center justify-between gap-4 px-5 py-3.5 bg-[#0c0d10] border-b border-white/10">
            <h2 id={titleId} className="text-sm md:text-base font-bold text-gray-100 truncate">
              {image.caption}
            </h2>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-[#ff5500] hover:bg-[#ff6a1f] text-white transition-colors"
              >
                <span>{liveCta}</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
              <form method="dialog">
                <button
                  type="submit"
                  aria-label={closeLabel}
                  autoFocus
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          <div className="overflow-auto p-4 md:p-6 bg-[#090a0e] flex items-center justify-center">
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={`rounded-2xl shadow-2xl border border-white/10 ${
                image.isMobile ? 'max-h-[75dvh] w-auto' : 'w-full h-auto max-h-[76dvh] object-contain'
              }`}
            />
          </div>
        </div>
      )}
    </dialog>
  );
};

export default ScreenshotDialog;

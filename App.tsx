import React, { useEffect, useState } from 'react';
import { PlanId, ShowcaseImage } from './types';
import { useTranslations } from './hooks/useTranslations';
import { useLanguage } from './hooks/useLanguage';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import LiveDemoShowcase from './components/LiveDemoShowcase';
import RoiCalculator from './components/RoiCalculator';
import PlatformFeatures from './components/PlatformFeatures';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScreenshotDialog from './components/ScreenshotDialog';

interface LightboxState {
  image: ShowcaseImage;
  liveUrl?: string;
  liveCta?: string;
}

const closeLabels: Record<string, string> = {
  ru: 'Закрыть окно просмотра',
  en: 'Close preview dialog',
  de: 'Vorschau schließen',
  fr: 'Fermer l’aperçu',
  he: 'סגור תצוגה מקדימה',
};

function App() {
  const t = useTranslations();
  const { language } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('vip_89');
  const [lightboxState, setLightboxState] = useState<LightboxState | null>(null);

  useEffect(() => {
    if (t.meta?.title) {
      document.title = t.meta.title;
    }

    if (t.meta?.description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', t.meta.description);
    }
  }, [t]);

  const handleOpenScreenshot = (image: ShowcaseImage, liveUrl?: string, liveCta?: string) => {
    setLightboxState({ image, liveUrl, liveCta });
  };

  return (
    <div id="top" className="min-h-screen bg-[#0c0d10] text-white">
      <a
        href="#main-content"
        className="visually-hidden fixed top-3 start-3 z-50 px-4 py-2 rounded-xl bg-[#ff5500] text-white font-extrabold text-sm"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero onOpenScreenshot={handleOpenScreenshot} />
        <ProblemSolution />
        <LiveDemoShowcase onOpenScreenshot={handleOpenScreenshot} />
        <RoiCalculator selectedPlan={selectedPlan} onSelectPlan={setSelectedPlan} />
        <PlatformFeatures />
        <Pricing selectedPlan={selectedPlan} onSelectPlan={setSelectedPlan} />
        <HowItWorks />
        <FAQ />
        <ContactForm selectedPlan={selectedPlan} onSelectPlan={setSelectedPlan} />
      </main>

      <Footer />

      <ScreenshotDialog
        image={lightboxState?.image ?? null}
        liveUrl={lightboxState?.liveUrl}
        liveCta={lightboxState?.liveCta || t.hero.ctaSecondary}
        closeLabel={closeLabels[language] || closeLabels.en}
        onClose={() => setLightboxState(null)}
      />
    </div>
  );
}

export default App;

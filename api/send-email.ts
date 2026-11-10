import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value: unknown): string => {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      replyTo,
      subject,
      html,
      lead,
      honeypot,
    } = req.body || {};

    // Silent honeypot spam rejection
    if (honeypot) {
      return res.status(200).json({ ok: true });
    }

    // ВАЖНО:
    // 1. fromEmail: Верифицированный домен в Resend (hello@alef-web.com).
    // 2. adminEmail: Куда приходят заявки (meir770d@gmail.com).
    const fromEmail = 'hello@alef-web.com';
    const adminEmail = 'meir770d@gmail.com';

    let finalSubject = subject || 'Новая заявка Alef FoodCRM';
    let finalHtml = html || '';

    if (lead && typeof lead === 'object') {
      const name = escapeHtml(lead.name);
      const email = escapeHtml(lead.email);
      const phone = escapeHtml(lead.phone);
      const cleanPhoneDigits = String(lead.phone || '').replace(/[^\d]/g, '');
      const restaurant = escapeHtml(lead.restaurant || 'Не указано');
      const link = escapeHtml(lead.instagramOrWebsite || 'Не указана');
      const planLabel = escapeHtml(lead.planLabel || lead.plan || 'Не выбран');
      const message = escapeHtml(lead.message || '—');
      const uiLang = escapeHtml(lead.uiLanguage || 'ru');

      finalSubject = `🍔 Заявка FoodCRM [${planLabel}] — ${name} (${restaurant})`;
      finalHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 620px; margin: 0 auto; background: #0c0d10; color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #262936;">
          <div style="background: linear-gradient(135deg, #ff5500 0%, #e11d48 100%); padding: 24px 28px;">
            <div style="font-size: 12px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; opacity: 0.9;">ALEF FOODCRM • НОВАЯ ЗАЯВКА</div>
            <h1 style="margin: 6px 0 0; font-size: 22px; font-weight: 800; color: #ffffff;">${planLabel}</h1>
          </div>
          <div style="padding: 26px 28px; background: #13151c; color: #e5e7eb; font-size: 15px; line-height: 1.6;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #9ca3af; width: 170px;">Имя владельца:</td>
                <td style="padding: 8px 0; font-weight: 700; color: #ffffff;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #9ca3af;">Заведение &amp; Город:</td>
                <td style="padding: 8px 0; font-weight: 700; color: #ffffff;">${restaurant}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #9ca3af;">Телефон / WhatsApp:</td>
                <td style="padding: 8px 0; font-weight: 700; color: #34d399;">
                  ${phone}
                  ${cleanPhoneDigits ? ` &bull; <a href="https://wa.me/${cleanPhoneDigits}" style="color: #ff5500; text-decoration: underline;">Открыть WhatsApp</a>` : ''}
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #9ca3af;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #60a5fa;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #9ca3af;">Instagram / Сайт:</td>
                <td style="padding: 8px 0; color: #ffffff;">${link}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #9ca3af;">Выбранный тариф:</td>
                <td style="padding: 8px 0; font-weight: 800; color: #ff5500;">${planLabel}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #9ca3af;">Язык интерфейса:</td>
                <td style="padding: 8px 0; text-transform: uppercase; color: #d1d5db;">${uiLang}</td>
              </tr>
            </table>
            <hr style="border: 0; border-top: 1px solid #262936; margin: 18px 0;" />
            <div style="color: #9ca3af; font-size: 13px; text-transform: uppercase; font-weight: 700; margin-bottom: 6px;">Пожелания / Языки меню / Детали:</div>
            <div style="white-space: pre-wrap; background: #0c0d10; padding: 14px 16px; border-radius: 10px; border: 1px solid #262936; color: #f3f4f6;">${message}</div>
          </div>
        </div>
      `;
    }

    const data = await resend.emails.send({
      from: `Alef FoodCRM <${fromEmail}>`,
      to: [adminEmail],
      replyTo: replyTo || lead?.email,
      subject: finalSubject,
      html: finalHtml,
    });

    return res.status(200).json(data);
  } catch (error: any) {
    console.error('Resend API Error:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}

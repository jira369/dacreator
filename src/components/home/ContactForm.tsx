import { useState, useEffect, type FormEvent } from 'react';

interface Props {
  lang: string;
}

const t = {
  en: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    captcha: 'What is',
    captchaPlaceholder: 'Answer',
    send: 'Send message',
    sending: 'Opening mail client...',
    error: 'Wrong answer. Please try again.',
    nameMissing: 'Please enter your name.',
    emailMissing: 'Please enter your email.',
    messageMissing: 'Please enter a message.',
  },
  de: {
    name: 'Name',
    email: 'E-Mail',
    message: 'Nachricht',
    captcha: 'Was ist',
    captchaPlaceholder: 'Antwort',
    send: 'Nachricht senden',
    sending: 'E-Mail-Client wird geöffnet...',
    error: 'Falsche Antwort. Bitte erneut versuchen.',
    nameMissing: 'Bitte gib deinen Namen ein.',
    emailMissing: 'Bitte gib deine E-Mail ein.',
    messageMissing: 'Bitte gib eine Nachricht ein.',
  },
  vi: {
    name: 'Tên của bạn',
    email: 'Email của bạn',
    message: 'Tin nhắn của bạn',
    captcha: 'Bao nhiêu là',
    captchaPlaceholder: 'Đáp án',
    send: 'Gửi tin nhắn',
    sending: 'Đang mở ứng dụng email...',
    error: 'Sai đáp án. Vui lòng thử lại.',
    nameMissing: 'Vui lòng nhập tên.',
    emailMissing: 'Vui lòng nhập email.',
    messageMissing: 'Vui lòng nhập tin nhắn.',
  },
};

function generateCaptcha() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { a, b, answer: a + b };
}

export default function ContactForm({ lang }: Props) {
  const labels = t[lang as keyof typeof t] || t.en;

  // Zufallswerte erst im Browser, sonst weicht das Server-HTML ab (Hydration-Fehler)
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, answer: 0 });
  useEffect(() => setCaptcha(generateCaptcha()), []);
  const [form, setForm] = useState({ name: '', email: '', message: '', captchaInput: '' });
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (!form.name.trim()) { setError(labels.nameMissing); return; }
    if (!form.email.trim()) { setError(labels.emailMissing); return; }
    if (!form.message.trim()) { setError(labels.messageMissing); return; }
    if (parseInt(form.captchaInput) !== captcha.answer) {
      setError(labels.error);
      setCaptcha(generateCaptcha());
      setForm((f) => ({ ...f, captchaInput: '' }));
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact: ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:dacvudinh@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);

    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '', captchaInput: '' });
      setCaptcha(generateCaptcha());
    }, 3000);
  }

  return (
    <form onSubmit={handleSubmit} className="form" noValidate>
      <div className="form__row">
        <label>
          {labels.name}
          <input type="text" autoComplete="name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
        </label>
        <label>
          {labels.email}
          <input type="email" autoComplete="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
        </label>
      </div>
      <label>
        {labels.message}
        <textarea rows={4} value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} />
      </label>
      <label>
        {labels.captcha} {captcha.a} + {captcha.b} ?
        <input type="text" inputMode="numeric" placeholder={labels.captchaPlaceholder} value={form.captchaInput} onChange={(e) => setForm((f) => ({ ...f, captchaInput: e.target.value }))} style={{ maxWidth: '10rem' }} />
      </label>
      {error && <p className="err" role="alert">{error}</p>}
      <button type="submit" disabled={sent} className="btn">
        {sent ? labels.sending : labels.send}
        {!sent && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        )}
      </button>
    </form>
  );
}

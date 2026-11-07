import { useState, useMemo, type FormEvent } from 'react';

interface Props {
  lang: string;
}

const t = {
  en: {
    name: 'Your name',
    email: 'Your email',
    message: 'Your message',
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
    name: 'Dein Name',
    email: 'Deine E-Mail',
    message: 'Deine Nachricht',
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

  const [captcha, setCaptcha] = useState(() => generateCaptcha());
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
        <input
          type="text"
          placeholder={labels.name}
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          aria-label={labels.name}
          autoComplete="name"
        />
        <input
          type="email"
          placeholder={labels.email}
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          aria-label={labels.email}
          autoComplete="email"
        />
      </div>

      <textarea
        placeholder={labels.message}
        rows={5}
        value={form.message}
        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        aria-label={labels.message}
      />

      {/* Simple math captcha */}
      <div className="form__row" style={{ gridTemplateColumns: 'auto 8rem', alignItems: 'center' }}>
        <label htmlFor="captcha">
          {labels.captcha} <strong>{captcha.a} + {captcha.b}</strong> ?
        </label>
        <input
          type="text"
          id="captcha"
          inputMode="numeric"
          placeholder={labels.captchaPlaceholder}
          value={form.captchaInput}
          onChange={(e) => setForm((f) => ({ ...f, captchaInput: e.target.value }))}
        />
      </div>

      {error && (
        <p className="err" role="alert">{error}</p>
      )}

      <button type="submit" disabled={sent} className="btn btn--ink" style={{ justifySelf: 'start' }}>
        {sent ? labels.sending : labels.send}
        {!sent && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        )}
      </button>
    </form>
  );
}

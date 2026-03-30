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
    error: 'Wrong answer — please try again.',
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
    error: 'Falsche Antwort — bitte erneut versuchen.',
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
    error: 'Sai đáp án — vui lòng thử lại.',
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

  const inputClass =
    'w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200';

  return (
    <form onSubmit={handleSubmit} className="mt-10 max-w-lg mx-auto space-y-4 text-left">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder={labels.name}
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className={inputClass}
        />
        <input
          type="email"
          placeholder={labels.email}
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className={inputClass}
        />
      </div>

      <textarea
        placeholder={labels.message}
        rows={5}
        value={form.message}
        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        className={`${inputClass} resize-none`}
      />

      {/* Simple math captcha */}
      <div className="flex items-center gap-3">
        <label className="text-sm text-text-muted whitespace-nowrap">
          {labels.captcha} <span className="text-text-primary font-semibold">{captcha.a} + {captcha.b}</span> ?
        </label>
        <input
          type="text"
          inputMode="numeric"
          placeholder={labels.captchaPlaceholder}
          value={form.captchaInput}
          onChange={(e) => setForm((f) => ({ ...f, captchaInput: e.target.value }))}
          className={`${inputClass} w-24`}
        />
      </div>

      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={sent}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent hover:bg-accent-light text-background text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {sent ? labels.sending : labels.send}
        {!sent && (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        )}
      </button>
    </form>
  );
}

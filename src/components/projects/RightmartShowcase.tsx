import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  lang: string;
}

const t = {
  en: {
    paidTitle: 'Paid Advertising',
    paidDesc: 'Platforms I manage campaigns on',
    organicTitle: 'Organic Social',
    organicDesc: 'Channels I oversee and grow',
    reportingTitle: 'Data & Reporting',
    reportingDesc: 'Tools for analytics and dashboards',
    channelsTitle: 'Channels Built from the Ground Up',
    channelsDesc: 'Brands and social media presences I built and grew within the rightmart Group ecosystem.',
    channelsCount: 'brands',
    channelsTotal: 'social profiles managed',
    viewChannels: 'View all channels',
    hideChannels: 'Hide channels',
  },
  de: {
    paidTitle: 'Paid Advertising',
    paidDesc: 'Plattformen, auf denen ich Kampagnen steuere',
    organicTitle: 'Organic Social',
    organicDesc: 'Kanäle, die ich betreue und aufbaue',
    reportingTitle: 'Daten & Reporting',
    reportingDesc: 'Tools für Analysen und Dashboards',
    channelsTitle: 'Kanäle von Grund auf aufgebaut',
    channelsDesc: 'Marken und Social-Media-Präsenzen, die ich im rightmart Group Ökosystem aufgebaut und entwickelt habe.',
    channelsCount: 'Marken',
    channelsTotal: 'Social-Profile betreut',
    viewChannels: 'Alle Kanäle anzeigen',
    hideChannels: 'Kanäle ausblenden',
  },
  vi: {
    paidTitle: 'Quảng cáo trả phí',
    paidDesc: 'Nền tảng tôi quản lý chiến dịch',
    organicTitle: 'Organic Social',
    organicDesc: 'Kênh tôi phát triển',
    reportingTitle: 'Dữ liệu & Báo cáo',
    reportingDesc: 'Công cụ phân tích và dashboard',
    channelsTitle: 'Kênh xây dựng từ đầu',
    channelsDesc: 'Thương hiệu và mạng xã hội tôi xây dựng trong hệ sinh thái rightmart Group.',
    channelsCount: 'thương hiệu',
    channelsTotal: 'hồ sơ mạng xã hội',
    viewChannels: 'Xem tất cả kênh',
    hideChannels: 'Ẩn kênh',
  },
};

const AdIcon = ({ name }: { name: string }) => {
  const icons: Record<string, JSX.Element> = {
    'Meta Ads': <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6.915 4.03c-1.968 0-3.402 1.042-4.36 2.879C1.513 8.391.768 10.547.768 12c0 1.476.57 2.59 1.726 2.59.596 0 1.211-.376 1.878-1.164l1.6-1.893c.903-1.073 1.834-2.543 2.794-4.407.418-.812.63-1.547.63-2.093 0-.65-.315-1.003-.875-1.003h-.606zm10.17 0c-1.2 0-2.328.632-3.381 1.867-1.054 1.235-2.088 2.98-3.096 5.235-.492 1.1-.742 2.08-.742 2.868 0 1.294.742 2.03 1.778 2.03.596 0 1.211-.376 1.878-1.164l1.6-1.893c.903-1.073 1.834-2.543 2.794-4.407.418-.812.63-1.547.63-2.093 0-.65-.315-1.003-.875-1.003h-.586zm4.482 2.97c-.875 0-1.607.315-2.197.946-.59.63-.884 1.417-.884 2.358 0 1.476.57 2.59 1.726 2.59.596 0 1.211-.376 1.878-1.164.315-.373.63-.788.946-1.245.316-.46.474-.893.474-1.296 0-.65-.315-1.003-.875-1.003h-.18c-.294 0-.588-.062-.888-.186z"/></svg>,
    'Google Ads': <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3.593 0L.862 4.735l10.28 17.937 2.734-4.735zm7.644 10.472l-2.734 4.735L18.793 0H13.32z"/><circle cx="6.326" cy="19.265" r="4.735"/></svg>,
    'Microsoft Ads': <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623z"/></svg>,
    'TikTok Ads': <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>,
    'Taboola': <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>,
    'Criteo': <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 3a7 7 0 110 14 7 7 0 010-14zm0 2a5 5 0 100 10 5 5 0 000-10z"/></svg>,
    'RTB House': <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2z"/></svg>,
    'Tisoomi': <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  };
  return icons[name] || <span className="text-xs font-bold">{name[0]}</span>;
};

const ReportIcon = ({ name }: { name: string }) => {
  const icons: Record<string, JSX.Element> = {
    'Power BI': <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10 2v20h4V2h-4zM4 10v12h4V10H4zm12-4v16h4V6h-4z"/></svg>,
    'Looker Studio': <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>,
    'Google Analytics': <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 10-16 0 8 8 0 0016 0zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>,
    'GTM': <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  };
  return icons[name] || <span className="text-xs font-bold">{name[0]}</span>;
};

const adPlatforms = [
  { name: 'Meta Ads', color: '#0081FB' },
  { name: 'Google Ads', color: '#4285F4' },
  { name: 'Microsoft Ads', color: '#00A4EF' },
  { name: 'TikTok Ads', color: '#EE1D52' },
  { name: 'Taboola', color: '#004B93' },
  { name: 'Criteo', color: '#F47A20' },
  { name: 'RTB House', color: '#00C389' },
  { name: 'Tisoomi', color: '#7B61FF' },
];

const socialPlatforms = [
  { name: 'YouTube', color: '#FF0000' },
  { name: 'Instagram', color: '#E4405F' },
  { name: 'Facebook', color: '#1877F2' },
  { name: 'TikTok', color: '#EE1D52' },
];

const reportingTools = [
  { name: 'Power BI', color: '#F2C811' },
  { name: 'Looker Studio', color: '#4285F4' },
  { name: 'Google Analytics', color: '#E37400' },
  { name: 'GTM', color: '#246FDB' },
];

const channels = [
  {
    brand: 'Rightmart',
    platforms: ['Facebook', 'Instagram', 'YouTube', 'TikTok'],
    links: {
      Facebook: 'https://www.facebook.com/rightmart.de',
      Instagram: 'https://www.instagram.com/rightmart/',
      YouTube: 'https://www.youtube.com/@rightmart5404',
      TikTok: 'https://www.tiktok.com/@rightmart.de',
    },
  },
  {
    brand: 'Hartz4Widerspruch',
    platforms: ['Facebook', 'Instagram', 'YouTube', 'TikTok'],
    links: {
      Facebook: 'https://www.facebook.com/hartz4widerspruch/',
      Instagram: 'https://www.instagram.com/hartz4widerspruch/',
      YouTube: 'https://www.youtube.com/@hartz4widerspruch806',
      TikTok: 'https://www.tiktok.com/@hartz4widerspruch',
    },
  },
  {
    brand: 'PassExperten',
    platforms: ['Facebook', 'Instagram', 'YouTube', 'TikTok'],
    links: {
      Facebook: 'https://www.facebook.com/passexperten',
      Instagram: 'https://www.instagram.com/passexperten.de/',
      YouTube: 'https://www.youtube.com/channel/UCQs2scxn6dyjcV2yM-6pt5w',
      TikTok: 'https://www.tiktok.com/@passexperten',
    },
  },
  {
    brand: 'GdB-Widerspruch',
    platforms: ['Facebook', 'Instagram', 'TikTok'],
    links: {
      Facebook: 'https://www.facebook.com/profile.php?id=61552017153722',
      Instagram: 'https://www.instagram.com/gdbwiderspruch.de/',
      TikTok: 'https://www.tiktok.com/@gdbwiderspruch',
    },
  },
  {
    brand: 'SOS-Verkehrsrecht',
    platforms: ['Facebook', 'Instagram', 'YouTube', 'TikTok'],
    links: {
      Facebook: 'https://www.facebook.com/sosverkehrsrecht',
      Instagram: 'https://www.instagram.com/sos_verkehrsrecht/',
      YouTube: 'https://www.youtube.com/@sos-verkehrsrecht-yt',
      TikTok: 'https://www.tiktok.com/@sosverkehrsrecht',
    },
  },
  {
    brand: 'Sportwetten-Kanzlei',
    platforms: ['Facebook', 'Instagram', 'YouTube', 'TikTok'],
    links: {
      Facebook: 'https://www.facebook.com/profile.php?id=61574807105001',
      Instagram: 'https://www.instagram.com/sportwettenkanzlei/',
      YouTube: 'https://www.youtube.com/channel/UCubW8juuhlPubre7iWWC7sQ',
      TikTok: 'https://www.tiktok.com/@sportwettenkanzlei',
    },
  },
  {
    brand: 'Bußgeldkatalog.org',
    platforms: ['YouTube'],
    links: {
      YouTube: 'https://www.youtube.com/@BussgeldkatalogOrg',
    },
  },
  {
    brand: 'Wer hat Recht?',
    platforms: ['YouTube'],
    links: {
      YouTube: 'https://www.youtube.com/@werhatrechtde',
    },
  },
];

const platformColors: Record<string, string> = {
  Facebook: '#1877F2',
  Instagram: '#E4405F',
  YouTube: '#FF0000',
  TikTok: '#000000',
};

const PlatformIcon = ({ platform, size = 14 }: { platform: string; size?: number }) => {
  const icons: Record<string, JSX.Element> = {
    Facebook: <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
    Instagram: <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
    YouTube: <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
    TikTok: <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>,
  };
  return icons[platform] || null;
};

export default function RightmartShowcase({ lang }: Props) {
  const labels = t[lang as keyof typeof t] || t.en;
  const [showChannels, setShowChannels] = useState(false);

  const totalProfiles = channels.reduce((sum, c) => sum + c.platforms.length, 0);

  return (
    <div className="space-y-10 mt-10">
      {/* Paid Advertising */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-1">{labels.paidTitle}</h3>
        <p className="text-xs text-text-muted mb-4">{labels.paidDesc}</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {adPlatforms.map((p) => (
            <div
              key={p.name}
              className="group p-3 bg-surface rounded-xl border border-border hover:border-accent/30 transition-all duration-300 text-center"
            >
              <div
                className="w-8 h-8 mx-auto mb-2 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: p.color + '15', color: p.color }}
              >
                <AdIcon name={p.name} />
              </div>
              <span className="text-xs text-text-muted group-hover:text-text-primary transition-colors">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Organic Social */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-1">{labels.organicTitle}</h3>
        <p className="text-xs text-text-muted mb-4">{labels.organicDesc}</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {socialPlatforms.map((p) => (
            <div
              key={p.name}
              className="group p-3 bg-surface rounded-xl border border-border hover:border-accent/30 transition-all duration-300 flex items-center gap-3"
            >
              <div className="text-text-muted group-hover:text-text-primary transition-colors">
                <PlatformIcon platform={p.name} size={20} />
              </div>
              <span className="text-sm text-text-muted group-hover:text-text-primary transition-colors">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Data & Reporting */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-1">{labels.reportingTitle}</h3>
        <p className="text-xs text-text-muted mb-4">{labels.reportingDesc}</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {reportingTools.map((tool) => (
            <div
              key={tool.name}
              className="group p-3 bg-surface rounded-xl border border-border hover:border-accent/30 transition-all duration-300 text-center"
            >
              <div
                className="w-8 h-8 mx-auto mb-2 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: tool.color + '15', color: tool.color }}
              >
                <ReportIcon name={tool.name} />
              </div>
              <span className="text-xs text-text-muted group-hover:text-text-primary transition-colors">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Channels Built */}
      <div className="p-6 bg-accent/5 rounded-2xl border border-accent/20">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-1">{labels.channelsTitle}</h3>
            <p className="text-xs text-text-muted max-w-lg">{labels.channelsDesc}</p>
          </div>
          <div className="flex gap-4 text-right shrink-0">
            <div>
              <div className="text-2xl font-bold text-accent">{channels.length}</div>
              <div className="text-[10px] text-text-muted uppercase tracking-wider">{labels.channelsCount}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">{totalProfiles}</div>
              <div className="text-[10px] text-text-muted uppercase tracking-wider">{labels.channelsTotal}</div>
            </div>
          </div>
        </div>

        {/* Brand pills preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          {channels.map((ch) => (
            <span
              key={ch.brand}
              className="px-3 py-1.5 text-xs font-medium bg-surface rounded-lg border border-border text-text-primary"
            >
              {ch.brand}
            </span>
          ))}
        </div>

        {/* Toggle */}
        <button
          onClick={() => setShowChannels(!showChannels)}
          className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors"
        >
          {showChannels ? labels.hideChannels : labels.viewChannels}
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${showChannels ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Expandable channel list */}
        <AnimatePresence>
          {showChannels && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="grid gap-3 mt-4 pt-4 border-t border-accent/10">
                {channels.map((ch) => (
                  <div
                    key={ch.brand}
                    className="p-4 bg-surface rounded-xl border border-border"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-text-primary">{ch.brand}</span>
                      <span className="text-[10px] text-text-muted">{ch.platforms.length} {ch.platforms.length === 1 ? 'channel' : 'channels'}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {ch.platforms.map((platform) => (
                        <a
                          key={platform}
                          href={(ch.links as Record<string, string>)[platform]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-background rounded-md border border-border hover:border-accent/40 text-text-muted hover:text-text-primary transition-all"
                        >
                          <PlatformIcon platform={platform} size={12} />
                          {platform}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { logoFor } from '../../data/logos';

// Echte Logos statt nachgezeichneter Icons: hell, in Markenfarbe beim Hover der Karte
const Logo = ({ name, size = 32 }: { name: string; size?: number }) => {
  const src = logoFor(name);
  return src ? <img src={src} alt="" height={size} className="logo-img object-contain" style={{ height: name === 'Criteo' ? size * 0.6 : size, width: 'auto', maxWidth: size * 3 }} loading="lazy" /> : <span className="text-[13px] font-bold">{name[0]}</span>;
};
const AdIcon = ({ name }: { name: string }) => <Logo name={name} />;
const ReportIcon = ({ name }: { name: string }) => <Logo name={name} />;
const PlatformIcon = ({ platform, size = 20 }: { platform: string; size?: number }) => <Logo name={platform} size={size} />;

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


export default function RightmartShowcase({ lang }: Props) {
  const labels = t[lang as keyof typeof t] || t.en;
  const [showChannels, setShowChannels] = useState(false);

  const totalProfiles = channels.reduce((sum, c) => sum + c.platforms.length, 0);

  return (
    <div className="space-y-10 mt-10">
      {/* Paid Advertising */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-1">{labels.paidTitle}</h3>
        <p className="text-[13px] text-text-muted mb-4">{labels.paidDesc}</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {adPlatforms.map((p) => (
            <div
              key={p.name}
              className="group has-logo p-3 bg-surface rounded-xl border border-border hover:border-accent/30 transition-colors duration-300 text-center"
            >
              <div
                className="h-10 mx-auto mb-2 flex items-center justify-center"
                
              >
                <AdIcon name={p.name} />
              </div>
              <span className="text-[13px] text-text-muted group-hover:text-text-primary transition-colors">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Organic Social */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-1">{labels.organicTitle}</h3>
        <p className="text-[13px] text-text-muted mb-4">{labels.organicDesc}</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {socialPlatforms.map((p) => (
            <div
              key={p.name}
              className="group has-logo p-3 bg-surface rounded-xl border border-border hover:border-accent/30 transition-colors duration-300 flex items-center gap-3"
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
        <p className="text-[13px] text-text-muted mb-4">{labels.reportingDesc}</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {reportingTools.map((tool) => (
            <div
              key={tool.name}
              className="group has-logo p-3 bg-surface rounded-xl border border-border hover:border-accent/30 transition-colors duration-300 text-center"
            >
              <div
                className="h-10 mx-auto mb-2 flex items-center justify-center"
                
              >
                <ReportIcon name={tool.name} />
              </div>
              <span className="text-[13px] text-text-muted group-hover:text-text-primary transition-colors">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Channels Built */}
      <div className="p-6 bg-accent/5 rounded-2xl border border-accent/20">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-1">{labels.channelsTitle}</h3>
            <p className="text-[13px] text-text-muted max-w-lg">{labels.channelsDesc}</p>
          </div>
          <div className="flex gap-4 text-right shrink-0">
            <div>
              <div className="text-2xl font-bold text-accent">{channels.length}</div>
              <div className="text-[13px] text-text-muted">{labels.channelsCount}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">{totalProfiles}</div>
              <div className="text-[13px] text-text-muted">{labels.channelsTotal}</div>
            </div>
          </div>
        </div>

        {/* Brand pills preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          {channels.map((ch) => (
            <span
              key={ch.brand}
              className="px-3 py-1.5 text-[13px] font-medium bg-surface rounded-lg border border-border text-text-primary"
            >
              {ch.brand}
            </span>
          ))}
        </div>

        {/* Toggle */}
        <button
          onClick={() => setShowChannels(!showChannels)}
          className="inline-flex items-center gap-2 min-h-11 text-sm text-accent hover:text-accent-light transition-colors"
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
              <div className="grid gap-3 mt-6">
                {channels.map((ch) => (
                  <div
                    key={ch.brand}
                    className="p-4 bg-surface rounded-xl border border-border"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-text-primary">{ch.brand}</span>
                      <span className="text-[13px] text-text-muted">{ch.platforms.length} {ch.platforms.length === 1 ? 'channel' : 'channels'}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {ch.platforms.map((platform) => (
                        <a
                          key={platform}
                          href={(ch.links as Record<string, string>)[platform]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[13px] bg-background rounded-md border border-border hover:border-accent/40 text-text-muted hover:text-text-primary transition-colors"
                        >
                          <PlatformIcon platform={platform} size={16} />
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

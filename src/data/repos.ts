export interface Repo {
  name: string;
  visibility: 'public' | 'private';
  /** Nur für öffentliche Repos. Private haben nie eine URL. */
  url?: string;
  descKey: 'work.r1' | 'work.r2' | 'work.r3' | 'work.r4' | 'work.r5';
  fork?: boolean;
}

export const repos: Repo[] = [
  { name: 'marketingcockpit', visibility: 'private', descKey: 'work.r1' },
  { name: 'utm-generator', visibility: 'private', descKey: 'work.r2' },
  { name: 'sea-cockpit', visibility: 'private', descKey: 'work.r3' },
  { name: 'Leben-in-Deutschland', visibility: 'public', url: 'https://github.com/jira369/Leben-in-Deutschland', descKey: 'work.r4' },
  { name: 'InstaPy', visibility: 'public', url: 'https://github.com/jira369/InstaPy', descKey: 'work.r5', fork: true },
];

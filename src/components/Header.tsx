import { FIGMA_IMAGES } from '../data/figmaAssets';
import type { PageId } from '../types';

type HeaderProps = {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
};

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'profile', label: 'Profile' },
  { id: 'focus', label: 'Focus Timer' },
  { id: 'rewards', label: 'Rewards' },
  { id: 'tasks', label: 'Task List' },
  { id: 'settings', label: 'Settings' },
];

export function Header({ activePage, onNavigate }: HeaderProps) {
  return (
    <header className="app-header">
      <div className="app-branding">
        <img src={FIGMA_IMAGES.logo} alt="QuestDone logo" className="app-branding__logo" />
        <div>
          <p className="app-branding__title">QuestDone</p>
          <p className="app-branding__subtitle">Gamified todo tracker</p>
        </div>
      </div>
      <nav className="app-nav" aria-label="Primary">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`app-nav__button ${item.id === activePage ? 'is-active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}


import { useState } from 'react';
import { FIGMA_IMAGES, LANGUAGES, THEME_COLORS } from '../data/figmaAssets';

const ACCOUNT_FIELDS = [
  { id: 'firstName', label: 'First Name' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'email', label: 'Email' },
] as const;

export function Settings() {
  const [account, setAccount] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [theme, setTheme] = useState(THEME_COLORS[0]);
  const [language, setLanguage] = useState(LANGUAGES[0]);
  const [reminderEnabled, setReminderEnabled] = useState(true);

  const handleAccountChange = (field: (typeof ACCOUNT_FIELDS)[number]['id'], value: string) => {
    setAccount((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="page settings">
      <article className="settings-panel settings-panel--account">
        <h2 className="section-title">My Account</h2>
        <div className="settings-panel__body">
          {ACCOUNT_FIELDS.map((field) => (
            <label key={field.id} className="settings-field">
              <span>{field.label}:</span>
              <input
                type={field.id === 'email' ? 'email' : 'text'}
                value={account[field.id]}
                onChange={(event) => handleAccountChange(field.id, event.target.value)}
                placeholder={`Enter your ${field.label.toLowerCase()}`}
              />
            </label>
          ))}
        </div>
      </article>

      <article className="settings-panel settings-panel--theme">
        <h2 className="section-title">Theme Colour</h2>
        <div className="settings-theme">
          <div className="settings-theme__options">
            {THEME_COLORS.map((color) => (
              <label key={color} className="settings-radio">
                <input
                  type="radio"
                  name="theme"
                  value={color}
                  checked={theme === color}
                  onChange={() => setTheme(color)}
                />
                <span>{color}</span>
              </label>
            ))}
          </div>
          <img src={FIGMA_IMAGES.settings.colorWheel} alt="Color wheel" />
        </div>
      </article>

      <article className="settings-panel settings-panel--language">
        <h2 className="section-title">Language</h2>
        <div className="settings-panel__body">
          {LANGUAGES.map((lang) => (
            <label key={lang} className="settings-radio settings-radio--large">
              <input
                type="radio"
                name="language"
                value={lang}
                checked={language === lang}
                onChange={() => setLanguage(lang)}
              />
              <span>{lang}</span>
            </label>
          ))}
        </div>
      </article>

      <article className="settings-panel settings-panel--reminder">
        <div className="settings-panel__header">
          <h2 className="section-title">Activate Reminder</h2>
          <label className="toggle">
            <input
              type="checkbox"
              checked={reminderEnabled}
              onChange={() => setReminderEnabled((prev) => !prev)}
            />
            <span />
          </label>
        </div>
        <div className="settings-reminder">
          <img src={FIGMA_IMAGES.settings.reminderBell} alt="Reminder bell" />
          <p>Never miss a quest again—enable reminders for new and overdue tasks.</p>
        </div>
      </article>
    </section>
  );
}


import { FIGMA_IMAGES, PROFILE_STATS, PROFILE_USER } from '../data/figmaAssets';

export function Profile() {
  return (
    <section className="page profile" data-name="Home/Profile">
      <div className="profile__sidebar">
        <p className="profile__welcome">{PROFILE_USER.title}</p>
        <div className="profile-card">
          <img src={FIGMA_IMAGES.profileAvatar} alt="Pixel avatar" className="profile-card__avatar" />
          <div className="profile-card__details">
            <p className="profile-card__label">NAME</p>
            <p className="profile-card__value">LVL∞</p>
            <div className="profile-card__meter">
              <span>HP</span>
              <div className="profile-card__meter-track">
                <span style={{ width: '80%' }} />
              </div>
            </div>
            <div className="profile-card__meter">
              <span>XP</span>
              <div className="profile-card__meter-track xp">
                <span style={{ width: '55%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__content">
        <h2 className="section-title">Streaks</h2>
        <div className="profile__stats-grid">
          {PROFILE_STATS.map((stat) => (
            <article key={stat.label} className="stat-card">
              <p className="stat-card__label">{stat.label}</p>
              <p className="stat-card__value">{stat.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


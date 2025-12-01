import { REWARD_ICON_SETS } from '../data/figmaAssets';

export function Rewards() {
  const columns = [
    { title: 'Rewards', icons: REWARD_ICON_SETS.rewards },
    { title: 'Badges', icons: REWARD_ICON_SETS.badges },
  ];

  return (
    <section className="page rewards">
      {columns.map((column) => (
        <article key={column.title} className="rewards-panel">
          <h2 className="section-title">{column.title}</h2>
          <div className="rewards-grid">
            {column.icons.map((icon) => (
              <div key={icon.id} className="rewards-grid__cell" aria-label={icon.alt}>
                <img src={icon.src} alt={icon.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}


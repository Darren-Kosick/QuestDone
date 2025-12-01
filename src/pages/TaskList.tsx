import { TASKS } from '../data/figmaAssets';

const PRIORITY_COLUMNS = [
  { id: 'low', label: 'LOW', buttonLabel: 'Add Low Priority Task' },
  { id: 'medium', label: 'MEDIUM', buttonLabel: 'Add Medium Priority Task' },
  { id: 'high', label: 'HIGH', buttonLabel: 'Add High Priority Task' },
] as const;

export function TaskList() {
  return (
    <section className="page tasks">
      {PRIORITY_COLUMNS.map((column) => (
        <article key={column.id} className="tasks-column">
          <button type="button" className="tasks-column__add">
            {column.buttonLabel}
          </button>
          <div className="tasks-column__panel">
            <p className="tasks-column__title">{column.label}</p>
            <ul className="tasks-column__list">
              {TASKS[column.id].map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}


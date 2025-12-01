import { useMemo, useState } from 'react';
import { TASKS } from '../data/figmaAssets';

const PRIORITY_COLUMNS = [
  { id: 'low', label: 'LOW', buttonLabel: 'Add Low Priority Task' },
  { id: 'medium', label: 'MEDIUM', buttonLabel: 'Add Medium Priority Task' },
  { id: 'high', label: 'HIGH', buttonLabel: 'Add High Priority Task' },
] as const;

type Priority = (typeof PRIORITY_COLUMNS)[number]['id'];

type TaskItem = {
  id: string;
  label: string;
  done: boolean;
};

type TaskState = Record<Priority, TaskItem[]>;

const seedTasks = (): TaskState =>
  PRIORITY_COLUMNS.reduce((acc, column) => {
    acc[column.id] = TASKS[column.id].map((label, index) => ({
      id: `${column.id}-${index}`,
      label,
      done: false,
    }));
    return acc;
  }, {} as TaskState);

export function TaskList() {
  const [tasks, setTasks] = useState<TaskState>(() => seedTasks());

  const toggleTask = (priority: Priority, taskId: string) => {
    setTasks((prev) => ({
      ...prev,
      [priority]: prev[priority].map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task,
      ),
    }));
  };

  const completionByPriority = useMemo(
    () =>
      PRIORITY_COLUMNS.reduce(
        (acc, column) => {
          const list = tasks[column.id];
          const completed = list.filter((task) => task.done).length;
          acc[column.id] = `${completed}/${list.length}`;
          return acc;
        },
        {} as Record<Priority, string>,
      ),
    [tasks],
  );

  return (
    <section className="page tasks">
      {PRIORITY_COLUMNS.map((column) => (
        <article key={column.id} className="tasks-column">
          <button type="button" className="tasks-column__add">
            {column.buttonLabel}
          </button>
          <div className="tasks-column__panel">
            <div className="tasks-column__title-row">
              <p className="tasks-column__title">{column.label}</p>
              <span className="tasks-column__meta">{completionByPriority[column.id]} done</span>
            </div>
            <ul className="tasks-column__list">
              {tasks[column.id].map((task) => (
                <li
                  key={task.id}
                  className={`tasks-column__item ${task.done ? 'is-done' : ''}`}
                >
                  <label>
                    <input
                      type="checkbox"
                      checked={task.done}
                      onChange={() => toggleTask(column.id, task.id)}
                    />
                    <span>{task.label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}


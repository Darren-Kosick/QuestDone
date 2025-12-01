import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import './App.css';
import { Header } from './components/Header';
import { FocusTimer } from './pages/FocusTimer';
import { Profile } from './pages/Profile';
import { Rewards } from './pages/Rewards';
import { Settings } from './pages/Settings';
import { TaskList } from './pages/TaskList';
import type { PageId } from './types';

const PAGE_COMPONENTS: Record<PageId, ReactNode> = {
  profile: <Profile />,
  focus: <FocusTimer />,
  rewards: <Rewards />,
  tasks: <TaskList />,
  settings: <Settings />,
};

function App() {
  const [activePage, setActivePage] = useState<PageId>('profile');
  const page = useMemo(() => PAGE_COMPONENTS[activePage], [activePage]);

  return (
    <div className="app">
      <div className="app__content">
        <Header activePage={activePage} onNavigate={setActivePage} />
        <main className="app-main">{page}</main>
      </div>
    </div>
  );
}

export default App;

import "./global.css"
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { TaskManager } from './components/TaskManager/TaskManager';

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <TaskManager />
    </div>
  )
}

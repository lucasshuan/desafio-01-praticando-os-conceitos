import { Counter } from "../Counter/Counter";
import { ITask, Task } from "../Task/Task";
import { TaskInput } from "../TaskInput/TaskInput";
import styles from "./TaskManager.module.css"
import { useState } from "react";
import clipboardIcon from "../../assets/clipboard-icon.svg"

export function TaskManager() {
    const [tasks, setTasks] = useState<ITask[]>([]);

    function onCreateTask(newTask: ITask) {
        setTasks(state => [...state, newTask]);
    } 

    function onDeleteTask(id: string) {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    }

    function onUpdateTask(updatedTask: ITask) {
        const updatedTasks = tasks.map(task => {
            if (task.id === updatedTask.id) return updatedTask;
            return task;
        })
        setTasks(updatedTasks);
        console.log(updatedTask);
    }

    const completedTasks = tasks.filter(task => task.isComplete)
    
    return(
        <div className={styles.wrapper}>
            <TaskInput onCreateTask={onCreateTask}/>
            <div className={styles.infoHolder}>
                <Counter 
                    className={styles.createdCounter} 
                    title="Tarefas criadas" 
                    text={`${tasks.length}`}
                />
                <Counter 
                    className={styles.completedCounter} 
                    title="Concluídas" 
                    text={`${completedTasks.length} de ${tasks.length}`}
                />
            </div>
            <div className={styles.list}>
                {tasks.length > 0 
                ? tasks.map(task => {
                    return (
                        <Task 
                            key={task.id} 
                            task={task} 
                            onDeleteTask={onDeleteTask}
                            onUpdateTask={onUpdateTask}
                        />
                    )
                }) 
                : 
                <div className={styles.empty}>
                    <img src={clipboardIcon} width={56}/>
                    <span className={styles.emptyTitle}>Você não tem tarefas cadastradas</span>
                    <span>Crie tarefas e organize seus items a fazer</span>
                </div>
                }
            </div>
        </div>
    )
}

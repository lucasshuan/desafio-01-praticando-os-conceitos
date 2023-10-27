import { useState } from "react";
import styles from "./Task.module.css";
import checkmarkIcon from "../../assets/checkmark-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";

export interface ITask{
    id: string;
    title: string;
    isComplete: boolean;
}

interface TaskProps {
    task: ITask;
    onUpdateTask: (updatedTask: ITask) => void;
    onDeleteTask: (id: string) => void;
}

export function Task({ task, onUpdateTask, onDeleteTask }: TaskProps) {
    const [isComplete, setIsComplete] = useState(task.isComplete);

    function updateTask() {
        setIsComplete(state => !state);
        onUpdateTask({
            id: task.id,
            title: task.title,
            isComplete: !isComplete,
        });
        console.log(!isComplete);
    }

    function deleteTask() {
        onDeleteTask(task.id)
    }

    return(
        <div className={styles.wrapper}>
            <button
                onClick={updateTask}
                className={`${styles.toggle} ${isComplete ? styles.toggleOn : styles.toggleOff}`}
            > 
                {isComplete ? <img width="14px" src={checkmarkIcon}/> : ""}
            </button>
            <span className={`${styles.title} ${isComplete ? styles.titleComplete : styles.titleActive}`}>
                {task.title}
            </span>
            <button className={styles.deleteButton} onClick={deleteTask}>
                <FontAwesomeIcon icon={faTrashCan}/>
            </button>
        </div>
    )
}
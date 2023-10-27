import styles from "./TaskInput.module.css"
import plusIcon from "../../assets/plus-icon.svg";
import { useState, FormEvent } from "react";
import { ITask } from "../Task/Task";
import { v4 as uuidv4 } from "uuid"

interface TaskInputProps {
    onCreateTask: (task: ITask) => void
}

export function TaskInput({ onCreateTask }: TaskInputProps) {
    const [title, setTitle] = useState("")

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        onCreateTask({
            id: uuidv4(),
            title,
            isComplete: false,
        });
        setTitle("");
    }

    return(
        <form onSubmit={onSubmit} className={styles.wrapper} >
            <input
                type="text"
                name="task"
                className={styles.input} 
                placeholder="Adicione uma nova tarefa"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            >
            </input>
            <button type="submit" className={styles.createButton}>
                Criar <img src={plusIcon}/> 
            </button>
        </form>
    )
}
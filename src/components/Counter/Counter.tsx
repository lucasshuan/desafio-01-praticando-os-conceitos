import styles from "./Counter.module.css"

interface CounterProps{
    title: string;
    text: string;
    className: string;
}

export function Counter({ title, text, className }: CounterProps) {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            {title}
            <span className={styles.counter}>
                {text}
            </span>
        </div>
    )
}
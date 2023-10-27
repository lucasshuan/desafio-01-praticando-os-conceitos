import styles from "./Header.module.css"
import logo from "../../assets/logo.svg";

export function Header() {
    return(
        <div className={styles.wrapper}>
            <div className={styles.bg}>
                <img src={logo} width={126} />
            </div>
        </div>
    )
}
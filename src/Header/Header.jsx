import styles from "./Header.module.css"

export default function Header(){
    return(
        <div className={styles.container}>
            <div className={styles.Header}>
                <h1 className={styles.titulo}>Meu Header</h1>
                <i class="fa-solid fa-bars"></i>
            </div>
            <div className={styles.container_lista}>
                <nav>
                    <ul className={styles.list}>
                        <li>Home</li>
                        <li>Detailes</li>
                        <li>Contato</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
import styles from './ButtonLight.module.css';

const ButtonLight = ({ text = "Kontakt" }) => {
    return (
        <div >
            <section className={styles.buttons}>
                <div className={styles.container}>
                    <a href="#contact" className={styles.btn}>
                        <span>{text}</span>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ButtonLight;

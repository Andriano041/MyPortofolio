    import styles from "../styles/ICanDoSection.module.css";
    import uiux from "../assets/img/uiux.png";
    import program from "../assets/img/program.png";

    export default function ICanDoSection() {
    return (
        <section className={styles.iCanDoSection}>
        <div className={styles.container}>
            <h2>I Can Do</h2>
            <p>
            I love building digital solutions that look great and work
            perfectly. Combining creativity, functionality, and my
            programming skills. I bring ideas to life in the digital
            realm.
            </p>
            
            <div className={styles.servicesGrid}>
            <div className={`${styles.serviceCard} ${styles.uiuxCard}`}>
                <div className={styles.cardContent}>
                <h3>UI&UX Design</h3>
                <p>
                    I design user interfaces that are not only visually appealing
                    but also intuitive and user-friendly, ensuring a seamless
                    experience for users.
                </p>
                </div>
                <div className={styles.cardImage}>
                <img src={uiux} alt="UI/UX Design illustration" />
                </div>
            </div>
            
            <div className={`${styles.serviceCard} ${styles.programmingCard}`}>
                <div className={styles.cardContent}>
                <h3>Programming</h3>
                <p>
                    I develop web applications using modern technologies and
                    frameworks. From front-end to back-end, I create robust
                    and scalable solutions.
                </p>
                </div>
                <div className={styles.cardImage}>
                <img src={program} alt="Programming illustration" />
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    }
import styles from "./hero.module.css";
import assets from "../assets/picture/logo_medicalcare.png";

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}> COVID ID</h2>
                    <h3 className={styles.hero__caption}> Monitoring Perkembangan Covid</h3>
                    <p className={styles.hero_description}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
                    cum accusamus quisquam earum velit ea nobis maiores exercitationem
                    nam temporibus.
                    </p>
                    <button className={styles.hero__btn}>Vaccine</button>
                </div>
                <div className={styles.hero_urgent}>
                    <img
                    className={styles.hero__image}
                    src={assets}
                    alt="logo medical care"/>
                </div>
            </section>
        </div>
    );
    
}

export default Hero;
import styles from "./globalkotak.module.css";

function Globalkotak (props) {
    const {title, total} = props ;
    return (
        <div className={styles.Globalkotak}>
            <h1 className={styles.Globalkotak__title}>
                {title}
            </h1>
            <h3 className={styles.Globalkotak__total}> {total} </h3>
        </div> 
    );
}

export default  Globalkotak;
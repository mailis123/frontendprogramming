import styles from "./global.module.css"
import data from "../../utils/constants/indonesia"
import Globalkotak from "../Globalkotak";

function Global () {
    const global = data.indonesia;
    return (
    <div >
        <section className={styles.container}>
            <h2 className={styles.global__title}>Indonesia</h2>
            <h4 className={styles.global__caption}>Data Covid Berdasarkan Global</h4>
            <div className={styles.global__kotak}>
                {global.map((dataglobal) => {
                    return <Globalkotak key={global.id} title = {dataglobal.status} total = {dataglobal.total} />
                })}
            </div>
        </section>
    </div>
    );
}

export default Global;
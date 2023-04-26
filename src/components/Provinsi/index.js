import Table from "../Provinsitable";

import styles from "./provinsi.module.css"

function Provinsi(props) {
    const { covid } = props;

    return (
    <div className={styles.container}>
        <section className={styles.provinsi}>
            <h2 className={styles.provinsi__title}>Provinsi</h2>
            <h4 className={styles.provinsi__caption}>Data Covid Berdasarkan Provinsi</h4>
            <div className={styles.provinsi__container}>
                <table className={styles.provinsi__gruptable}>
                    <thead>
                        <tr className={styles.provinsi__list}>
                            <th className={styles.provinsi__item}>Provinsi</th>
                            <th className={styles.provinsi__item}>Positif</th>
                            <th className={styles.provinsi__item}>Sembuh</th>
                            <th className={styles.provinsi__item}>Dirawat</th>
                            <th className={styles.provinsi__item}>Meninggal</th>
                        </tr>
                    </thead>
                <tbody className={styles.provinsi__table}>
                {covid.map((dataprovinsi) => { return <Table key={dataprovinsi.kota} provinsi = {dataprovinsi.kota} positif = {dataprovinsi.kasus} 
                sembuh = {dataprovinsi.sembuh} meninggal = {dataprovinsi.meninggal} dirawat = {dataprovinsi.dirawat}/>;})}
                </tbody>
                </table>
            </div>
        </section>

    </div>
    );
}

export default Provinsi;
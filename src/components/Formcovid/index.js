import styles from "./formcovid.module.css";
import { useState } from "react";
import assets from "../assets/picture/logo_conceptualidea.png";

function Formcovid(props) {
    const {covid, setCovid} = props;
    const [ provinsi, setProvinsi ] = useState ("");
    const [status, setStatus] = useState("");
    const [jumlah, setJumlah] = useState("");
    function handleProvinsi (e){
        setProvinsi(e.target.value)
    }
    function handleStatus (e){
        setStatus(e.target.value)
    }
    function handleJumlah (e){
        setJumlah(e.target.value)
    }
    function handleSubmit (e){
        e.preventDefault();
        const cari = covid.findIndex((hasil=>hasil.kota===provinsi));
        covid[cari][status]=jumlah;
        setCovid([...covid]) 
    }
    return (
        <div className={styles.container}>
        <div className={styles.form}>
            <div>
            <img className={styles.formcovid__image} src = {assets} alt="logo_conceptual idea" />
            </div>
            <div className={styles.form__inspace}>
                <div className={styles.form__title}>
                    <h1>Form Covid</h1>
                </div>
                <div className={styles.form__container}>
                   <form action="" onSubmit={handleSubmit}>
                    <div className={styles.form__group}>
                    <label htmlFor="">Provinsi</label>
                    <select value={provinsi} onChange = {handleProvinsi}>
                      <option value="">Choose in here</option>
                      <option value="Jakarta">Jakarta</option>
                      <option value="Jawa Barat">Jawa Barat</option>
                      <option value="Jawa Timur">Jawa Timur</option>
                      <option value="Jawa Tengah">Jawa Tengah</option>
                    </select>   
                </div>
                <div className={styles.form__group}>
                    <label htmlFor="">Status</label>
                    <select value={status} onChange = {handleStatus} className = {styles.addcovid__bawah}>
                        <option value="">Choose in here</option>
                        <option value="kasus">Positif</option>
                        <option value="sembuh">Sembuh</option>
                        <option value="meninggal">Meninggal</option>
                        <option value="dirawat">Dirawat</option>
                    </select>
                </div>    
                <div className={styles.form__group}>
                    <label htmlFor="">Jumlah</label>
                    <input type="number" name="jumlah" className={styles.fromcovid__input} onChange={handleJumlah} value = {jumlah}/>
                </div>
                <div className={styles.form__button}>
                    <input type="submit" value="Submit" />
                </div>
                    </form> 
                </div>
            </div>
        </div>
        </div>
    )
}

export default Formcovid;
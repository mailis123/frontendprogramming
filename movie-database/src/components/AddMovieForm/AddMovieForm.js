import styles from "./AddMovieForm.module.css";
import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import Alert from "../Alert/Alert";

function AddMovieForm(props){
    const {movies, setMovies} = props;

    // buat variable state input form
    const [title, setTitle] = useState("");

    const [year, setYear] = useState();

    const [poster, setPoster] = useState('');

    const [type, setType] = useState('');

    // buat  fungsi handleTitle
    function handleTitle(e) {
        setTitle(e.target.value);
    }

    function handleYear(e){
        setYear(e.target.value);
    }

    // state untuk error input form
    const [isTitleError, setIsTitleError] = useState(false);

    const [isYearError, setIsYearError] = useState(false);

    const [isPosterError, setIsPosterError] = useState(false);

    const [isTypeError, setIsTypeError] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        // validasi form harus diisi
        if(title === ''){
            setIsTitleError(true);
        } else if(year === ''){
            setIsYearError(true);
        } else if(poster === ''){
            setIsPosterError(true);
        } else if(type === ''){
            setIsTypeError(true);
        } else {
            const movie = {
                id: nanoid(),
                year: year,
                poster: poster,
                title: title,
                type: type
            }
            setMovies([...movies, movie]);

            setIsTitleError(false);
            setIsYearError(false);
            setIsPosterError(false);
            setIsTypeError(false);
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.form__left}>
                <img src="https://picsum.photos/400/500" alt="gambar" className={styles.form__picture} />
            </div>

            <div className={styles.form__right}>
                <h2 className={styles.form__title}>Add Movie</h2>

                <form onSubmit={handleSubmit}>
                    <div className={styles.form__content}>
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" className={styles.form__input} value={title} onChange={handleTitle}/>
                        
                        {/* jika isTitleError true, tampilkan teks*/}
                        {isTitleError && <Alert>Title Wajib diisi!</Alert>}
                    </div>

                    <div className={styles.form__content}>
                        <label htmlFor="year">Year</label>
                        <input id="year" type="number" className={styles.form__input} value={year} onChange={handleYear} />

                        {/* jika isDateError true, maka tampilkan error */}
                        {isYearError && <Alert>Year wajib diisi!</Alert>}
                    </div>

                    <div className={styles.form__content}>
                        <label htmlFor="poster">Poster Movie</label>
                        <input id="poster" type="url" className={styles.form__input} value={poster} onChange={(e)=>setPoster(e.target.value)} />

                        {/* jika link kosong, maka tampilkan error */}
                        {isPosterError && <Alert>Picture wajib diisi!</Alert>}
                    </div>

                    <div className={styles.form__content}>
                        <label htmlFor="type">Type</label>
                        <select name="type" id="type" className={styles.form__input} value={type} onChange={(e)=>setType(e.target.value)} >
                            <option value="">Pilih Disini</option>
                            <option value="movie">Movie</option>
                            <option value="cartoon">Cartoon</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="comedy">Comedy</option>
                            <option value="action">Action</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="thriller">Thriller</option>
                        </select>

                        {/* jika type belum dipilih, maka tampilkan error */}
                        {isTypeError && <Alert>Type wajib diisi!</Alert>}
                    </div>
                    <button className={styles.form__btn_button}>Send Movie</button>
                </form>
            </div>
        </div>
    );
}

export default AddMovieForm;
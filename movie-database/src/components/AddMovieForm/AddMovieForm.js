// Mengimport AddMovieForm.modules.css
import styles from "./AddMovieForm.module.css";

function AddMovieForm(){
    return(
        <div className={styles.container}>
            <div className={styles.form__right}>
                <img src="https://picsum.photos/536/354?grayscale" alt="photos" className={styles.form__picture} />
            </div>

            <div className={styles.form__left}>
                <h2 className={styles.form__titlemovie}>Add Movie</h2>

                <form action="addmovie-title">
                    <div className={styles.form__maintenance}>
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" className={styles.form__add_input} />
                    </div>

                    <div className={styles.form__maintenance}>
                        <label htmlFor="year">Year</label>
                        <input id="year" type="text" className={styles.form__add_input} />
                    </div>
                    <button type="submit" className={styles.form__btn_button}>Send Movie</button>
                </form>
            </div>
        </div>
    );
}

export default AddMovieForm;
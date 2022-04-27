/**
 * Membuat component Main.
 * Component Main akan mengembalikan nilai dan menerima inputan
 *
 */
import Hello from "./Hello";

const Main = () => {

    return (
      <main>
            <Hello name="Muhamad" />
            <Hello name="Ismail" />
            <Hello name="Rangga" />
            <Hello name="Anggara" />
            <Hello name="Liams" />
      </main>
    );
}
    
export default Main;
   
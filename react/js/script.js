/**
 * Membuat component Header.
 * Component Header menampilkan navigasi.
 */
function Header() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

/**
 * Membuat component Main.
 * Component Main menampung konten utama.
 */
function Main() {
  return (
    <main>
      {/**
       * Mengirim props ke component Hello.
       * nama props: name
       */}
      <Hello name="Muhamad" />
      <Hello name="Ismail" />
      <Hello name="Rangga" />
      <Hello name="Anggara" />
      <Hello name="Liams" />
    </main>
  );
}

/**
 * Membuat component Footer.
 * Component Footer menampilkan footer website.
 * @returns
 */
function Footer() {
  return (
    <footer>
      <h2>Copyright @mails123</h2>
      <p>Website ini dibuat menggunakan ReactJS</p>
    </footer>
  );
}

/**
 * Membuat component Hello.
 * Component Hello menerima inputan: props.
 *
 */
function Hello(props) {
  // Melakukan destructing props (object)
  const { name } = props;

  return (
    <div>
      <h2>Hello React</h2>
      <p>Saya {name} - Full Stack Developer</p>
    </div>
  );
}

/**
 * Membuat component App.
 * Component utama yang menampung components lain.
 */
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

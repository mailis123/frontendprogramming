/**
 * Membuat component Hello.
 * Component Hello menerima inputan: props.
 *
 */
 const Hello = ({name, major}) => {

  return (
    <div className="hello">
      <h2>Hello React JS</h2>
      <p>Saya {name} - Full Stack Developer</p>
    </div>
  );
}

export default Hello;

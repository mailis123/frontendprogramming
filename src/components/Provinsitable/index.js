import styles from "./provinsitable.module.css"

function Provinsitable(props) {
    const { provinsi,positif,sembuh,dirawat,meninggal} = props;
    return (
        <tr>
            <td>{provinsi}</td>
            <td>{positif}</td>
            <td>{sembuh}</td>
            <td>{dirawat}</td>
            <td>{meninggal}</td>
        </tr>
    );

}

export default Provinsitable;
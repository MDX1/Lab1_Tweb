import Interface2 from "./Interface2";
import '../components/lab3.css';

export const CustomProp = (props: Interface2) => {
  return (
    <>
            <table>

                <tr>
                    <th>Name</th>
                    <th>Prenume</th>
                    <th>Varsta</th>
                    <th>Inaltime</th>
                    <th>Email</th>
                    <th>Adresa</th>
                </tr>

                <tr>

                    <td>{ props.mainInterface.nume}</td>
                    <td>{ props.mainInterface.prenume}</td>
                    <td>{ props.mainInterface.varsta}</td>
                    <td>{ props.mainInterface.inaltime}</td>
                    <td>{ props.secondInterface.email}</td>
                    <td>{ props.secondInterface.adresaHome}</td>

                </tr>

            </table>
        </>
  )

}
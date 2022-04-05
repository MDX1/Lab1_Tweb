import { Interface2 } from "./MyInterface";

interface UtilizatorProps {
    infoUtilizator: Interface2[];
}

const UtilizatorItem = ({ nume, prenume, varsta, inaltime, email, adresaHome}: Interface2) =>{
    return(
        <>
            <br />
            Nume: {nume}
            <br />
            Prenume: {prenume}
            <br />
            Varsta: {varsta}
            <br />
            Inaltime: {inaltime}
            <br />
            Email: {email}
            <br />
            Adresa de acasa: {adresaHome}
            <br />

        </>
    )
}

export const CustomInterface = ({infoUtilizator}: UtilizatorProps) => {
    return(
        <>

            {
                infoUtilizator.map(el => {
                    return(
                        <UtilizatorItem
                            nume={el.nume}
                            prenume={el.prenume}
                            varsta={el.varsta}
                            inaltime={el.inaltime}
                            email={el.email}
                            adresaHome={el.adresaHome}
                        />
                    )
                })
            }

        </>
    )
}
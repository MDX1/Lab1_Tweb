import { Layout, Breadcrumb} from 'antd';
import { Row, Col} from 'antd'
import { Inputs } from './Input';
import './lab3.css';
import { CustomInterface } from '../Interface/CustomInterface';

const style = { background: '#0092ff', padding: '0px 0' };
const {  Content, Footer } = Layout;

export const CustomLayout = () =>{
    const infoElev = [
      {
        nume: "Rick",
        prenume: "Sanchez",
        varsta: 71,
        inaltime: 190,
        email: "@mail.com",
        adresaHome: "Smith Residence",
      },
      {
        nume: "Morty",
        prenume: "Smith",
        varsta: 14,
        inaltime: 160,
        email: "@mail.com",
        adresaHome: "Smith Residence",
      }

    ]
    return(
      <main className='interface-text '>
        <CustomInterface infoUtilizator={infoElev} />
      </main>

    )
    
}

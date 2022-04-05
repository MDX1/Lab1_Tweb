import { Layout, Menu, Breadcrumb} from 'antd';
import { MyCard } from './MyCard';
import { Row, Col} from 'antd'
import { Inputs } from './Input';
import './lab3.css';
import { CustomInterface } from '../Interface/CustomInterface';

const style = { background: '#0092ff', padding: '0px 0' };
const { Header, Content, Footer } = Layout;

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
      <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {new Array(5).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">

  

    <Row justify="space-around">
      <Col span={4}><MyCard/></Col>
      <Col span={4}><MyCard/></Col>
      <Col span={4}><MyCard/></Col>
      <Col span={4}><MyCard/></Col>
    </Row>

    <Row justify="space-around">
      <Col span={16}><Inputs/></Col>
    </Row>

      </div>

      <div>

        <CustomInterface infoUtilizator={infoElev} />

     </div>
    </Content>
    
    <Footer style={{ textAlign: 'center' }}>Caraulan Dumitru CR-191</Footer>
  
     
    </Layout>

    )
    
}

import { Layout, Menu, Breadcrumb} from 'antd';
import { MyCard } from './MyCard';
import { Row, Col} from 'antd'
import { Inputs } from './Input';
import { CustomProp } from '../Interface/CustomProp';
import './lab3.css';

const style = { background: '#0092ff', padding: '0px 0' };
const { Header, Content, Footer } = Layout;




export const CustomLayout = () =>{
    const infoElev = {
      id: 1,
      nume: "Rick",
      prenume: "Sanchez",
      varsta: 71,
      inaltime: 170,
      email: "@mail.com",
      adresaHome: "Florilor",
    }

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

        <CustomProp mainInterface={ infoElev } secondInterface={ infoElev}/>

     </div>
    </Content>
    
    <Footer style={{ textAlign: 'center' }}>Caraulan Dumitru CR-191</Footer>
  
     
    </Layout>

    )
    
}

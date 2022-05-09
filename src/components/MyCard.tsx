import { Row, Col} from 'antd'

import { Card } from 'antd';
const { Meta } = Card;

const MyCard = () =>{
    return(

  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    )
}

export const CustomCard = () => {
  return(
    <>
      <main>
        <Row justify="space-around">
          <Col span={4}><MyCard/></Col>
          <Col span={4}><MyCard/></Col>
          <Col span={4}><MyCard/></Col>
          <Col span={4}><MyCard/></Col>
        </Row>
      </main>
    </>
  )
}
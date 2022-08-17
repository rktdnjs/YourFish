// 이 친구는 마이페이지 = Service 탭에 들어가는 친구(임시)
import Nav from 'react-bootstrap/Nav';
import ServiceNavCon from './ServiceNavCon';
import { useState } from 'react';

function ServiceNav() {
    const [tab, setTab] = useState(0);

  return (
    <>
    <Nav justify variant="tabs" defaultActiveKey="link-0">
      <Nav.Item>
        <Nav.Link eventKey="link-0" onClick={()=>{setTab(0)}}>FAQ</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={()=>{setTab(1)}}>1:1문의</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" onClick={()=>{setTab(2)}}>내 문의내역</Nav.Link>
      </Nav.Item>
    </Nav>

    <TabContent tab={tab}/>
    </>
  );
}

function TabContent(props) {

    if(props.tab === 0) {
        return (
        <div>
            <ServiceNavCon/>
        </div>
        )
    }
    else if(props.tab === 1) {
        return (<div>1:1문의내용 상세내용</div>)
    }
    else if(props.tab === 2) {
        return (<div>나의 문의내용 상세내용</div>)
    }
}

export default ServiceNav;


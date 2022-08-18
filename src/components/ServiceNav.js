// 이 친구는 마이페이지 = Service 탭에 들어가는 친구(임시)
import Nav from 'react-bootstrap/Nav';
import ServiceNavCon from './ServiceNavCon';
import { useState } from 'react';
import '../styles/service.css'

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
        return (
        <div>
          <div className='qa'>
          <div className='qatype'>문의 유형</div>
          <input className='qatitle' placeholder='제목'/>
          <textarea className='qacontent' placeholder='문의 내용'/>
          <div className='qawarningtext'>0자 / 최대 500자</div>
          <div className='qa__wrap'>
            <div className='qa__wrap--upload'></div>
            <div className='qa__wrap--uploadbtn'>첨부파일</div>
          </div>
          <div className='qasubmbit'>제출하기</div>
          </div>
        </div>
        )
    }
    else if(props.tab === 2) {
        return (
        <div>
        나의 문의내용 상세내용
        </div>
        )
    }
}

export default ServiceNav;


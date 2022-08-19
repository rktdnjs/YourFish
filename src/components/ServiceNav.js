// 이 친구는 마이페이지 = Service 탭에 들어가는 친구(임시)
import Nav from 'react-bootstrap/Nav';
import ServiceNavCon from './ServiceNavCon';
import { useState } from 'react';
import '../styles/service.css'
import Swal from 'sweetalert2'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [count, setCount] = useState('')
  const textCount = (e) => {
    setCount((e.target.value).length)
  }
  const titleInput = (e) => {
    setTitle(e.target.value);
  }
  const textInput = (e) => {
    setText(e.target.value);
  }
  const navigate = useNavigate();

  const submit = () => {
    if(title.length >= 1 && text.length >= 1) {
      axios.post('http://localhost:4000/users', {
        title : title,
        text : text,
      })
      .then(() => {
        Swal.fire({
          icon:'success',
          text:'문의글 작성 완료!!',
          confirmButtonText:'확인',
          confirmButtonColor:'#3085d6'
        })
        navigate('/MyPage');
      })
    }
    else {
      Swal.fire({
        icon:'error',
        text:'제목과 본문은 최소 1글자 이상이어야 합니다.',
        confirmButtonText:'확인',
        confirmButtonColor:'#3085d6'
      })
    }
  }
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
          <input onKeyUp={titleInput} className='qatitle' placeholder='제목' maxLength='50'/>
          <textarea onChange={textCount} onKeyUp={textInput} className='qacontent' placeholder='문의 내용' maxLength='500'/>
          <div className='qawarningtext'>{count}자 / 최대 500자</div>
          <div className='qa__wrap'>
            <div className='qa__wrap--upload'></div>
            <div className='qa__wrap--uploadbtn'>첨부파일</div>
          </div>
          <div onClick={submit} className='qasubmbit'>제출하기</div>
          </div>
        </div>
        )
    }
    else if(props.tab === 2) {
        return (
        <div>
          <div className='myqa__box'>
            <div className='myqa__box__waitbox'>
              <div className='myqa__box__waitbox--title'>답변대기</div>
              <div className='myqa__box__waitbox--content'>비밀번호를 잊어버렸어요.</div>
              <div className='myqa__box__waitbox--date'>2022.08.13</div>
            </div>
            <div className='myqa__box__completebox'>
              <div className='myqa__box__completebox--title'>답변완료</div>
              <div className='myqa__box__completebox--content'>비밀번호를 또 잊어버렸어요.</div>
              <div className='myqa__box__completebox--date'>2022.08.13</div>
            </div>
            <div className='myqa__box__qbox'>
              <div className='myqa__box__qbox--title'>비밀번호를 또 잊어버렸어요.</div>
              <div className='myqa__box__qbox--content'>비밀번호를 또 잊어버렸어요. CS 담당자님 화내지 말아주세요, 진짜 죄송합니다 ㅠㅠ</div>
            </div>
            <div className='myqa__box__abox'>
              <div className='myqa__box__abox__top'>
                <div className='myqa__box__abox__top--title'>답변완료</div>
                <div className='myqa__box__abox__top--date'>2022.08.13</div>
              </div>
              <div className='myqa__box__abox--content'>안녕하세요. 고객님. 로그인-비밀번호 찾기를 통해 찾아주시면 되겠습니다!</div>
            </div>
          </div>
        </div>
        )
    }
}

export default ServiceNav;


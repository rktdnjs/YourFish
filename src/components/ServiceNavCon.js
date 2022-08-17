// 이 친구도 마이페이지 = Service 탭에 들어가는 친구(임시)
import Accordion from 'react-bootstrap/Accordion';

function ServiceNavCon() {
  return (
    <Accordion defaultActiveKey="1" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>[계정] 처음 설정한 닉네임을 바꾸고 싶어요.</Accordion.Header>
        <Accordion.Body>
          마이페이지 개인정보 수정 탭에서 수정하시면 됩니다.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>[계정] 비밀번호를 잊어버렸어요.</Accordion.Header>
        <Accordion.Body>
          로그인 하단 메뉴 비밀번호 찾기를 통해 비밀번호를 찾으시면 됩니다.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ServiceNavCon;
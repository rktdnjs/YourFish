import React from 'react'
import styled, {createGlobalStyle, keyframes} from 'styled-components';

createGlobalStyle`
    body{
        padding:0;
        margin:0;
    }
`

const Testpage = () => {
  return (
    <Container>
        <Button success>Test</Button>
        <Button danger>Test</Button>
        <Anchor href="http://google.com">Go to Google</Anchor>
        <Circle color="blue"/>
    </Container>
  )
}

const Container = styled.div`
    background-color: #eafcff;
    margin-top:90px;
    height:1000px;
    width:100%
`

const Circle = styled.div`
    width: 10%;
    height: 15%;
    background: ${props => props.color || 'black'};
    border-radius:50%;
`

const Button = styled.button`
    border-radius : 50px;
    padding: 5px;
    min-width : 120px;
    cursor: pointer;
    color: white;
    &:active,
    &:focus {
        outline  none;
    }
    background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
`;

// 컴포넌트에서 props를 넘겨서 받아올 수 있다.

const Anchor = styled(Button.withComponent("a")) `
    text-decoration:none;
`

export default Testpage
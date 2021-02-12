import React, {useState} from "react";
import styled from "styled-components";
import {Button, ButtonGroup} from "../../components/Button/Button.style";
import Popup from "../../components/Popup";

const Home = () => {
    const [count, setCount] = useState(1);
    const [popup, setPopup] = useState(false);
    const countUp = () => {
        setCount(count+1);
    }
    const countDown = () => {
        setCount(count-1);
    }
    const handlePopup = () => {
        setPopup(!popup);
    }

  return (
    <Container>
        <h1>Page Home</h1>
        <Counter>
            <h1>{count}</h1>
            <ButtonGroup>
                <Button onClick={countUp}>UP</Button>
                <Button onClick={countDown}>DOWN</Button>
            </ButtonGroup>
        </Counter>
        <Button onClick={handlePopup}>공지사항보기</Button>
        {
            popup && <Popup onClose={handlePopup}/>
        }
    </Container>
  )
}

const Container = styled.div`

`;

const Counter = styled.div`
  text-align: center;
  h1 {
    margin: 50px 0;
  }
`;

export default Home;
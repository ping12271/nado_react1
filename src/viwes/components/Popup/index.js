import React from "react";
import styled from "styled-components";

const Popup = (props) => {

  return (
    <Container onClick={props.onClose}>
        <Content>
            <h2>공지사항</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aperiam enim esse eum ex laudantium magnam magni maxime necessitatibus nobis perspiciatis, praesentium quis quod repellat, repellendus sed, vero voluptatibus!</p>
        </Content>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 9px;
  width: 400px;
  h2 {
    font-size: 18px;
    margin-bottom: 20px;
  }
  p {
    color: #666;
    font-size: 14px;
    line-height: 1.5;
  }
`;

export default Popup;
import React from "react";
import styled from "styled-components";

const Nav = (props) => {

  return (
    <Container>
        {
          props.routes.map((item, index) => {
                //배열을 순회하여 새로운 배열을 리턴한다. 배열에 있는 객체 하나하나가 item에 들어 오는 것임
                return <NavLink>{item.name}</NavLink>
            })
        }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLink = styled.div`
  height: 70px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Nav;
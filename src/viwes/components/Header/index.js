import React from "react";
import styled from "styled-components";
import Nav from "../../components/Header/Nav";

const routes = [
    {
        name: 'home'
    },
    {
        name: 'todos'
    },
    {
        name: 'photos'
    },
]

const Header = () => {

  return (
    <Container>
        <Logo>lala</Logo>
        <Nav routes={routes} />
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 50px;
  border: 1px solid #e0e0e0;
  text-transform: uppercase;
`;

const Logo = styled.div`
  text-transform: uppercase;
`;

export default Header;
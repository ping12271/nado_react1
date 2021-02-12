import React, {useState, useEffect} from "react";
import styled from "styled-components";

import Header from "./components/Header";
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Photos from "./pages/Photos";
import Todos from "./pages/Todos";



const App = () => {

    useEffect(() => {

    }, [])

    return (
        <Container>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/photos'} component={Photos}/>
                <Route path={'/todos'} component={Todos}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;
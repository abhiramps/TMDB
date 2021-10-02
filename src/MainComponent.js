import React from 'react'
import SimpleTabs from './components/Tabs/TabsComponent'
import { Container } from 'react-bootstrap';
import { ShowProvider } from './Contexts/Contexts';
import Navbar from './componentsold/navbar/Navbar';

function MainComponent() {
    return (
        <Container fluid>
            <Navbar></Navbar>
            <ShowProvider>
                <div style={{ position: "relative", top: "5rem" }}>
                    <SimpleTabs></SimpleTabs>
                </div>
            </ShowProvider>
        </Container>
    )
}

export default MainComponent

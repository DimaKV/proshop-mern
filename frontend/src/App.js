import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Fotter from './components/Footer'
import HomeScreen from './screens/HomeScreen'

function App() {
    return (
        <>
            <Header />
            <main>
                <Container classNmae="py-3">
                    <HomeScreen />
                </Container>
            </main>
            <Fotter />
        </>
    )
}

export default App

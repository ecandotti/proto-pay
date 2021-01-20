import { h } from 'preact'
import Router from 'preact-router'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Contact from './pages/Contact'
import Error from './pages/Error'

const App = () => {
    return (
        <div>
            <Header />
            <Router>
                <Home path="/" />
                <Contact path="/contact" />
                <Login path="/login" />
                <Register path="/register" />
                <Error type="404" default />
            </Router>
            <Footer />
        </div>
    )
}

export default App

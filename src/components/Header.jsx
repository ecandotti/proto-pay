import { h } from 'preact'

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/login">Log in</a>
                </li>
                <li>
                    <a href="/register">Register</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header

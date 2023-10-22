import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navigation}>
            <div className="logo">
                <img src="/images/logo.png" alt="" />
            </div>
            <div className="navbar">
                <ul>
                    <li href='#'>Home</li>
                    <li href='#'>About</li>
                    <li href='#'>Contact</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

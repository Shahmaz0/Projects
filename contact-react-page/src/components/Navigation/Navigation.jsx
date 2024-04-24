import styles from './Navigaton.module.css';

function Navigation() {

    return (
        <nav className={`${styles.Navigation} container`}>
            <div className="logo">
                <img src="/images/logo.png" alt="do some coding logo"/>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navigation;
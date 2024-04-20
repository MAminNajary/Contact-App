import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
        <h1>Contact App</h1>
        <p><a target='blank' href="https://github.com/MAminNajary">GitHub</a> | React App</p>
    </div>
  )
}

export default Header
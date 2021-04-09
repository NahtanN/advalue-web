import { FaCrown } from 'react-icons/fa'
import { FiSearch, FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi'

import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.logo}>
          <FaCrown size={40}/>
          <h1>Vital</h1>
        </section>

        <section className={styles.search}>
          <input type="text" className={styles.search_bar} placeholder="Search"/>
          <FiSearch id={styles.search_icon} size={24}/>
        </section>

        <section className={styles.user}>
          <FiUser size={24}/>
        </section>
        
        <section className={styles.heart}>
          <FiHeart size={24}/>
        </section>

        <section className={styles.cart}>
          <FiShoppingCart size={24}/>
        </section>
      </div>
    </header>
  )
}

export default Header
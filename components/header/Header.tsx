import { useRouter } from 'next/dist/client/router'
import { FaCrown } from 'react-icons/fa'
import { FiSearch, FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi'

import styles from './header.module.css'

const Header = () => {
  const router = useRouter()
  
  const handleLogoClick = () => {
    sessionStorage.setItem('filter', 'All-products')
    sessionStorage.setItem('product', 'index')

    router.push('/')
  }

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.logo} onClick={handleLogoClick}>
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
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaCcVisa, FaCcMastercard, FaCcPaypal, FaBitcoin } from 'react-icons/fa'

import styles from './footer.module.css'

const Footer = () => {

  const handleClickBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={styles.container}>
      
      <button
        id='back_to_top'
        className={styles.back_to_top}
        onClick={handleClickBackToTop}
      >
        Back to top
      </button>

      <footer className={styles.main_footer}>      
        <section className={styles.social}>
          <div>
            <h1>Vital</h1>
          </div>

          <div>
            <p>Products</p>
            <p>About</p>
            <p>Contacts</p>
          </div>

          <div className={styles.social_links}>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram id={styles.instagram} />
            <FaYoutube />
          </div>
        </section>

        <section className={styles.info}>
          <div id={styles.usage}>
            <p><small>@ 2021. Vital UI kit</small></p>
            <p><small>Privacy Policy</small></p>
            <p><small>Terms of Use</small></p>
          </div>

          <div className={styles.payment_methods}>
            <p>
              <small>Accepted payment methods</small>
            </p>

            <FaCcVisa />
            <FaCcMastercard id={styles.mastercard} />
            <FaCcPaypal />
            <FaBitcoin />
          </div>
        </section>
      </footer>
    </div>
  )
}

export default Footer
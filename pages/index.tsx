import Head from 'next/head'
import Image from 'next/image'
import { FiHeart, FiShoppingCart, FiXCircle } from 'react-icons/fi'

import Header from '../components/header/Header'
import Aside from '../components/aside/Aside'
import Filter from '../components/filter/Filter'

import styles from '../styles/pages/index.module.css'

export default function Home() {
  return (
      <div>
        <Head>
            <title>Vital - Home</title>
        </Head>

        <Header />
        <div className={styles.main}>
          <Aside style={styles.aside}/>
          <Filter style={styles.filter}/>
        </div>
        {/* <div className={styles.wrapper}>
          <section className={styles.container}>
            <div className={styles.product}>
              <div className={styles.image_container}>
                  <Image
                    id="te" 
                    priority
                    src="/images/bitcoin.jpeg"                          
                    layout="fill"
                    objectFit="fill"
                    quality={100}
                    alt="bitcoin"
                    className={styles.image}
                  />
              </div>

              <h1 className={styles.title}>Vitae tortor condimentum lacinia quis vel</h1>
              <span className={styles.category}>Categoria</span>
              <p className={styles.price}>$ 300</p>

              <div className={styles.interactions}>
                <FiHeart id={styles.heart}/>
                <FiShoppingCart id={styles.cart}/>
              </div>
            </div>
          </section>

          <section className={styles.container}>
            <div className={styles.product}>
              <div className={styles.image_container}>
                  <Image
                    id="te" 
                    priority
                    src="/images/bitcoin.jpeg"                          
                    layout="fill"
                    objectFit="fill"
                    quality={100}
                    alt="bitcoin"
                    className={styles.image}
                  />
              </div>

              <h1 className={styles.title}>Vitae tortor condimentum lacinia quis vel</h1>
              <span className={styles.category}>Categoria</span>
              <p className={styles.price}>$ 300</p>

              <div className={styles.interactions}>
                <FiHeart id={styles.heart}/>
                <FiShoppingCart id={styles.cart}/>
              </div>
            </div>
          </section>

          <section className={styles.container}>
            <div className={styles.product}>
              <div className={styles.image_container}>
                  <Image
                    id="te" 
                    priority
                    src="/images/bitcoin.jpeg"                          
                    layout="fill"
                    objectFit="fill"
                    quality={100}
                    alt="bitcoin"
                    className={styles.image}
                  />
              </div>

              <h1 className={styles.title}>Vitae tortor condimentum lacinia quis vel</h1>
              <span className={styles.category}>Categoria</span>
              <p className={styles.price}>$ 300</p>

              <div className={styles.interactions}>
                <FiHeart id={styles.heart}/>
                <FiShoppingCart id={styles.cart}/>
              </div>
            </div>
          </section>
          
          <section className={styles.container}>
            <div className={styles.product}>
              <div className={styles.image_container}>
                  <Image
                    id="te" 
                    priority
                    src="/images/bitcoin.jpeg"                          
                    layout="fill"
                    objectFit="fill"
                    quality={100}
                    alt="bitcoin"
                    className={styles.image}
                  />
              </div>

              <h1 className={styles.title}>Vitae tortor condimentum lacinia quis vel</h1>
              <span className={styles.category}>Categoria</span>
              <p className={styles.price}>$ 300</p>

              <div className={styles.interactions}>
                <FiHeart id={styles.heart}/>
                <FiXCircle id={styles.cart}/>
              </div>
            </div>
          </section>
        </div> */}
      </div>
  )
}

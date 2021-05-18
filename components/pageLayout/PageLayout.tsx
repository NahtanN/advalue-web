import Head from 'next/head'
import React from 'react'
import Aside from '../aside/Aside'
import Filter from '../filter/Filter'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Products from '../products/Products'
import ScrollBackToTop from '../scroll/ScrollBackToTop'
import styles from './pageLayout.module.css'

interface ComponentProps {
  head: string;
}

const PageLayout: React.FC<ComponentProps> = ({ head }) => {

  return (
    <div>
      <Head>
        <title>{ head }</title>
      </Head>

      <Header />
      <ScrollBackToTop />

      <div className={styles.main}>

        <Aside style={styles.aside} />
        <Filter style={styles.filter} />
        <Products style={styles.products}/>
        
      </div>

      <Footer />

    </div>
  )
}

export default PageLayout
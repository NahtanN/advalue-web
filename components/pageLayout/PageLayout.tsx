import React, { useState } from 'react'
import Head from 'next/head'

import Header from '../header/Header'
import Aside from '../aside/Aside'
import Filter from '../filter/Filter'
import Products, { ProductInterface } from '../products/Products'
import ScrollBackToTop from '../scroll/ScrollBackToTop'
import InfiniteScrollComponent from '../fetchProducts/InfiniteScroll'

import styles from './pageLayout.module.css'

interface ComponentProps {
  head: string;
  products: any
}

const PageLayout: React.FC<ComponentProps> = ({ head, products }) => {
  const [ data, setData ] = useState<ProductInterface[]>()
  
  const handleData = (newData: ProductInterface[]) => {
    if (data === undefined) return setData(newData)
    
    setData(prev => [...data, ...newData])
  }

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
        <Products style={styles.products}  products={products} clientFetching={data} />
        <InfiniteScrollComponent style={styles.loadProducts} reqData={handleData} />

      </div>

    </div>
  )
}

export default PageLayout
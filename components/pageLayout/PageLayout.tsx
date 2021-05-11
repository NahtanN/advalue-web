import React, { useState } from 'react'
import Head from 'next/head'

import Header from '../header/Header'
import Aside from '../aside/Aside'
import Filter from '../filter/Filter'
import ProductsSkeleton from '../skeletons/productsSkeleton/ProductsSkeleton'
import Products, { ProductInterface } from '../products/Products'
import ScrollBackToTop from '../scroll/ScrollBackToTop'
import InfiniteScrollComponent from '../fetchProducts/InfiniteScroll'
import Footer from '../footer/Footer'

import styles from './pageLayout.module.css'

interface ComponentProps {
  head: string;
  products?: any;
  isLoading?: boolean;
}

const PageLayout: React.FC<ComponentProps> = ({ head, products, isLoading=false }) => {
  const [ data, setData ] = useState<ProductInterface[]>()
  
  // Handles the data received from the infinete scroll and passes it to the 'Products' component
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

        {
          isLoading
            ? <ProductsSkeleton style={styles.products} />
            : <Products style={styles.products}  products={products} clientFetching={data} />
        }        

        <InfiniteScrollComponent style={styles.loadProducts} reqData={handleData} />

      </div>

      <Footer />

    </div>
  )
}

export default PageLayout
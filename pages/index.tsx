import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next'

import Header from '../components/header/Header'
import Aside from '../components/aside/Aside'
import Filter from '../components/filter/Filter'
import Products, { ProductInterface } from '../components/products/Products'
import ScrollBackToTop from '../components/scroll/ScrollBackToTop'
import FetchProducts from '../components/fetchProducts/fetchProducts'
import InfiniteScroll from '../components/fetchProducts/infiniteScroll'

import styles from '../styles/pages/index.module.css'

interface Products {
  current_page: number;
  prev_page: number;
  next_page: number;
  quantity: number;
  data: Array<ProductInterface>;
}

interface ComponentProps {
  products: Products;
}

export const getStaticProps: GetStaticProps = async () => {
  const API = await fetch(process.env.API_URL)
  const products: Products = await API.json()

  return {
    props: {
      products
    },
    revalidate: 5
  }
}

const Home = ({ products }: ComponentProps) => {
  const [ data, setData ] = useState<ProductInterface[]>()
  console.log(data)
  const handleData = (newData: ProductInterface[]) => {
    if (data === undefined) return setData(newData)
    
    setData(prev => [...data, ...newData])
  }

  return (
    <div>
      <Head>
        <title>Vital - Home</title>
      </Head>

      <Header/>
      <ScrollBackToTop/>

      <div className={styles.main}>

        <Aside style={styles.aside} />
        <Filter style={styles.filter} />
        <Products style={styles.products} products={products.data} clientFetching={data}/>
        <FetchProducts style={styles.loadProducts} reqData={handleData}/>
        {/* <InfiniteScroll style={styles.loadProducts} reqData={handleData}/> */}
      </div>

    </div>
  )
}

export default Home;
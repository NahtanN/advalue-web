import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next'

import Header from '../components/header/Header'
import Aside from '../components/aside/Aside'
import Filter from '../components/filter/Filter'
import Products, { ProductInterface } from '../components/products/Products'
import ScrollBackToTop from '../components/scroll/ScrollBackToTop'
import LoadProducts from '../components/loadProducts/loadProducts'

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
        <LoadProducts style={styles.loadProducts} reqData={setData}/>

      </div>

    </div>
  )
}

export default Home;
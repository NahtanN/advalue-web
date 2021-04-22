import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import PageLayout from '../components/pageLayout/PageLayout';
import { ProductInterface } from '../components/products/Products';

interface ProductsAPI {
  current_page: number;
  prev_page: number;
  next_page: number;
  quantity: number;
  data: Array<ProductInterface>;
}

interface ComponentProps {
  products: ProductsAPI;
}

export const getStaticProps: GetStaticProps = async () => {
  const API = await fetch(process.env.API_URL)
  const products: ProductsAPI = await API.json()

  return {
    props: {
      products
    },
    revalidate: 5
  }
}

const Home = ({ products }: ComponentProps) => {

  useEffect(() => {
    sessionStorage.setItem('product', 'index')
  }, [])

  return (
    <PageLayout head={'Vital - Home'} products={products.data} />
  )
}

export default Home;
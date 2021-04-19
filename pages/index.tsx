import { GetStaticProps } from 'next';
import React from 'react';
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

  return (
    <PageLayout head={'Vital - Home'} products={products.data} />
  )
}

export default Home;
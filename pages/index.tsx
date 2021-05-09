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

// Runs at build time
// Fetch external data and send it as props to the page
// Revalidation every 5 seconds
export const getStaticProps: GetStaticProps = async () => {
  
  // Get the external data from the database
  const API = await fetch(process.env.API_URL)
  const products: ProductsAPI = await API.json()

  // The value of 'props' key will be passed to the 'Home' component
  return {
    props: {
      products
    },
    revalidate: 5
  }
}

// Creates a static homepage with 10 products
const Home = ({ products }: ComponentProps) => {

  return (

    // Default layout for the web site
    <PageLayout head={'Vital - Home'} products={products.data}/>
  )
}

export default Home;
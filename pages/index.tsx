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

const Home = () => {
  
  useEffect(() => {
    sessionStorage.setItem('product', 'index')
    sessionStorage.setItem('filter', 'All-products')
  }, [])
  
  // useEffect(() => {

  //   const data = {
  //     product: 'index',
  //     filter: 'All+products',
  //     path: '/'
  //   }

  //   sessionStorage.setItem('sessionData', JSON.stringify(data))
    
  // }, [])

  return (

    // Default layout for the web site
    <PageLayout head={'Vital - Home'}/>
  )
}

export default Home;
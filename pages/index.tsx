import React, { useEffect } from 'react';
import PageLayout from '../components/pageLayout/PageLayout';
import { ProductInterface } from '../components/products/Products';

const Home = () => {
  
  useEffect(() => {
    sessionStorage.setItem('product', 'index')
    sessionStorage.setItem('filter', 'All-products')
  })

  return (

    // Default layout for the web site
    <PageLayout head={'AdValue - Home'}/>
  )
}

export default Home;
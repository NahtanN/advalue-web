import React, { useState } from 'react'
import Products, { ProductInterface } from '../products/Products'

import styles from './loadProducts.module.css'

interface Products {
  current_page: number;
  prev_page: number;
  next_page: number;
  quantity: number;
  data: Array<ProductInterface>;
}

const LoadProducts = ({ style, reqData }) => {

  const fecthProducts = async () => {
    var API = await fetch(`${process.env.API_URL}/?pg=2`)
    var products: Products = await API.json()

    return products.data
  }

  return (
    <div className={style} onClick={async () => await fecthProducts().then(data => reqData(data))}>
      <button className={styles.loadProducts}>Load products</button>
    </div>
  )
}

export default LoadProducts
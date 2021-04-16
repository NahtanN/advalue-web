import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Products, { ProductInterface } from '../products/Products'

import styles from './fetchProducts.module.css'

interface Products {
  current_page: number;
  prev_page: number;
  next_page: number;
  quantity: number;
  data: Array<ProductInterface>;
  Error?: String
}

const LoadProducts = ({ style, reqData }) => {
  const [page, setPage] = useState(2)
  const [ btnId, setBtnId ] = useState<string>()
  const [ flag, setFlag ] = useState(true)

  const { data: products, error } = useFetch<Products>(`${process.env.API_URL}/?pg=${page}`)

  useEffect(() => {
    products?.Error 
      ? (
        setBtnId(styles.loadProductsDisable),
        setFlag(false)
      )
      : setBtnId(styles.loadProducts)
  }, [products])

  return (
    <div
      className={style}
      onClick={async () => {
        if (flag) {
          setPage(page + 1)
          reqData(products.data)
        }
      }}
    >
      <button
        id={btnId}
        className={styles.fetchProducts} 
      >
        Load products
      </button>
    </div>
  )
}

export default LoadProducts
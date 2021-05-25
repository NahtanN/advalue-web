import React from 'react'
import { FaRegFrown } from 'react-icons/fa'

import styles from './productsNotFound.module.css'
import { useRouter } from 'next/dist/client/router'

interface ComponentProps {
  style: string;
}

const ProductsNotFound: React.FC<ComponentProps> = ({ style }) => {

  const router = useRouter()

  const handleBackToHome = () => {
    sessionStorage.setItem('filter', 'All-products')
    sessionStorage.setItem('product', 'index')

    router.push('/')
  }

  return (
    <div className={style}>
      <div className={styles.container}>
        <FaRegFrown size={25}/>

        <span id={styles.notFound}><strong>Products not found!</strong></span>

        <span id={styles.BackHome} onClick={handleBackToHome}><small>Back to home</small></span>
      </div>
    </div>
  )
}

export default ProductsNotFound
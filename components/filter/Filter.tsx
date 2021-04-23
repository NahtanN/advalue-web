import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './filter.module.css'

export default function filter({ style }) {
  const [ getProduct, setProduct ] = useState<string>()

  useEffect(() => {
    setProduct(sessionStorage.getItem('product'))
  })

  useEffect(() => {
    const filter = sessionStorage.getItem('filter')

    if (!filter) {
      return sessionStorage.setItem('filter', 'All products')
    }

    const selectTag = document.getElementById(filter)

    selectTag.setAttribute('class', styles.filter_enable)
  })

  const handleSelectFilter = (setFilter: string) => {
    const selectedFilter = sessionStorage.getItem('filter')
    
    const selectTag = document.getElementById(selectedFilter)    
    selectTag.setAttribute('class', styles.filter_disable)

    sessionStorage.setItem('filter', setFilter)
  }

  return (
    <div className={style}>
      <section className={styles.filter}>
        <Link href={{
            pathname: '/homepage/products/filter',
            query: { 
              ctg: getProduct,
              fil: 'All products'
             }
          }}>
          <a 
            id='All products' 
            onClick={() => handleSelectFilter('All products')}
            className={styles.filter_disable}
          >
            <small>All products</small>
          </a>
        </Link>

        <Link href={{
            pathname: '/homepage/products/filter',
            query: { 
              ctg: getProduct,
              fil: 'Low price'
             }
          }}>
          <a 
            id='Low price'
            onClick={() => handleSelectFilter('Low price')}
            className={styles.filter_disable}
          >
            <small>Low price</small>
          </a>
        </Link>

        <Link href={{
            pathname: '/homepage/products/filter',
            query: { 
              ctg: getProduct,
              fil: 'High price'
             }
          }}>
          <a 
            id='High price'
            onClick={() => handleSelectFilter('High price')}
            className={styles.filter_disable}
          >
            <small>High price</small>
          </a>
        </Link>
        
      </section>
    </div>
  )
}
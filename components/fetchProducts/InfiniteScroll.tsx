import { useCallback, useEffect, useRef, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { ProductInterface } from '../products/Products'

import styles from './fetchProducts.module.css'

interface Products {
  current_page: number;
  prev_page: number;
  next_page: number;
  quantity: number;
  data: Array<ProductInterface>;
  Error?: String
}

const InfiniteScrollComponent = ({ style, reqData }) => {
  const [page, setPage] = useState(2)
  const [products, setProducts] = useState<Products>()

  const containerRef = useRef()

  const { data } = useFetch<Products>(`${process.env.API_URL}/?pg=${page}`)

  useEffect(() => {
    if (data) setProducts(data)
  }, [data])

  useEffect(() => {

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect()

        if (products && !products.Error) {
          reqData(products.data)
          setPage(page + 1)
        }

      }
    }, options)

    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
    }

  }, [products])

  return (
    <div
      className={style}
      ref={containerRef}
    >
    </div>
  )
}

export default InfiniteScrollComponent
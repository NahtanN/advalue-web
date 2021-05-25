import { useRouter } from "next/dist/client/router"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { FiHeart, FiShoppingCart } from "react-icons/fi"
import useSWR from "swr"
import { fetcher } from "../../hooks/useFetch"
import getFilterUrl from "../../utils/getFilterUrl"
import InfiniteScrollComponent from "../fetchProducts/InfiniteScroll"
import ProductsSkeleton from '../skeletons/productsSkeleton/ProductsSkeleton'
import styles from './products.module.css'
import ProductsNotFound from '../404Error/ProductsNotFound'

interface RequestProducts {
  current_page: number;
  prev_page: number;
  next_page: number;
  quantity: number;
  data: Array<ProductInterface>;
  Error?: String
}

export interface ProductInterface {
  _id: string;
  title: string;
  value: number;
  category: string;  
  images: Array<{
    name: string;
    size: number;
    key: string;
    url: string;
  }>;
}

interface ComponentProps {
  style: string;
}

// Default schema for the products
const productSchema = (product: ProductInterface) => {
  return (
    <section className={styles.container} key={product._id}>
      <div className={styles.product}>
        <div className={styles.image_container}>
          <Image
            className={styles.image}
            priority
            src={product.images[0].url}
            layout="fill"
            objectFit="fill"
            quality={100}
            alt="bitcoin"
          />
        </div>

        <h1 className={styles.title}>{product.title}</h1>
        <span className={styles.category}>{product.category}</span>
        <p className={styles.price}>$ {product.value}</p>

        <div className={styles.interactions}>
          <FiHeart id={styles.heart} />
          <FiShoppingCart id={styles.cart} />
        </div>
      </div>
    </section>
  )
}

/**
 * Returns the products
 * 
 * @param style - className for styling
 * @param products - receive the products from the static generation
 * @param clientFetching - receive the products from the client fetching
 * @returns the products components
 */
const Products: React.FC<ComponentProps> = ({ style }) => {
  
  const { pathname, asPath } = useRouter()
  const [page, setPage] = useState(1)
  const [products, setProducts] = useState<ProductInterface[]>()

  const { data: reqAPI } = useSWR<RequestProducts>(getFilterUrl(page), fetcher)
  
  useEffect(() => {
    
    if (pathname != '/') {

      setProducts(undefined)
      setPage(1)

    }
    
  }, [asPath])

  useEffect(() => {

    if(reqAPI && !reqAPI.Error && products == undefined) {

      setProducts(reqAPI.data)
      setPage(page + 1)

    }

  }, [reqAPI])

  const handleProductSchema = (reqAPI: RequestProducts) => {
  
    if (!reqAPI) return <ProductsSkeleton style={style} />
  
    if (reqAPI && reqAPI.Error && products === undefined) return <ProductsNotFound style={style} />
  }

  const handleShowProducts = (newProducts: ProductInterface[]) => {    

    setProducts(prev => [...products, ...newProducts])
    setPage(page + 1)

  }

  return (
    <div className={style}>
      {
        products != undefined
          ? (
            products.map(product => {
              return productSchema(product)
            })            
          )
          : ''
      }
      {
        handleProductSchema(reqAPI)
      }
          
      <InfiniteScrollComponent 
        style={styles.loadProducts}

        reqData={reqAPI}

        resData={handleShowProducts}
      />

    </div>    
  )
}

export default Products;
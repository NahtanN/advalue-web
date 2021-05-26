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
 * @returns the products components
 */
const Products: React.FC<ComponentProps> = ({ style }) => {
  
  const { pathname, asPath } = useRouter() // Get current route
  const [page, setPage] = useState(1) // Set page number
  const [products, setProducts] = useState<ProductInterface[]>() // Define produts variable

  // Fetch products from external API
  const { data: reqAPI } = useSWR<RequestProducts>(getFilterUrl(page), fetcher)
  
  // When the route path changes, reset the products variable
  useEffect(() => {
    
    if (pathname != '/') {

      setProducts(undefined)
      setPage(1)

    }
    
  }, [asPath])

  // Set products variable on the first load
  useEffect(() => {

    if(reqAPI && !reqAPI.Error && products == undefined) {

      setProducts(reqAPI.data)
      setPage(page + 1)

    }

  }, [reqAPI])

  // While the fetcher is loading, return a product skeleton
  // If the data from fetcher is an Error, return a product not found component
  const handleProductSchema = (reqAPI: RequestProducts) => {
  
    if (!reqAPI) return <ProductsSkeleton style={style} />
  
    if (reqAPI && reqAPI.Error && products === undefined) return <ProductsNotFound style={style} />
  }

  // Add new products to the 'products' variable and increment the 'page' variable
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
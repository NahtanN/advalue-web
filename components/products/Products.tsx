import Image from "next/image"
import React from "react"
import { FiHeart, FiShoppingCart } from "react-icons/fi"

import styles from './products.module.css'

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
  products?: Array<ProductInterface>;
  clientFetching?: Array<ProductInterface>;
}

/**
 * Returns the products
 * 
 * @param style - className for styling
 * @param products - receive the products from the static generation
 * @param clientFetching - receive the products from the client fetching
 * @returns the products components
 */
const Products: React.FC<ComponentProps> = ({ style, products, clientFetching }) => {

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

  return (
    <div className={style}>
      {products?.map((product: ProductInterface) => {
        return productSchema(product)
      })}
      {
        clientFetching
          ? (
            clientFetching.map(product => {
              return productSchema(product)
            })
          )
          : ''
      }
    </div>
  )
}

export default Products;
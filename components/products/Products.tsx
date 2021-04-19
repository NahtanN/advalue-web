import Image from "next/image"
import React from "react"
import { FiHeart, FiShoppingCart } from "react-icons/fi"

import styles from './products.module.css'

export interface ProductInterface {
  id: string;
  title: string;
  value: number;
  created_at: string;
  category_id: number;
  category: {
    id: number;
    name: string;
  };
  images: Array<{
    id: number;
    name: string;
    size: number;
    key: string;
    url: string;
    created_at: string;
    product_id: string;
  }>;
}

interface ComponentProps {
  style: string;
  products?: Array<ProductInterface>;
  clientFetching?: Array<ProductInterface>;
}

const Products: React.FC<ComponentProps> = ({ style, products, clientFetching }) => {

  const productSchema = (product: ProductInterface) => {
    return (
      <section className={styles.container} key={product.id}>
        <div className={styles.product}>
          <div className={styles.image_container}>
            <Image
              id="te"
              priority
              src={product.images[0].url}
              layout="fill"
              objectFit="fill"
              quality={100}
              alt="bitcoin"
              className={styles.image}
            />
          </div>

          <h1 className={styles.title}>{product.title}</h1>
          <span className={styles.category}>{product.category.name}</span>
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
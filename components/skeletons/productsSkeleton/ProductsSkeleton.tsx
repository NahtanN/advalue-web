import styles from './productsSkeleton.module.css'

/**
 * Returns a loading skeleton
 * 
 * @param style - className for styling 
 * @returns a loading skeleton
 */
const ProductsSkeleton = ({ style }) => {
  return (
    <div className={style}>
      <section className={styles.container}>
        <div className={styles.product}>
          <div className={styles.image_container}></div>

          <div className={styles.title}></div>

          <div className={styles.category}></div>
          
          <div className={styles.price}></div>
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.product}>
          <div className={styles.image_container}></div>

          <div className={styles.title}></div>

          <div className={styles.category}></div>
          
          <div className={styles.price}></div>
        </div>
      </section>
      
      <section className={styles.container}>
        <div className={styles.product}>
          <div className={styles.image_container}></div>

          <div className={styles.title}></div>

          <div className={styles.category}></div>
          
          <div className={styles.price}></div>
        </div>
      </section>
    </div>
  )
}

export default ProductsSkeleton
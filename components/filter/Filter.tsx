import styles from './filter.module.css'

export default function filter({ style }) {
    return (
        <div className={ style }>
            <section className={styles.filter}>
                <a href="">
                    <small>All products</small>
                </a>
                <a href="">
                    <small>Low price</small>
                </a>
                <a href="">
                    <small>High price</small>
                </a>
            </section>
        </div>
    )
}
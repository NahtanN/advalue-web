import Link from 'next/link'
import styles from './filter.module.css'

export default function filter({ style }) {
    return (
        <div className={ style }>
            <section className={styles.filter}>
                <Link href="">
                    <a>
                        <small>All products</small>
                    </a>
                </Link>
                <Link href="">
                    <a>
                        <small>Low price</small>
                    </a>
                </Link>
                <Link href="">
                    <a>
                        <small>High price</small>
                    </a>
                </Link>
            </section>
        </div>
    )
}
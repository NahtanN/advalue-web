import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'

import styles from './aside.module.css';

export default function Aside({ style }) {
    return (
        <aside className={style}>
            <ul className={styles.categories}>
                <li>
                    <Link href="">
                        <a >
                            Computers
                            <FiChevronRight id={styles.arrow} size={15} />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <a >
                            Acessories
                            <FiChevronRight id={styles.arrow} size={15} />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <a >
                            Cell Phone
                            <FiChevronRight id={styles.arrow} size={15} />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <a >
                            Books
                            <FiChevronRight id={styles.arrow} size={15} />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <a >
                            Sports
                            <FiChevronRight id={styles.arrow} size={15} />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <a >
                            Clothing
                            <FiChevronRight id={styles.arrow} size={15} />
                        </a>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}
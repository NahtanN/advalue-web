import { FiChevronRight } from 'react-icons/fi'

import styles from './aside.module.css';

export default function Aside({ style }) {
    return (
        <aside className={style}>
            <ul className={styles.categories}>
                <li>                                        
                    Computers
                    <FiChevronRight id={styles.arrow} size={15} />
                </li>
                <li>
                    Acessories
                    <FiChevronRight size={15} />
                </li>
                <li>
                    Cell Phone
                    <FiChevronRight size={15} />
                </li>
                <li>
                    Books
                    <FiChevronRight size={15} />
                </li>
                <li>
                    Sports
                    <FiChevronRight size={15} />
                </li>
                <li>
                    Clothing
                    <FiChevronRight size={15} />
                </li>
            </ul>
        </aside>
    )
}
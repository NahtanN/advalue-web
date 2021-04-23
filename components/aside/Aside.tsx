import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi'

import styles from './aside.module.css';

export default function Aside({ style }) {
  const router = useRouter()

  const [ getFilter, setFilter ] = useState<string>()

  useEffect(() => {
    setFilter(sessionStorage.getItem('filter'))
  })

  useEffect(() => {
    const filterCategorie = sessionStorage.getItem('product')

    if (!filterCategorie || router.pathname === '/homepage' ) return

    if (filterCategorie != 'index') {
      const selectedTag = document.getElementById(filterCategorie)
  
      selectedTag.setAttribute('class', styles.selected_products)
    }

  })

  const handleSelectProduct = (selectedProduct: string) => {
    const filterCategorie = sessionStorage.getItem('product')

    if (filterCategorie && filterCategorie != 'index') {
      const selectedTag = document.getElementById(filterCategorie)
      selectedTag.removeAttribute('class')
    }

    sessionStorage.setItem('product', selectedProduct)
  }

  return (
    <aside className={style}>
      <ul className={styles.categories}>
        <li id='Computers'>
          <Link href={{
            pathname: '/homepage/products/filter',
            query: { 
              ctg: 'Computer',
              fil: getFilter
             }
          }}>
            <a onClick={() => handleSelectProduct('Computers')}>
              <p>Computers</p>
              <FiChevronRight id={styles.arrow} size={15} />
            </a>
          </Link>
        </li>

        <li id='Acessories'>
          <Link href={{
            pathname: '/homepage/products/filter',
            query: { 
              ctg: 'Acessories',
              fil: getFilter
            }
          }}>
            <a onClick={() => handleSelectProduct('Acessories')}>
              <p>Acessories</p>
              <FiChevronRight id={styles.arrow} size={15} />
            </a>
          </Link>
        </li>

        <li id='Cell Phone'>
          <Link href={{
            pathname: '/homepage/products/filter',
            query: { 
              ctg: 'Cell Phone',
              fil: getFilter
            }
          }}>
            <a onClick={() => handleSelectProduct('Cell Phone')} id='Cell Phone'>
              <p>Cell Phone</p>
              <FiChevronRight id={styles.arrow} size={15} />
            </a>
          </Link>
        </li>

        <li id='Books'>
          <Link href={{
            pathname: '/homepage/products/filter',
            query: { 
              ctg: 'Books',
              fil: getFilter
            }
          }}>
            <a onClick={() => handleSelectProduct('Books')} id='Books'>
              <p>Books</p>
              <FiChevronRight id={styles.arrow} size={15} />
            </a>
          </Link>
        </li>

        <li id='Sports'>
          <Link href={{
            pathname: '/homepage/products/filter',
            query: { 
              ctg: 'Sports',
              fil: getFilter
            }
          }}>
            <a onClick={() => handleSelectProduct('Sports')} id='Sports'>
              <p>Sports</p>
              <FiChevronRight id={styles.arrow} size={15} />
            </a>
          </Link>
        </li>

        <li id='Clothing'>
          <Link href={{
            pathname: '/homepage/products/filter',
            query: { 
              ctg: 'Clothing',
              fil: getFilter
            }
          }}>
            <a onClick={() => handleSelectProduct('Clothing')} id='Clothing'>
              <p>Clothing</p>
              <FiChevronRight id={styles.arrow} size={15} />
            </a>
          </Link>
        </li>
      </ul>
    </aside>
  )
}
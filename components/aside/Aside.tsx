import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi'
import useFetch from '../../hooks/useFetch'
import AsideSkeleton from '../skeletons/asideSkeleton/AsideSkeleton'

import styles from './aside.module.css';


interface CategoryInterface {
  name: string
}

export default function Aside({ style }) {
  
  // Handles the select product
  const [ getFilter, setFilter ] = useState<string>()
  
  const router = useRouter()

  // Fetch external data
  const categories = useFetch('/categories').data

  useEffect(() => {
    setFilter(sessionStorage.getItem('filter'))
  })

  // Triggered after every rendering
  useEffect(() => {

    try {
      
      // Gets the filter categorie
      const filterCategorie = sessionStorage.getItem('product')

      // If it is the first loading page or the pathname equals 'homepage', ignore
      if (!filterCategorie || router.pathname === '/' || filterCategorie === 'index') return

      // Changes the style of the selected category
      const selectedTag = document.getElementById(filterCategorie)

      selectedTag.setAttribute('class', styles.selected_products)

    } catch (err) {}

    }
  )

  // Update the 'product' variable in the session storage
  const handleSelectProduct = (selectedProduct: string) => {
    
    // Gets the 'product' variable in session storage
    const filterCategorie = sessionStorage.getItem('product')

    // Removes the style of category
    if (filterCategorie && filterCategorie != 'index') {
      const selectedTag = document.getElementById(filterCategorie)
      selectedTag.removeAttribute('class')
    }

    // Sets the new 'product' in session storage
    sessionStorage.setItem('product', selectedProduct)
  }

  // If fetch is loading, return an 'aside' skeleton
  if (!categories) return <AsideSkeleton style={style}/>

  return (
    <aside className={style}>
      <ul className={styles.categories}>
        {
          categories.map((category: CategoryInterface) => {
            const placeHolder = category.name

            return (
              <li
                id={placeHolder}
                key={placeHolder}
              >
                <Link href={{
                  pathname: '/products/filter',
                  query: {
                    ctg: placeHolder,
                    fil: getFilter
                  }
                }}>
                  <a onClick={() => handleSelectProduct(placeHolder)}>
                    <p>{placeHolder}</p>
                    <FiChevronRight id={styles.arrow} size={15} />
                  </a>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </aside>
  )
}
import { useEffect, useState } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import getScrollPosition from '../../utils/scrollPosition'

import styles from './scrollBackToTop.module.css'


const ScrollBackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrolledStatus, setScrolledStatus] = useState(0)

  const listenToScroll = () => {
    const { winScroll, scrolled } = getScrollPosition()

    setScrollPosition(winScroll)
    setScrolledStatus(scrolled)
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
  }, [])

  useEffect(() => {
    var scrollBackToTop = document.getElementById('wrapper')

    scrollPosition < 159 || scrolledStatus > 0.97
      ? scrollBackToTop.style.visibility = 'hidden'
      : scrollBackToTop.style.visibility = 'visible'    
  }, [scrollPosition])
  
  const handleclick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className={styles.wrapper} id='wrapper'>
      <a className={styles.scroll} onClick={handleclick}>
        <FiChevronUp />
      </a>
    </div>
  )
}

export default ScrollBackToTop;
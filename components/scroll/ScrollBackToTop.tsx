import { useEffect, useState } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import getScrollPosition from '../../utils/scrollPosition'

import styles from './scrollBackToTop.module.css'


const ScrollBackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const listenToScroll = () => {
    const { winScroll } = getScrollPosition()

    setScrollPosition(winScroll)
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
  }, [])

  useEffect(() => {
    var scrollBackToTop = document.getElementById('wrapper')

    if (scrollPosition < 159) {
      scrollBackToTop.style.visibility = 'hidden'
    } else {
      scrollBackToTop.style.visibility = 'visible'
    }

  }, [scrollPosition])
  return (
    <div className={styles.wrapper} id='wrapper'>
      <a className={styles.scroll} href="/#">
        <FiChevronUp />
      </a>
    </div>
  )
}

export default ScrollBackToTop;
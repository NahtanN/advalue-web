import { useEffect, useState } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import getScrollPosition from '../../utils/scrollPosition'

import styles from './scrollBackToTop.module.css'

// Side button responsible to scroll back to top
const ScrollBackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrolledStatus, setScrolledStatus] = useState(0)

  // Observe the scroll position
  const listenToScroll = () => {
    
    /**
     * @property winScroll - gets how much has been scrolled
     * @property scrolled - gets how much of the page has been displayed
     */
    const { winScroll, scrolled } = getScrollPosition()
    
    setScrollPosition(winScroll)
    setScrolledStatus(scrolled)
  }

  // When the page is loads, add an event listener called 'scroll'
  // with the 'listenToScroll' function 
  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
  }, [])

  // Triggered when the 'scrollPosition' is updated
  useEffect(() => {
    var scrollBackToTop = document.getElementById('wrapper')

    // Sets the visibility of the 'div' component
    scrollPosition < 159 || scrolledStatus > 0.93
      ? scrollBackToTop.style.visibility = 'hidden'
      : scrollBackToTop.style.visibility = 'visible'    
  }, [scrollPosition])
  
  // When the 'div' is clicked, scroll back to top
  const handleclick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
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
import { useEffect } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import getScrollPosition from '../../utils/scrollPosition'
import styles from './scrollBackToTop.module.css'


// Side button responsible to scroll back to top
const ScrollBackToTop = () => {

  // When the page is loaded, set a EventListener called 'scroll' to the body
  useEffect(() => {

    var scrollBackToTop = document.getElementById('wrapper')

    scrollBackToTop.style.visibility = 'hidden'

    window.addEventListener('scroll', (event) => {

      // Get the button 'Back to top' at the footer
      let element = document.getElementById('back_to_top')

      // Get scroll position
      const { winScroll } = getScrollPosition()

      // Add a observer to the window
      createObserver(element, scrollBackToTop, winScroll)

    }, false)
  }, [])
  
  // Observer that oberve the 'back to top' button position based on the root
  const createObserver = (element: HTMLElement, changeElement: HTMLElement, position: number) => {
    
    const options = {
      root: null, // Checks the visibility of the target based on the browser viewport
      rootMargin: '0px', // Margin around the root
      threshold: 0.5 // When 50% of the target is visible, the callback is invoked
    }

    const observer = new IntersectionObserver((([entry]) => {

      if (position < 159 || entry.isIntersecting) changeElement.style.visibility = 'hidden' // If 'back to top' is visible, hide 'scroll back to top' button
      else if (position >= 159) changeElement.style.visibility = 'visible' // If 'back to top' is not visible, show 'scroll back to top' button

    }), options)

    observer.observe(element)
  }

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
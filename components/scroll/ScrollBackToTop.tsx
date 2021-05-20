import { useEffect } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import getScrollPosition from '../../utils/scrollPosition'
import styles from './scrollBackToTop.module.css'


// Side button responsible to scroll back to top
const ScrollBackToTop = () => {

  // When the page is loads, add an event listener called 'scroll'
  // with the 'listenToScroll' function 
  useEffect(() => {
    var scrollBackToTop = document.getElementById('wrapper')

    scrollBackToTop.style.visibility = 'hidden'

    window.addEventListener('scroll', (event) => {
      let element = document.getElementById('back_to_top')

      const { winScroll } = getScrollPosition()

      createObserver(element, scrollBackToTop, winScroll)
    }, false)
  }, [])
  
  const createObserver = (element: HTMLElement, changeElement: HTMLElement, position: number) => {
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const observer = new IntersectionObserver((([entry]) => {

      if (position < 159 || entry.isIntersecting) changeElement.style.visibility = 'hidden'
      else if (position >= 159) changeElement.style.visibility = 'visible'

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
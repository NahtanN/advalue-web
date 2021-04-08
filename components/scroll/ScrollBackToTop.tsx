import { FiChevronUp } from 'react-icons/fi'

import styles from './scrollBackToTop.module.css'


const ScrollBackToTop = () => {
    const isBrowser = typeof window !== undefined

    const getScrollPosition = () => {
        console.log(typeof window.scrollY)
        if (window.scrollY === 159) {
            var scroll = document.getElementById('wrapper')
            scroll.style.visibility = 'visible'
        }
    }
    
    if (!isBrowser) getScrollPosition()

    return (
        <div className={ styles.wrapper } id="wrapper">
            <a className={styles.scroll}>
                <FiChevronUp/>
            </a>
        </div>
    )
}

export default ScrollBackToTop;
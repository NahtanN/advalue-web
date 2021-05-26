import { useEffect, useRef } from 'react'

/**
 * Returns a component responsible for infinite scroll
 * 
 * @param style - className for styling 
 * @param reqData - property that will be populated with the fetch data
 * @returns a invisible component responsible for handle the infinite scroll
 */
const InfiniteScrollComponent = ({ style, reqData, resData }) => {

  // Create a mutable value that exists for the lifetime of the component instance
  // In this project, we gonna store the 'div' tag responsible for the infinite scroll
  const containerRef = useRef()

  // When the variable 'product' is updated, set a 'IntersectionObserver' to the 
  // invisible 'div' responsible for the infinite scroll
  useEffect(() => {

    const options = {
      root: null, // Checks the visibility of the target based on the browser viewport
      rootMargin: '0px', // Margin around the root
      threshold: 1.0, // When 100% of the target is visible, the callback is invoked
    }

    // when the target meets the threshold for the 'IntersectionObserver',
    // the callback is invoked
    const observer = new IntersectionObserver(([entry]) => {

      // If the target is intersecting with the root
      if (entry.isIntersecting) {

        // Avoid loading more than one time
        observer.disconnect()

        if (reqData != undefined && !reqData.Error) {

          resData(reqData.data)
          
        }

      }
    }, options)

    // Once the observer is created, it target an element to watch
    observer.observe(containerRef.current)

    // Disconnects from the target
    return () => {
      observer.disconnect()
    }

  }, [reqData])

  return (
    <div
      className={style}
      ref={containerRef}
    >
    </div>
  )
}

export default InfiniteScrollComponent
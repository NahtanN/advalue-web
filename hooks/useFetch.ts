import useSWR from 'swr'

import Products, { ProductInterface } from '../components/products/Products'


interface Products {
  current_page: number;
  prev_page: number;
  next_page: number;
  quantity: number;
  data: Array<ProductInterface>;
}

/**
 * Returns the fetching data
 * 
 * @param url - url for the fetching 
 * @returns the data received from the fetching
 */
function useFetch<Data = any, Error = any>(url: string) {
  
  // Fetch data using SWR
  const { data, error } = useSWR<Data, Error>(url, async () => {
    var API = await fetch(url)
    var data = await API.json()

    return data
  }, {
    errorRetryCount: 5
  })
  
  return { data, error }
}

export default useFetch
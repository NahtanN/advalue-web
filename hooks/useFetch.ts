import useSWR from 'swr'

import Products, { ProductInterface } from '../components/products/Products'


interface Products {
  current_page: number;
  prev_page: number;
  next_page: number;
  quantity: number;
  data: Array<ProductInterface>;
}

function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async () => {
    var API = await fetch(url)
    var data = await API.json()

    return data
  })
  
  return { data, error }
}

export default useFetch
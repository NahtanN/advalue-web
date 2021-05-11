import useSWR from 'swr'
import API from '../service/API'

/**
 * Returns the fetching data
 * 
 * @param url - url for the fetching 
 * @returns the data received from the fetching
 */
function useFetch<Data = any, Error = any>(url: string) {
  
  // Fetch data using SWR
  const { data, error } = useSWR<Data, Error>(url, async () => {
    var response = await API.get(url)
    var result = await response.data
    
    return result
  }, {
    errorRetryCount: 5
  })
  
  return { data, error }
}

export default useFetch
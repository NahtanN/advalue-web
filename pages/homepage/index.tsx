import { useEffect } from 'react'
import PageLayout from '../../components/pageLayout/PageLayout'
import useFetch from '../../hooks/useFetch'

const HomePage = () => {
    const { data: products } = useFetch(`${process.env.API_URL}/?pg=${1}`)
    
    useEffect(() => {
        sessionStorage.setItem('product', 'index')
      }, [])

    if (!products) return <PageLayout head={'Vital - Home'} isLoading={true} />

    return (
        <PageLayout head={'Vital - Home'} products={products.data} />
    )
}

export default HomePage
import PageLayout from '../../../components/pageLayout/PageLayout'
import useFetch from '../../../hooks/useFetch'

const Filter = () => {
    
    // Fecth external data
    const { data: products } = useFetch(`${process.env.API_URL}/?pg=${1}`)
    
    // If the fetch is not completed, returns a loading skeleton
    if (!products) return <PageLayout head={'Vital - Home'} isLoading={true} />

    return (
        
        // Default layout for the web site
        <PageLayout head={'Vital - Home'} products={products.data} />
    )
}

export default Filter
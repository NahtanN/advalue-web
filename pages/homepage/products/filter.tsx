import PageLayout from '../../../components/pageLayout/PageLayout'
import useFetch from '../../../hooks/useFetch'

const Filter = () => {
    const { data: products } = useFetch(`${process.env.API_URL}/?pg=${1}`)
    
    if (!products) return <PageLayout head={'Vital - Home'} isLoading={true} />

    return (
        <PageLayout head={'Vital - Home'} products={products.data} />
    )
}

export default Filter
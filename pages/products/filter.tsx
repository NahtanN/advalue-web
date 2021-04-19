import Header from '../../components/header/Header'
import PageLayout from '../../components/pageLayout/PageLayout'
import useFetch from '../../hooks/useFetch'

const Filter = () => {
    const { data: products } = useFetch(`${process.env.API_URL}/?pg=${2}`)
    
    if (!products) return <div>Loading...</div>

    return (
        <PageLayout head={'Vital - Home'} products={products.data} />
    )
}

export default Filter
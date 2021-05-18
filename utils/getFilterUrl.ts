const getFilterUrl = (page: number) => {

    try {
        const product = sessionStorage.getItem('product')
        const filter = sessionStorage.getItem('filter')
    
        return `/homepage/products/filter?ctg=${product}&fil=${filter}&pg=${page}`
    } catch (err) {}
    
}

export default getFilterUrl
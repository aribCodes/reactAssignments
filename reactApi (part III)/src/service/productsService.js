const getAllProducts = async (skip) => {
    try {
        const responseApi = await fetch(
            `https://dummyjson.com/products?limit=10
            &skip=${skip}`
        )
        const data = await responseApi.json()
        console.log("skip ki value: ",skip);
        return data
    } catch (error) {
        console.error('Err', error)
        return null
    }
}


const searchProduct = async (search, skip) => {
    try {
        if (search.length > 0) {
            const responseApi = await fetch(
                `https://dummyjson.com/products/search?q=${search}`
            )
            const data = await responseApi.json()
            return data
        }
        else{
            const responseApi = await fetch(
                `https://dummyjson.com/products?limit=${skip+10}`
            )
            const data = await responseApi.json()
            return data
        }
        
    } catch (error) {
        console.error('Err', error)
        return null
    }
}



export {
    getAllProducts,
    searchProduct
}
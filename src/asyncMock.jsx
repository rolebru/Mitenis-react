const products = [
    {
        id: '1',
        name: 'Babolat pure drive',
        price: 380000,
        category: 'raquetas',
        img: '',
        stock: 15,
        description:'mucha potencia'
    },
    {
        id: '2',
        name: 'wilson Blade',
        price: 325000,
        category: 'raquetas',
        img: '',
        stock: 15,
        description:'mucho control'
    },
    {
        id: '3',
        name: 'head radical',
        price: 420000,
        category: 'raquetas',
        img: '',
        stock: 15,
        description:'control y potencia'
    }
]

export const getProductById = (productId) => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
export default products
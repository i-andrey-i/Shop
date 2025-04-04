
import Header from '../../components/header/header'
import Card from '../../components/card/card'
import styles from './mainPage.module.scss'
import { getProducts } from '../../services/api'
import { useEffect, useState } from 'react'
import Search from '../../features/search/search'

function MainPage(){
    const [products, setProducts] = useState([])
    const [ filteredProducts, setFilteredProducts] = useState([])

    const [basket, setBasket] = useState(
		JSON.parse(localStorage.getItem('basket')) || []
	)

    useEffect(() =>{
        const getData = async() =>{
            try{
                const data = await getProducts() 
                setProducts(data)
                setFilteredProducts(data)
            }
            catch(error){console.error(error)}
        }
        getData()
    }, [])

    const handleSearch = (filter) =>{
        setFilteredProducts(filter)
    }

    return (
			<div>
				<Header lenBasket={basket.length}/>
				<Search data={products} onSearch={handleSearch} />
				<div className={styles.container}>
					{filteredProducts.map(product => (
						<Card key={product.id} product={product} />
					))}
				</div>
			</div>
		)
}

export default MainPage
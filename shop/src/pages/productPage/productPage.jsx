import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/header'

import styles from './productPage.module.scss'
import { getProduct } from '../../services/api'
import CardInfo from '../../components/cardInfo/cardInfo'
import CardImg from '../../components/cardImg/cardImg'


function ProductPage(){
    const {id} = useParams() 
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true)
    const [actualColor, setActualColor] = useState('')

    const [basket, setBasket] = useState(
        JSON.parse(localStorage.getItem('basket')) || []
    )

    useEffect(()=>{
        const getInfo = async() =>{
            try{
                setLoading(true)
                const information = await getProduct(id)
                setInfo(information)
                setActualColor(information.colors[0])
            }
            catch(error){console.error(error)}
            setLoading(false)
        }
        getInfo()
    }, [id])

    if (loading) return <div></div>
    return (
			<div>
				<Header lenBasket={basket.length}/>
				<div className={styles.block}>
					<CardImg images={actualColor.images} />
					<CardInfo
						info={info}
						actualColor={actualColor}
						change={setActualColor}
					/>
				</div>
			</div>
		)
}

export default ProductPage
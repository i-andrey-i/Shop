import { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import styles from './basketPage.module.scss'
import BasketElement from '../../components/basketElement/basketElement'


function BasketPage(){
    const [basket, setBasket] = useState([])

    useEffect(() => {
			const currentBasket = JSON.parse(localStorage.getItem('basket')) || []
			setBasket(currentBasket)

		}, [])

    const Remove = (itemRemove) =>{
        const updateBasket = basket.filter(item =>
            !(item.id === itemRemove.id && item.colorId === itemRemove.colorId && item.sizeId === itemRemove.sizeId)
        )
        setBasket(updateBasket)
        localStorage.setItem('basket', JSON.stringify(updateBasket))
        window.dispatchEvent(new CustomEvent('basketUpdated'))
    }

    return (
			<div>
				<Header lenBasket={basket.length}/>
				<div className={styles.cardsZone}>
                    {basket.length === 0 ? (<p className={styles.attention}>Корзина пуста!</p>) :
					(basket.map((item) => (
						<BasketElement
							key={`${item.id}-${item.colorId}-${item.sizeId}`}
							item={item}
                            Remove={Remove}
						/>
					)))}
				</div>
			</div>
		)
}

export default BasketPage
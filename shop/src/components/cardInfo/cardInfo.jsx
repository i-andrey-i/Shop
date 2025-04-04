import styles from './cardInfo.module.scss'
import SelectColor from '../../components/selectColor/selectColor'
import SelectSize from '../selectSize/selectSize'
import { useState } from 'react'

function CardInfo({info, actualColor, change}){
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)

    const colorChange = (color) =>{
        change(color)
        setSelectedColor(color.id)
        setSelectedSize(null)
    }

    const clickOnEdd = () =>{
        if(!selectedSize || !selectedColor){
            console.log('Выбери товар!')
            return
        }

        const basketData = localStorage.getItem('basket')
        const currentBasket = basketData ? JSON.parse(basketData) : []

        const item = {
            id: info.id,
            colorId: selectedColor,
            sizeId: selectedSize,
        }

        const isItemExist = currentBasket.some(
            existingItem =>
                existingItem.id === item.id &&
                existingItem.colorId === item.colorId &&
                existingItem.sizeId === item.sizeId
        )

        if (isItemExist) {
            console.log('Этот товар уже в корзине!')
            return
        }

        console.log('Добавление в корзину', {item})
        const updateBasket = [...currentBasket, item]
        localStorage.setItem('basket', JSON.stringify(updateBasket))
        window.dispatchEvent(new CustomEvent('basketUpdated'))
    }

    return(
        <div className={styles.card}>
            <h1>{info.name}</h1>
			<p><b>Цвет:</b> {actualColor.name}</p>
			<p>{actualColor.description}</p>
			<p><b>Цена: </b>{actualColor.price}</p>
			<SelectSize availableSizes={actualColor.sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
            <SelectColor colors={info.colors} change={colorChange} selectedColor={selectedColor}/>
            <h3 className={styles.add} onClick={clickOnEdd}>Добавить товар в корзину</h3>
        </div>
    )
}

export default CardInfo
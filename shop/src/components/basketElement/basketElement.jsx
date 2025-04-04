import { useEffect, useState } from 'react'
import styles from './basketElement.module.scss'
import { getProduct, getSize, getProductColor } from '../../services/api'

function BasketElement({item, Remove}){
    
    const [textInfo, setTextInfo] = useState(null)

    useEffect(() => {
        const getInfo = async() =>{
                try{
                    const [product, size, color] = await Promise.all([
                        getProduct(item.id),
                        getSize(item.sizeId),
                        getProductColor(item.id, item.colorId)
                    ])
                    
                    setTextInfo([color.images[0], product.name, size.label, color.name, color.price])
                }
                catch(error){console.error(error)}
            }
            getInfo()
    }, [item.id, item.colorId, item.sizeId])
    console.log(textInfo)

    if (!textInfo) return <div></div>

    return (
			<div className={styles.cardZone}>
				<img src={textInfo[0]} />
				<div>
					<p>{textInfo[1]}</p>
					<p>Размер: {textInfo[2]}</p>
					<p>Цвет: {textInfo[3]}</p>
					<p>Цена: {textInfo[4]}</p>
				</div>
                <p className={styles.remove} onClick={()=>Remove(item)}>Удалить</p>
			</div>
		)
}

export default BasketElement
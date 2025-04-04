import { useState, useEffect } from 'react'
import styles from './selectSize.module.scss'
import { getSizes } from '../../services/api'

function SelectSize({availableSizes, selectedSize, setSelectedSize}){
    const [sizes, setSizes] = useState([])

    useEffect(() =>{
        const getMe = async() =>{
            try{
                const data = await getSizes()
                setSizes(data)
            }
            catch(error){console.error(error)}
        }
        getMe()
    }, [])   

    return (
		<div>
			<p><b>Доступные размеры </b></p>

			<div className={styles.sizes}>
				{sizes.map(size => (
					<div
						key={size.id}
						className={`${styles.size} ${
							availableSizes.includes(size.id)
								? ((selectedSize == size.id) ? styles.selected : styles.available)
								: styles.unavailable
						}`}
						onClick={() => {
							if (availableSizes.includes(size.id)) {
								setSelectedSize(size.id)
							}
						}}
					>
						{size.label}
					</div>
				))}
			</div>
		</div>
		)
}

export default SelectSize
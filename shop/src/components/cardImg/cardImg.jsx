import { useState } from 'react'
import styles from './cardImg.module.scss'

function CardImg({images}){
    const [currentImgIdx, setCurrentImgIdx] = useState(0)

    const nextImg = () =>{
        if(currentImgIdx != images.length-1){
            setCurrentImgIdx(idx => idx + 1)
        }
    }

    const prevImg = () =>{
        if (currentImgIdx != 0) {
			setCurrentImgIdx(idx => idx - 1)
		}
    }

    return (
        <div className={styles.card}>
            <div onClick={prevImg} className={styles.invisible} style={{left:0}}/>
            <img src={images[currentImgIdx]} />
            <div onClick={nextImg} className={styles.invisible} style={{right:0}}/>
        </div>
    )
}

export default CardImg
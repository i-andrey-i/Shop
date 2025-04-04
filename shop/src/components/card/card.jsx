import { useNavigate } from 'react-router-dom'
import styles from './card.module.scss'

function Card({product}){
	const navigate = useNavigate()

	const topOnCard = () =>{
		navigate(`/product/${product.id}`)
	}

    return (
			<div className={styles.card} onClick={topOnCard}>
				<img className={styles.photo} src={product.colors[0].images[0]} />
				<p className={styles.title}>{product.name}</p>
			</div>
		)
}

export default Card
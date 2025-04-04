import styles from './buttonToBasket.module.scss'
import { useNavigate } from 'react-router-dom'

function ButtonToBasket({lenBasket}) {
	const navigate = useNavigate()

	const topOnButton = () => {
		navigate(`/basket`)
	}
	return (
		<div onClick={topOnButton} className={styles.block}>
			<p className={styles.txt}>Корзина {(lenBasket === 0) ? '' : lenBasket}</p>
		</div>
	)
}

export default ButtonToBasket
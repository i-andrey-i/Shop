import ButtonToBasket from '../../shared/buttonToBasket/buttonToBasket'
import styles from './header.module.scss'


function Header({lenBasket}){

    return (
			<div className={styles.value}>
				<ButtonToBasket lenBasket={lenBasket} />
			</div>
		)
}

export default Header


import styles from './selectColor.module.scss'

function SelectColor({colors, change, selectedColor}){

    const colorsDict = {
			черный: '#000000',
			белый: '#FFFFFF',
			серый: '#B8BCC7',
			желтый: '#C88E34',
			синий: '#1E2538',
		}
		
    return (
			<div className={styles.colorBlock}>
				<p className={styles.txt}>
					<b>Доступные цвета</b>
				</p>
				<div className={styles.onlyColor}>
					{colors.map(color => (
						<div
							className={`${styles.colorSquare} ${selectedColor === color.id ? styles.selected : ''}`}
							key={color.id}
							onClick={() => change(color)}
							style={{ backgroundColor: colorsDict[color.name.toLowerCase()] }}
						></div>
					))}
				</div>
			</div>
		)
}

export default SelectColor
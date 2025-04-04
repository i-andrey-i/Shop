import { useEffect, useState } from 'react'
import styles from './search.module.scss'

function Search({data, onSearch}){
    const [searchItem, setSearchItem] = useState('')

    useEffect(()=>{
        const timer = setTimeout(() =>{
            const filtered = data.filter((item) =>
            item.name.toLowerCase().includes(searchItem)
        )
        onSearch(filtered)
        }, 300)
        return () => clearTimeout(timer)
    }, [searchItem, data])

    return(
        <div className={styles.search}>
            <input className={styles.field} 
            type='text' 
            placeholder='Поиск' 
            value={searchItem}
            onChange={(e)=>setSearchItem(e.target.value.toLocaleLowerCase())}/>

        </div>
  )
}

export default Search
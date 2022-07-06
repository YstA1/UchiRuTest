import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CatsItem } from '../../components/CatsItem'
import './FavoriteCats.scss'

function FavoriteCats({setWindowLocation}) {
  const catsData = useSelector(store => store.toolkit.favoriteCats)

  useEffect(()=>{
    setWindowLocation(window.location.href)
  },[])
  
  return (
    <div className='cats__container'>
      {catsData.map(cat => {
        return (
          <CatsItem cat={cat}/>
        )
      })}
    </div>
  )
}

export {FavoriteCats}
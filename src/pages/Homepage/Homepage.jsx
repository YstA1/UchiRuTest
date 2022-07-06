import React, { useEffect } from 'react'
import { CatsItem } from '../../components/CatsItem'
import './Homepage.scss'

function Homepage({catsData, getCats, setWindowLocation}) {
  useEffect(()=>{
    setWindowLocation(window.location.href)
  },[])
  return (
    <>
      <div className='cats__container'>
        {catsData.map(cat => {
          return (
            <CatsItem cat={cat}/>
          )
        })}
      </div>
      <button onClick={getCats} className='cats__reload'>Обновить котиков</button>
    </>
  )
}


export  {Homepage}
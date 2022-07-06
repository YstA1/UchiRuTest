import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFavoriteCat } from '../redux/toolkitSlice'
import { removeFavoriteCat } from '../redux/toolkitSlice'
import './CatsItem.scss'


function CatsItem({cat}) {
  const dispacth = useDispatch()

  const favoriteCats = useSelector(store => store.toolkit.favoriteCats)

  function clickHandler () {
    if(favoriteCats.filter(favorite => favorite.id == cat.id).length == 0) dispacth(setFavoriteCat(cat))
    if(favoriteCats.filter(favorite => favorite.id == cat.id).length > 0) dispacth(removeFavoriteCat(cat))
  }

  return (
    <div className='cats__item'>
      <img className='cats__picture' src={cat.url} alt="Фотка котэ"/>
      <svg onClick={clickHandler} className='cats__like-btn' width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path className={favoriteCats.filter(favorite => favorite.id == cat.id).length > 0 ? 'cats__like-btn-svg cats__like-btn-svg_active' : 'cats__like-btn-svg'} d="M33 6C29.52 6 26.18 7.62 24 10.18C21.82 7.62 18.48 6 15 6C8.84 6 4 10.84 4 17C4 24.56 10.8 30.72 21.1 40.08L24 42.7L26.9 40.06C37.2 30.72 44 24.56 44 17C44 10.84 39.16 6 33 6ZM24.2 37.1L24 37.3L23.8 37.1C14.28 28.48 8 22.78 8 17C8 13 11 10 15 10C18.08 10 21.08 11.98 22.14 14.72H25.88C26.92 11.98 29.92 10 33 10C37 10 40 13 40 17C40 22.78 33.72 28.48 24.2 37.1Z" fill="#F24E1E"/>
      </svg>
    </div>
  )
}

export  {CatsItem}
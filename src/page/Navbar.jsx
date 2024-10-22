/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const menuList = ['카테고리1','카테고리2','카테고리3','카테고리4','카테고리5','카테고리6'];
  return (
    <div>
      <div>
        <div className='login-btn'>
            <FontAwesomeIcon icon={faUser} />
            <div className='login'>로그인</div>
        </div>

      </div>
      <div className='nav-logo'>
        <img width={150} src={`${process.env.PUBLIC_URL}/JMLogo.webp`}/>
      </div>
      <div className='search'>
            <div className='search-bar'>
                 <FontAwesomeIcon icon={faSearch}/>
                <input type="text" placeholder='검색어를 입력하세요.'/>
            </div>
           
        </div>
      <div className='menu-area'>
        <ul className='menu-list'>
            {menuList.map((menu, idx)=>(<li key={idx}>{menu}</li>))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
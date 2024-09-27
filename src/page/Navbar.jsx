/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const menuList = ['추천','로맨스','BL','판타지/SF', '액션/무협','공포/추리', '드라마','GL']
  return (
    <div>
      <div>
        <div className='login-btn'>
            <FontAwesomeIcon icon={faUser} />
            <div className='login'>로그인</div>
        </div>

      </div>
      <div className='nav-logo'>
        <img width={150} src='https://active.ridibooks.com/navbar/icons/web/ridi.f50c563403f615565a7328888ba19f87.svg'/>
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
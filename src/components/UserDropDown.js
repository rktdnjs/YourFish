// ㅠㅠ 만들었긴 한데 버그가 많아서 네비바에 못합침....
import React from 'react'
import user from '../images/userfeed/user.png'
import '../styles/dropdown.css'
import { useNavigate } from 'react-router-dom'

const UserDropDown = () => {
  const navigate = useNavigate();
  const goToModify = () => {
    navigate('/MyPage/Modify');
  };
  const goToBoard = () => {
    navigate('/MyPage/Board');
  };
  const goToWishList = () => {
    navigate('/MyPage/WishList');
  };
  const goToService = () => {
    navigate('/MyPage/Service');
  };

  return (
    <div>
        <div class="dropdown">
		      <button class="dropdown-button"><img class="img" src={user}/></button>
		      <div class="dropdown-content">
		      	<p onClick={goToModify}>MODIFY</p>
		      	<p onClick={goToBoard}>BOARD</p>
		      	<p onClick={goToWishList}>WISHLIST</p>
		      	<p onClick={goToService}>SERVICE</p>
		      </div>
	      </div>
    </div>
  )
}

export default UserDropDown


// Board 좌측 버튼
import React from 'react'
import '../styles/dropdown.css'
import { useNavigate } from 'react-router-dom'

const BoardDropDown = () => {
  const navigate = useNavigate();
  const goToBoardUserFeed = () => {
    navigate('/MyPage/Board/UserFeed');
  };
  const goToBoardQA = () => {
    navigate('/MyPage/Board/QA');
  };

  return (
    <div>
        <div class="dropdown">
		    <button class="dropdown-button">카테고리</button>
		    <div class="dropdown-content">
		    	<p onClick={goToBoardUserFeed}>유저피드</p>
		    	<p onClick={goToBoardQA}>질문게시판</p>
		    </div>
	    </div>
    </div>
  )
}

export default BoardDropDown


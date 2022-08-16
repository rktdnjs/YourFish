// Board 우측 버튼
import React from 'react'
import '../styles/dropdown.css'

const BoardDropDown2 = () => {
  
    return (
      <div>
          <div className="dropdown">
              <button className="dropdown-button">정렬기준</button>
              <div className="dropdown-content">
                  <p>최신순</p>
                  <p>오래된순</p>
              </div>
          </div>
      </div>
    )
}

export default BoardDropDown2
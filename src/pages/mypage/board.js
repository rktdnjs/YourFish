import React from 'react'
import '../../styles/board.css'
import feed1 from '../../images/userfeed/feed1.png'
import BoardDropDown from '../../components/BoardDropDown'
import BoardDropDown2 from '../../components/BoardDropDown2';

const Board = () => {

  return (
    <div>
        <section className="section__board">
          <div className="section__board__center">
            <div className='section__board__center--title'>BOARD</div>
              <div className='section__board__category'>
                <div className='section__board__category1'>
                  <BoardDropDown/>
                </div>
                <div className='section__board__category2'>
                  <BoardDropDown2/>
                </div>
              </div>
          </div>
          <div className='section__board__basic'>
            <div className='section__board__basic__box'>
              <img className="section__board__basic--feed" src={feed1}/>
              <img className="section__board__basic--feed" src={feed1}/>
              <img className="section__board__basic--feed" src={feed1}/>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Board
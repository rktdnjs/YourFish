import React from 'react'
import '../../../styles/board.css'
import BoardDropDown from '../../../components/BoardDropDown'
import BoardDropDown2 from '../../../components/BoardDropDown2'

const QA = () => {
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
          </div>
        </section>
    </div>
  )
}

export default QA
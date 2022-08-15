import React from 'react'
import '../../../styles/board__qa.css'
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
          <div className='section__board__qa'>
            <div className='section__board__qa__box'>
              <div className='section__board__qa--atitle'>나의 답변 (1)</div>
              <div className='section__board__qa__acontent--top'>
                <div className='section__board__qa__acontent--top1'>제목</div>
                <div className='section__board__qa__acontent--top2'>조회수</div>
                <div className='section__board__qa__acontent--top3'>작성일자</div>
              </div>
              <div className='section__board__qa__acontent--bottom'>
                <div className='section__board__qa__acontent--bottom1'>
                Q 이 물고기는 뭔가요? <br/> 
                A 꼬리로 봐서는 구피로 보입니다.
                </div>
                <div className='section__board__qa__acontent--bottom2'>12</div>
                <div className='section__board__qa__acontent--bottom3'>2022.08.11</div>
              </div>
              </div>

              <div className='section__board__qa__box2'>
              <div className='section__board__qa--atitle'>나의 질문 (1)</div>
              <div className='section__board__qa__acontent--top'>
                <div className='section__board__qa__acontent--top1'>제목</div>
                <div className='section__board__qa__acontent--top2'>조회수</div>
                <div className='section__board__qa__acontent--top3'>작성일자</div>
              </div>
              <div className='section__board__qa__acontent--bottom'>
                <div className='section__board__qa__acontent--bottom1'>
                  구피 밥 추천좀 해주세요. 처음 키워서...
                </div>
                <div className='section__board__qa__acontent--bottom2'>22</div>
                <div className='section__board__qa__acontent--bottom3'>2022.08.11</div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default QA
import React from 'react'
import '../../styles/userfeeddetailsample.css'
import profile from '../../images/userfeed/profile1.png'
import profile2 from '../../images/userfeed/profile2.png'
import profile3 from '../../images/userfeed/profile3.png'
import profile4 from '../../images/userfeed/profile4.png'
import repl from '../../images/userfeed/repl.png'
import bookmark from '../../images/userfeed/bookmark.png'
import thumbnail from '../../images/userfeed/thumbnail2.png'
import leftTab from '../../images/userfeed/leftarrow.png'
import rightTab from '../../images/userfeed/rightarrow.png'

const UserFeedDetailSample = () => {
  

  return (
    <div>
      <section className='section__main'>
        <div className='feeds__detailbox'>

          <div className='feeds__detailbox__top'>
            <div className='feeds__detailbox__top__left'>유저피드</div>
            <div className='feeds__detailbox__top__center'>
              <img className='feeds__detailbox__top__center--profile' src={profile}/>
              <div className='feeds__detailbox__top__center__box'>
                <div className='feeds__detailbox__top__center__box--username'>우영우</div>
                <div className='feeds__detailbox__top__center__box--record'>12시간 전 조회수 1234</div>
              </div>
            </div>
            <div className='feeds__detailbox__top__right'>
                  <img className='feeds__detailbox__top__right--repl' src={repl}/>
                  <div className='feeds__detailbox__top__right--replcount'>4</div>
                  <img className='feeds__detailbox__top__right--bookmark' src={bookmark}/>
            </div>
          </div>


          <div className='feeds__detailbox__center'>
            <div className='feeds__detailbox__center__leftbox'>
              <img className='feeds__detailbox__center__leftbox--thumbnail' src={thumbnail}/>
              <div className='feeds__detailbox__center__leftbox__pagination'>
                <img className='feeds__detailbox__center__leftbox__pagination--left' src={leftTab}/>
                <div className='feeds__detailbox__center__leftbox__pagination--mid'> 1 / 7</div>
                <img className='feeds__detailbox__center__leftbox__pagination--right' src={rightTab}/>
              </div>
            </div>

            <div className='feeds__detailbox__center__middlebox'>
              <div className='feeds__detailbox__center__middlebox__wrap'>
                <div className='feeds__detailbox__center__middlebox__wrap--title'>남방 큰 돌고래는</div>
                <div className='feeds__detailbox__center__middlebox__wrap--content'>포유류에 속하는 남방큰돌고래는 길고 매끈한 몸매에 다 자란 성체의 몸길이는 보통 2.6m, 몸무게는 220~230kg정도 나간다. 등쪽은 짙은 회색이고 배쪽은 등쪽보다 밝은 회색을 띠거나 흰색에 가깝다. 흔히 5~15마리씩 무리지어 다니기도 하지만 100마리 가까이 무리짓기도 하며, 수명은 40년정도인 것으로 알려져 있다. 12개월의 임신기간을 통해 한 마리의 새끼를 낳고, 갓 태어난 새끼의 몸길이는 1~1.5m, 몸무게는 20~23kg정도이며, 새끼는 3~6년간은 어미와 함께 다닌다. 인도양과 서태평양의 열대 및 온대 해역 연안에 주로 서식한다.
                큰돌고래(bottlenose dolphins)가 유일한 것으로 여겨지다가, 1998년에 남방큰돌고래가 별도의 종으로 인정받았다. 남방큰돌고래는 일반적으로 큰돌고래보다 작으며, 부리는 더 길다. 또한 큰돌고래가 각각의 턱에 21~24개의 이빨을 갖고 있는 것에 비해, 남방큰돌고래는 23~29개로 이빨이 더 많다.
                한편 국내에서는 제주 연안에 약 100여 마리의 남방큰돌고래가 서식하고 있는데, 개체 수가 적어 멸종위기종이다. 제주특별자치는 2012년 10월, 국토해양부가 남방큰돌고래를 비롯한 해양동물 8종을 보호대상 해양생물로 지정함에 따라 공연 등 영리목적을 위한 포획이 원천적으로 금지한다고 밝힌 바 있다.
                </div>
              </div>
            </div>

            <div className='feeds__detailbox__center__rightbox'>
              <div className='feeds__detailbox__center__middlebox__wrap'>
                <div className='feeds__detailbox__center__rightbox__repls'>
                    <div className='feeds__detailbox__center__rightbox__replwrap'>
                      <img className='feeds__detailbox__center__rightbox__replwrap--profile' src={profile2} />
                      <div className='feeds__detailbox__center__rightbox__replwrap__box'>
                        <div className='feeds__detailbox__center__rightbox__replwrap__box--username'>로넌</div>
                        <div className='feeds__detailbox__center__rightbox__replwrap__box--content'>좋은 글 구경하고 가요!</div>
                        <div className='feeds__detailbox__top__center__box__replwrap__box__bottom'>
                          <div className='feeds__detailbox__top__center__box__replwrap__box__bottom--record'>12시간 전</div>
                          <div className='feeds__detailbox__top__center__box__replwrap__box__bottom--answer'>답글 쓰기</div>
                        </div>
                      </div>
                    </div> 
                    
                    <div className='feeds__detailbox__center__rightbox__replwrap replanswer'>
                      <img className='feeds__detailbox__center__rightbox__replwrap--profile' src={profile} />
                      <div className='feeds__detailbox__center__rightbox__replwrap__box'>
                        <div className='feeds__detailbox__center__rightbox__replwrap__box--username'>우영우</div>
                        <div className='feeds__detailbox__center__rightbox__replwrap__box--content'>감사합니다 ㅎㅎㅎㅎ!!!!!</div>
                        <div className='feeds__detailbox__top__center__box__replwrap__box__bottom'>
                          <div className='feeds__detailbox__top__center__box__replwrap__box__bottom--record'>10시간 전</div>
                          <div className='feeds__detailbox__top__center__box__replwrap__box__bottom--answer'>답글 쓰기</div>
                        </div>
                      </div>
                    </div>

                    <div className='feeds__detailbox__center__rightbox__replwrap'>
                      <img className='feeds__detailbox__center__rightbox__replwrap--profile' src={profile3} />
                      <div className='feeds__detailbox__center__rightbox__replwrap__box'>
                        <div className='feeds__detailbox__center__rightbox__replwrap__box--username'>권민우</div>
                        <div className='feeds__detailbox__center__rightbox__replwrap__box--content'>우 변호사, 고래 얘기 말고 다른 얘기도 할 줄 알아요? 회사에서도 재밌는 얘기 좀 해줘요.</div>
                        <div className='feeds__detailbox__top__center__box__replwrap__box__bottom'>
                          <div className='feeds__detailbox__top__center__box__replwrap__box__bottom--record'>12시간 전</div>
                          <div className='feeds__detailbox__top__center__box__replwrap__box__bottom--answer'>답글 쓰기</div>
                        </div>
                      </div>
                    </div>

                    <div className='feeds__detailbox__center__rightbox__replwrap'>
                      <img className='feeds__detailbox__center__rightbox__replwrap--profile' src={profile4} />
                      <div className='feeds__detailbox__center__rightbox__replwrap__box'>
                        <div className='feeds__detailbox__center__rightbox__replwrap__box--username'>Alicia</div>
                        <div className='feeds__detailbox__center__rightbox__replwrap__box--content'>고래 사진이 넘 예뻐요!</div>
                        <div className='feeds__detailbox__top__center__box__replwrap__box__bottom'>
                          <div className='feeds__detailbox__top__center__box__replwrap__box__bottom--record'>12시간 전</div>
                          <div className='feeds__detailbox__top__center__box__replwrap__box__bottom--answer'>답글 쓰기</div>
                        </div>
                      </div>
                    </div>
                  </div>
                <textarea className='feeds__detailbox__center__rightbox--replinput' placeholder='댓글을 입력해 주세요!' minLength='1' maxLength="100"/>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default UserFeedDetailSample
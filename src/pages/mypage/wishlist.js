import React from 'react'
import '../../styles/section.css'
import '../../styles/wishlist.css'
import itemsample from '../../images/mypage/itemsample.png'
import likebtn from '../../images/mypage/likebtn.png'

const Wishlist = () => {
  return (
    <div>
        <section>
          <div className="section__main">
            <div className="section__mypage__wishlist--title">WISHLIST</div>
            <div className='section__mypage__wishlist--contents'>
              <img className='section__mypage__wishlist--contents--like' src={likebtn}/>
              <div className='section__mypage__wishlist--contents--text'>찜한 상품 1개</div>
              <img className='section__mypage__wishlist--contents--sample' src={itemsample}/>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Wishlist
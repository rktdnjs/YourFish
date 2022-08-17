import React from 'react'

const UserFeedDetail = ({thumbnail, title, content, userprofile ,username, replcount}) => {
  return (
    <div>
        <div className='feeds__detailbox'>
            <div className='feeds__detailbox__leftside'>
                <img className='feeds__detailbox--thumbnail' src={thumbnail}/>
            </div>
            <div className='feeds__detailbox__rightside'>
                <div className='feeds__detailbox--title'>{title}</div>
                <div className='feeds__detailbox--content'>{content}</div>
                <img className='feeds__detailbox--profile' src={userprofile}/>
                <div className='feeds__detailbox--username'>{username} <br/> 12시간 전 조회수 1234</div>
                <div className='feeds__detailbox--icons'>
                    <div className='feeds__box__bottom--repls'>
                        <img className='feeds__box__bottom--repl' src={repl}/>
                        <div className='feeds__box__bottom--replcount'>{replcount}</div>
                    </div>
                    <img className='feeds__box__bottom--bookmark' src={bookmark}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserFeedDetail
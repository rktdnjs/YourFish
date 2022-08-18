import React from 'react'

const UserFeedDetail = ({thumbnail, title, content, userprofile ,username, replcount, repls}) => {
  return (
    <div>
        <div className='feeds__detailbox'>

            <div className='feeds__detailbox__leftside'>
                <img className='feeds__detailbox__leftside--thumbnail' src={thumbnail}/>
            </div>

            <div className='feeds__detailbox__middle'>
                <div className='feeds__detailbox__middle__top'>
                    <img className='feeds__detailbox__middle__top--profile' src={userprofile}/>
                    <div className='feeds__detailbox__middle__top--username'>{username} <br/> 12시간 전 조회수 1234</div>
                </div>
                <div className='feeds__detailbox__middle--title'>{title}</div>
                <div className='feeds__detailbox__middle--content'>{content}</div>
            </div>

            <div className='feeds__detailbox__rightside'>
                <div className='feeds__detailbox__rightside__top'>
                    <img className='feeds__detailbox__rightside__top__repls--repl' src={repl}/>
                    <div className='feeds__detailbox__rightside__top__repls--replcount'>{replcount}</div>
                    <img className='feeds__box__bottom--bookmark' src={bookmark}/>
                </div>
                <div className='feeds__detailbox__rightside__replbox'>
                    <div className='feeds__detailbox__rightside__replbox--repls'>
                        <li>
                            {
                                repls ? repls.map((repl) =>(<div key={repl}>{repl}</div>)) : '등록된 댓글이 없습니다!'
                            }
                        </li>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserFeedDetail
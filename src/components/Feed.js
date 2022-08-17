import React from 'react'
import { useNavigate } from 'react-router-dom';
import profile from '../images/userfeed/profile1.png'
import bookmark from '../images/userfeed/bookmark.png'
import repl from '../images/userfeed/repl.png'

const Feed = ({id, thumbnail, title, content, userprofile ,username, replcount}) => {
    const navigate = useNavigate();

    // 해당하는 게시글의 id를 URL로 포함한 주소로 이동
    const goFeedDetail = () => {
        navigate(`/UserFeed/Detail/${id}`);
    }

    return (
    <div>
        <div onClick={goFeedDetail} className='feeds__box'>
            <img className='feeds__thumbnail' src={thumbnail}/>
            <div className='feeds__box__mid'>
                <div className='feeds__box__in--title'>{title}</div>
                <div className='feeds__box__in--content'>{content}</div>
            </div>
            <div className='feeds__box__bottom'>
                <img className='feeds__box__bottom--profile' src={userprofile}/>
                <div className='feeds__box__bottom--username'>{username} <br/> 12시간 전 조회수 1234</div>
                <div className='feeds__box__bottom--icons'>
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

export default Feed

// 여기에 이제 스타일 입힌게 유저피드 메인화면에서 보이는 하나하나의 게시물 
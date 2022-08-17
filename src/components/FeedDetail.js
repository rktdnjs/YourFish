import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import UserFeedDetail from '../pages/UserFeedDetail'

// 게시글 id대한 URL로 요청을 보내 받은 데이터가 있다고 가정
// UserFeedDetail로 데이터를 접근해서 그냥 바로 보내줌
const FeedDetail = () => {
    const {id} = useParams();

    // 아래는 게시글에 대한 정보가 존재하는 URL로 axios.get을 보내 데이터를 받아서 feedDetail에 저장하는 코드
    // const [feedDetail, setFeedDetail] = useState([]);
    // const getFeedDetail = () => {
    //     axios.get(`URL주소/userfeed_details?feed_id=${id}(대략 이런 느낌의 URL, 예시입니다)`)
    //     .then((response) => {
    //         setFeedDetail(response.data);
    //     })
    // }

    // 받아온 feedDetail은 이런 내용일 것! 이를 이제 UserFeedDetail페이지로 보내서 렌더링
    const feedDetail = () => [
        {
            id:1,
            img : thumbnail,
            title : '제목',
            content : '본문',
            userprofile : profile,
            username : '카리나',
            replcount : '31'
        }
    ]

    return (
        <div>
            <UserFeedDetail
            thumbnail={feedDetail.thumbnail}
            title={feedDetail.title}
            content={feedDetail.content}
            userprofile={feedDetail.userprofile}
            username={feedDetail.username}
            replcount={feedDetail.replcount}
            />
        </div>
  )
}

export default FeedDetail
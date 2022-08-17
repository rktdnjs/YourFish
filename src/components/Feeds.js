import React from 'react'
import thumbnail from '../images/userfeed/thumbnail.jpg'
import profile from '../images/userfeed/user.png'
import Feed from './Feed'

// 피드 하나하나가 모여 유저피드 메인글들이 된다.
// 이 친구는 이제 UserFeed 페이지에서 사용함(예시글들을 대체)

const Feeds = () => {
  // DB로부터 데이터 fetch를 해서 얻은 데이터(게시물 목록)를 feedDate라고 가정
  const feedData = [
    {
      id:1,
      img : thumbnail,
      title : '제목',
      content : '본문',
      userprofile : profile,
      username : '카리나',
      replcount : '31'
    },
    {
      id:2,
      img : thumbnail,
      title : '제목',
      content : '본문',
      userprofile : profile,
      username : '카리나',
      replcount : '31'
    },
    {
      id:3,
      img : thumbnail,
      title : '제목',
      content : '본문',
      userprofile : profile,
      username : '카리나',
      replcount : '31'
    }
  ]

  // 받아온 데이터를 map함수로 정리하여 Feeds 컴포넌트에 props로 넘김 
  // props를 넘긴 Feeds에서 이들을 다시 한번 정리할 예정
  return (
    <div>
      <div className='userfeed'>
        {
          feedData.map((feed) => 
          (
            <Feed
            key={feed.id}
            id={feed.id}
            thumbnail={feed.thumbnail}
            title={feed.title}
            content={feed.content}
            userprofile={feed.userprofile}
            username={feed.username}
            replcount={feed.replcount}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Feeds
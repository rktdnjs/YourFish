import React from 'react';
import thumbnail from '../images/userfeed/thumbnail.jpg';
import profile from '../images/userfeed/user.png';
import Feed from './Feed';
import '../styles/userfeed.css';
import { useEffect } from 'react';
import { useState } from 'react';

// 피드 하나하나가 모여 유저피드 메인글들이 된다.
// 이 친구는 이제 UserFeed 페이지에서 사용함(예시글들을 대체)

const Feeds = () => {

  const feedData = [ 
    {
      id:1,
      img : thumbnail,
      title : '제목1',
      content : '본문1',
      userprofile : profile,
      username : '카리나1',
      replcount : '3',
    },
    {
      id:2,
      img : thumbnail,
      title : '제목2',
      content : '본문2',
      userprofile : profile,
      username : '카리나2',
      replcount : '30',
    },
    {
      id:3,
      img : thumbnail,
      title : '제목3',
      content : '본문3',
      userprofile : profile,
      username : '카리나3',
      replcount : '31',
    },
  ];

  console.log(feedData);

  // 피드 데이터 DB로부터 요청을 보내 받아오는 코드
  // const [feedData, setFeedData] = useState([]);
  // const getFeedData = () => {
  //     axios.get(`URL주소/userfeed`}(대략 이런 느낌, 피드 전체 데이터에 대한 URL 예시))
  //     .then((response) => {
  //         setFeedData(response.data);
  //     })
  // }
  // 
  // useEffect(() => {
  //   getFeedData();
  // },[])

  // DB로부터 데이터 fetch를 해서 얻은 데이터(게시물 목록)를 feedDate라고 가정, 예시데이터

  // 받아온 데이터를 map함수로 정리하여 Feeds 컴포넌트에 props로 넘김 
  // props를 넘긴 Feeds에서 이들을 다시 한번 정리할 예정
  return (
    <>
      <section className="section">
        <div className='section__userfeed__main'>
        <div className="section__userfeed__main--head">최신 게시글</div>
          {feedData.map((feed) => (
              <Feed 
                key={feed.id}
                id={feed.id}
                thumbnail={feed.img}
                title={feed.title}
                content={feed.content}
                userprofile={feed.userprofile}
                username={feed.username}
                replcount={feed.replcount}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Feeds
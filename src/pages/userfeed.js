import React from "react";
import write from '../images/userfeed/pen.png'
import arrow from '../images/userfeed/top.png'
import feed1 from '../images/userfeed/feed1.png'
import feed2 from '../images/userfeed/feed2.png'
import feed3 from '../images/userfeed/feed3.png'
import feed4 from '../images/userfeed/feed4.png'
import feed5 from '../images/userfeed/feed5.png'
import feed6 from '../images/userfeed/feed6.png'
import feed7 from '../images/userfeed/feed7.png'
import feed8 from '../images/userfeed/feed8.png'
import feed9 from '../images/userfeed/feed9.png'
import gradient from '../images/userfeed/gradient-left.png'
import background from '../images/userfeed/back-image.png'
import '../styles/userfeed.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import thumbnail from '../images/userfeed/thumbnail.jpg'
import profile from '../images/userfeed/user.png'

const UserFeed = () => {
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

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/Login');
    };
    const goToWriteUserFeed = () => {
        navigate('/WriteUserFeed')
    }
    const goToUserFeedDetailSample = () => {
        navigate('/UserFeed/Detail/9')
    }

    const writeUserFeed = () => {
        (localStorage.getItem("회원토큰") == "회원토큰" ? goToWriteUserFeed() : 
        Swal.fire({
            icon:'info',
            text:'로그인 먼저 해주세요 ><',
            confirmButtonText:'확인',
            confirmButtonColor:'#3085d6'
          }, goToLogin()))
    }
    const moveToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <>
            <section className="section">
            <div className="section__userfeed__nav1">
                <input className="section__userfeed__nav1--write" src={write} onClick={writeUserFeed} type="image"/>
                <input className="section__userfeed__nav1--top" src={arrow} onClick={moveToTop} type="image"/>
            </div>
            <div className="section__userfeed__background">
                <div className="section__userfeed__backgroundtext">
                    <div className="section__userfeed__backgroundtext1">반려어 키우다 궁금할 때?</div>
                    <div className="section__userfeed__backgroundtext2">너의 반려어는 이용하자!</div>
                </div>
                <img className="section__userfeed__backgroundimage1" src={gradient}/>
                <img className="section__userfeed__backgroundimage2" src={background}/>
            </div>

            <div className="section__userfeed__main">
                <div className="section__userfeed__main--head">최신 게시글</div>
                <div className="section__userfeed__main__article">
                    <img className="section__userfeed__main__article--feed" src={feed1}/>
                    <img className="section__userfeed__main__article--feed" src={feed2}/>
                    <img className="section__userfeed__main__article--feed" src={feed3}/>
                    <img className="section__userfeed__main__article--feed" src={feed4}/>
                    <img className="section__userfeed__main__article--feed" src={feed5}/>
                    <img className="section__userfeed__main__article--feed" src={feed6}/>
                    <img className="section__userfeed__main__article--feed" src={feed7}/>
                    <img className="section__userfeed__main__article--feed" src={feed8}/>
                    <img onClick={goToUserFeedDetailSample} className="section__userfeed__main__article--feed" src={feed9}/>
                </div>
            </div>
            </section>
        </>
    )
}

export default UserFeed;

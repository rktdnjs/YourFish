import React from "react";
import write from '../images/userfeed/write.png'
import arrow from '../images/userfeed/arrow.png'
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
import '../components/TopScroll'
import '../styles/userfeed.css'

const UserFeed = () => {
    function clickme() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            <section class="section">
            <div class="section__userfeed__nav1">
                <input class="section__userfeed__nav1--write" src={write} type="image"/>
                <input class="section__userfeed__nav1--top" src={arrow} onClick={clickme()} type="image"/>
            </div>
            <div class="section__userfeed__background">
                <div class="section__userfeed__backgroundtext">
                    <div class="section__userfeed__backgroundtext1">반려어 키우다 궁금할 때?</div>
                    <div class="section__userfeed__backgroundtext2">너의 반려어는 이용하자!</div>
                </div>
                <img class="section__userfeed__backgroundimage1" src={gradient}/>
                <img class="section__userfeed__backgroundimage2" src={background}/>
            </div>

            <div class="section__userfeed__main">
                <div class="section__userfeed__main--head">
                    최신 게시글
                </div>
                <div class="section__userfeed__main__article">
                    <img class="section__userfeed__main__article--feed" src={feed1}/>
                    <img class="section__userfeed__main__article--feed" src={feed2}/>
                    <img class="section__userfeed__main__article--feed" src={feed3}/>
                    <img class="section__userfeed__main__article--feed" src={feed4}/>
                    <img class="section__userfeed__main__article--feed" src={feed5}/>
                    <img class="section__userfeed__main__article--feed" src={feed6}/>
                    <img class="section__userfeed__main__article--feed" src={feed7}/>
                    <img class="section__userfeed__main__article--feed" src={feed8}/>
                    <img class="section__userfeed__main__article--feed" src={feed9}/>
                </div>
            </div>
            </section>
        </>
    )
}

export default UserFeed;
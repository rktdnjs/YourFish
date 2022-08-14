import React from 'react'
import '../styles/writeuserfeed.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'

const WriteUserFeed = () => {
  const navigate = useNavigate();
  const WriteSuccess = () => {
    if(title.length >= 1 && content.length >= 1){
      {
        axios.post("http://localhost:4000/posts" , {
          title : title,
          content : content
        })
        .then((response) => {
          console.log(response);
        })
        // 오류시 실행
        .catch((error) => console.log(error.response))
        // 무조건 실행
        .then((response) => {
          Swal.fire({
            icon:'success',
            text:'게시물 작성 완료!!',
            confirmButtonText:'확인',
            confirmButtonColor:'#3085d6'
          })
          navigate('/');
        })
      }
    }
    else {
      Swal.fire({
        icon:'error',
        text:'제목과 본문은 최소 1글자 이상이어야 합니다.',
        confirmButtonText:'확인',
        confirmButtonColor:'#3085d6'
      })
    }
  };
  const WriteCancel = () => {
    navigate('/');
  };

  let [title, setTitle] = useState('');
  let [content, setContent] = useState('');
  // 둘다 string값으로 반환
  const titleInput = (e) => {
    setTitle(e.target.value)
  }
  const contentInput = (e) => {
    setContent(e.target.value)
  }
  // console.log(title, content)
  // console.log((title).length)
  // console.log((content).length)
  return (
    <div>
      <section className='section__main'>
        <div className='section__write__box'>
          <div className='section__write__head'>새 게시물 쓰기</div>
          <input onKeyUp={titleInput} className='section__write__title' minLength='1' maxLength="50" placeholder='제목을 입력하세요.(50자 이내)'></input>
          <textarea onKeyUp={contentInput} className='section__write__content' minLength='1' maxLength="1500" placeholder='내용을 입력하세요'></textarea>
          <div className='section__write__bottom'>
            <div onClick={WriteSuccess} className='section__write__bottom--confirm section__write__bottom--detail'>게시</div>
            <div onClick={WriteCancel} className='section__write__bottom--cancel section__write__bottom--detail'>취소</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WriteUserFeed
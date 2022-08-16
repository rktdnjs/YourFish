import React, { useRef } from 'react'
import '../styles/writeuserfeed.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'
import basic from '../images/writepage/image.png'

const WriteUserFeed = () => {
  const navigate = useNavigate();
  //글쓰기 취소 시 홈 화면으로 이동
  const WriteCancel = () => {
    navigate('/');
  };

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const imgRef = useRef();

  // 둘다 string값으로 반환됨, 제목과 본문에 대한 내용을 받아와서 state설정
  const titleInput = (e) => {
    setTitle(e.target.value)
  }
  const contentInput = (e) => {
    setContent(e.target.value)
  }
  
  // 이미지와 같은 파일을 서버에 업로드 할 때는 FormData 객체를 사용해야한다.
  // formData 객체는 key, value 형식으로 되어 있는 객체이다.
  // append메소드를 이용해서 키 밸류 를 보낼 수 있는데 key에는 file을, value에는
  // 실제 이미지 파일을 넣고 axios를 이용해서 api 호출을 한다.
  // e.target.files.length : 올린 파일들의 개수
  const inputImage = (e) => {
    console.log(e);
    console.log(e.target.files[0].name);
    // console.log(e.target.files.length);
    const reader = new FileReader();
    const file = imgRef.current.files[0];

    // 업로드한 이미지 파일을 읽어와서 보여줌
    // 이미지 state를 읽어온 결과값으로 대체함, 해당 이미지로 변경
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    }
  }

  const onClickFileBtn = () => {
    imgRef.current.click();
  };

  const handleClick = (event) => {
    event.target.value = null;
  };

  console.log(title, content);

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

  return (
    <div>
      <section className='section__main'>
        <div className='section__write__box'>
          <div className='section__write__head'>
            <div className='section__wrtie__head--title'>피드 새 게시물 쓰기</div>
            <div className='section__write__img__uploader'>
              <img className='section__write__img' src={image ? image : basic} onClick={onClickFileBtn} style={{cursor:'pointer'}}/>
              <input type="file" accept='image/*' multiple={false} ref={imgRef} onChange={inputImage} onClick={handleClick} src={image} style={{display:'none'}}/>
            </div>
          </div>
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
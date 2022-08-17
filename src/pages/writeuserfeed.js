import '../styles/writeuserfeed.css'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
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
  const formData = new FormData();

  const titleInput = useRef();
  const contentInput = useRef();

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      contentInput.current.focus();
    }
  };

  useEffect(() => {
    titleInput.current.focus();
  }, []);

  // 둘다 string값으로 반환됨, 제목과 본문에 대한 내용을 받아와서 state설정
  const titleInputs = (e) => {
    setTitle(e.target.value)
  }
  const contentInputs = (e) => {
    setContent(e.target.value)
  }
  // 이미지와 같은 파일을 서버에 업로드 할 때는 FormData 객체를 사용해야한다.
  // formData 객체는 key, value 형식으로 되어 있는 객체이다.
  // append메소드를 이용해서 키 밸류 를 보낼 수 있는데 key에는 file을, value에는
  // 실제 이미지 파일을 넣고 axios를 이용해서 api 호출을 한다.
  // e.target.files.length : 올린 파일들의 개수
  const inputImage = (e) => {
    // console.log(e.target.files);
    // console.log(e.target.files[0]);
    
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    // 업로드한 이미지 파일을 읽어와서 보여줌
    // 이미지 state를 읽어온 결과값으로 대체함, 해당 이미지로 변경
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    }
  }

  // 동일 파일 업로드시 버그 생기는거 방지(이벤트 핸들러 작동x)
  const handleClick = (event) => {
    event.target.value = null;
  };

  const onClickFileBtn = () => {
    imgRef.current.click();
  };

  console.log(title, content);

  //글쓰기 - 게시 클릭 시 사용되는 함수
  const WriteSuccess = () => {
    if(title.length >= 1 && content.length >= 1){
      formData.append('title', title);
      formData.append('content', content);
      formData.append('image', image);

      // for(var key of formData.keys()) {
      //   console.log(key);
      // }
      // for(var value of formData.values()) {
      //   console.log(value);
      // }
      for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
      }

      {
        axios.post("http://localhost:4000/users" , formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
        })
        // 오류시 실행
        .catch((error) => console.log(error.response))
        // 무조건 실행
        .then(() => {
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
          <input onChange={titleInputs} onKeyUp={onKeyUp} ref={titleInput} className='section__write__title' minLength='1' maxLength="50" placeholder='제목을 입력하세요.(50자 이내)'></input>
          <textarea onChange={contentInputs} ref={contentInput} className='section__write__content' minLength='1' maxLength="1500" placeholder='내용을 입력하세요'></textarea>
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
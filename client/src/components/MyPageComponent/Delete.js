import axios from 'axios';
import React from 'react';
import './ItemMypage.css'
import { useNavigate } from "react-router-dom";

function Delete({accessToken, comments, userinfo, setIsLogin}) {
  const navigate = useNavigate()
  function signOut() {
    axios.delete('https://localhost:8443/auth/signout', {
      headers: {
        accept: 'application/json',
        Authorization: accessToken
      }
    })
    .then((res) => {
      setIsLogin(false)
      navigate('/')
      window.alert('다음에 또 오세요!!')
    }) 
    // isLogin을 flase로 만든다음 메인페이지로 리다이렉트
  }
  return (
    <div id='item-mypage-body'>
        <section id="mypage-Container"> 
          <article className="profile"> 
            <div className="profile-Img">
              <img src="images/blueCat.png" alt="" />
            </div> 
              {
                userinfo ? <div className='welcome'>{`${userinfo.nickname}님 반갑습니다.`}</div>
                : ''
              }
          </article>
        </section>
        <div>

        <div id='deleteContainer'>
            <h2>탈퇴하실껀가요? 😭</h2>
            <div id='deleteButton' onClick={signOut}>탈퇴하기</div>
        </div>
      </div>
    </div>
  );
}

export default Delete;
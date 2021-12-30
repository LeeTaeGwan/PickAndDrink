import React from 'react';
import './ItemMypage.css'

function Comment({accessToken, comments, userinfo}) {

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
          <div id='commentContainer'>
          {
            // comments.map((comment) => {
            //   return(
            //     <div>{comment.comment}</div>
            //   )
            // })
            '시간부족으로 구현을 하지 못했어요 😭💦'
          }
          </div>
        </section>
      </div>
  );
}

export default Comment;
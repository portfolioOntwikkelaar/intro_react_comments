import React from 'react'
// import profile4 from './image/nav.jpeg'
// import profile1 from './image/eva.jpeg'
// import profile2 from './image/john.jpeg'
// import profile3 from './image/mike.jpeg'

function SingleComment(props) {
  return (
    
    
    <div className='comment'>
        <a href="/" className='avatar'>
          <img src={props.picture} alt="profile picture" />

        </a>
        <div className='content'>
          <a href="/" className='author'>
            {props.name}
          </a>
          <div className='metadata'>
            <span className='date'>
              {props.date}
            </span>
          </div>
          <div className='text'>
            {props.text}
          </div>
        </div>
      </div>



  )
}

export default SingleComment

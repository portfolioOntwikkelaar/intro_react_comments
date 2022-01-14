import React from 'react'
import profile4 from './image/nav.jpeg'
import profile1 from './image/eva.jpeg'
import profile2 from './image/john.jpeg'
import profile3 from './image/mike.jpeg'

function SingleComment() {
  return (
    <>
    <div className='comment'>
        <a href="/" className='avatar'>
          <img src={profile4} alt="profile picture" />

        </a>
        <div className='content'>
          <a href="/" className='author'>
            Femke
          </a>
          <div className='metadata'>
            <span className='date'>
              Vandag om 15:00PM
            </span>
          </div>
          <div className='text'>
            Doe het in React!
          </div>
        </div>
      </div>

<div className='comment'>
<a href="/" className='avatar'>
  <img src={profile1} alt="profile picture" />

</a>
<div className='content'>
  <a href="/" className='author'>
    Femke
  </a>
  <div className='metadata'>
    <span className='date'>
      Vandag om 5:00PM
    </span>
  </div>
  <div className='text'>
    Wonderbaarlijk
  </div>
</div>
</div>
<div className='comment'>
<a href="/" className='avatar'>
  <img src={profile2} alt="profile picture" />

</a>
<div className='content'>
  <a href="/" className='author'>
    Femke
  </a>
  <div className='metadata'>
    <span className='date'>
      Vandag om 5:00PM
    </span>
  </div>
  <div className='text'>
    Wonderbaarlijk
  </div>
</div>
</div>
<div className='comment'>
<a href="/" className='avatar'>
  <img src={profile3} alt="profile picture" />

</a>
<div className='content'>
  <a href="/" className='author'>
    Femke
  </a>
  <div className='metadata'>
    <span className='date'>
      Vandag om 5:00PM
    </span>
  </div>
  <div className='text'>
    Ik werk als ui/ux designer 
  </div>
</div>
</div>
</>  )
}

export default SingleComment

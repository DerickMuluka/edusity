import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const slideForward = ()=>{
        if (tx > -50){
        tx -= 25;
      }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = ()=>{
        if (tx < 0){
            tx += 25;
          }
            slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Edusity has provided me with an exceptional education and an amazing community of peers and mentors. The opportunities here are endless!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Deryk Cheed</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>The learning environment at Edusity is incredible. The professors are passionate and the resources available have greatly enhanced my learning experience.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Sophy Jabal</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Edusity has not only met but exceeded my expectations. The curriculum is challenging yet rewarding, and the support from faculty is outstanding.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Raun Ezra</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Being a part of Edusity has been a transformative experience. The campus culture is welcoming, and I've developed both academically and personally.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
import React from 'react';
import styles from 'swiper';
import iceCream from './img/slide_1.jpg'
import orange from './img/slide_2.jpg'
import strawberry from './img/slide_3.jpg'
import kiwi from './img/slide_4.jpg'


const Carousel = () => {
    return (
        
        <div className="swiper-container">
            {/* <!-- Additional required wrapper --> */}
            <div className="swiper-wrapper">
                {/* <!-- Slides --> */}
                <div className="swiper-slide"><img src={iceCream}/></div>
                <div className="swiper-slide"><img src={orange}/>2</div>
                <div className="swiper-slide"><img src={strawberry}/></div>
                <div className="swiper-slide"><img src={kiwi}/></div>
                ...
            </div>
            {/* <!-- If we need pagination --> */}
            <div className="swiper-pagination"></div>

            {/* <!-- If we need navigation buttons --> */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            {/* <!-- If we need scrollbar --> */}
            <div className="swiper-scrollbar"></div>
        </div>
    )
}

  
  export default Carousel;
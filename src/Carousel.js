import React from 'react';
import Swiper from 'swiper';
import iceCream from './img/slide_1.jpg'
import orange from './img/slide_2.jpg'
import strawberry from './img/slide_3.jpg'
import kiwi from './img/slide_4.jpg'

class Carousel extends React.Component {
    render() {
        const mySwiper = new Swiper('.swiper-container', { /* ... */ });
        return (
            <div>
                <p>swip</p>
                <div class="swiper-container">
                    {/* <!-- Additional required wrapper --> */}
                    <div class="swiper-wrapper">
                        {/* <!-- Slides --> */}
                        <div className="swiper-slide">Slide 1</div>
                        <div className="swiper-slide">Slide 2</div>
                        <div className="swiper-slide">Slide 3</div>
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
            </div>
        )
    }
}

export default Carousel;
import React, {Component} from 'react';
import CarouImg from './CarouImg'
import iceCream from './img/slide_1.jpg'
import orange from './img/slide_2.jpg'
import strawberry from './img/slide_3.jpg'
import kiwi from './img/slide_4.jpg'
import './Carousel.css'


class Carousel extends Component {
    state = {
        numberOfImages: 3,
        pictures: [
            iceCream,
            orange,
            strawberry,
            kiwi
        ]
    }

    // Click right arrow on carousel
    onForwardButtonClick = (event) => {
        event.preventDefault()
        const pictureClone = this.state.pictures
        const lastEl = pictureClone.pop()
        pictureClone.unshift(lastEl)
        this.setState({pictures: pictureClone})
    }

    // Click left arrow on carousel
    onBackButtonClick = (event) => {
        event.preventDefault()
        const pictureClone = this.state.pictures
        const firstEl = pictureClone.shift()
        pictureClone.push(firstEl)
        this.setState({pictures: pictureClone})
    }

    // Control number of images in carousel, dependent on screen size
    updateDimensions = () => {
        if (window.innerWidth > 700) {
            this.setState({numberOfImages: 3})
        }
        else if (window.innerWidth < 492) {
            this.setState({numberOfImages: 1})
        }
        else {
            this.setState({numberOfImages: 2})
        }
    }

    // Add event listener to screen size to edit number of images shown in carousel
    componentDidMount() {
        window.addEventListener('resize', () => this.updateDimensions());
        this.updateDimensions()
    }

    render() {
      return (
        <div>
            <div className='carouselRow'>   
                <div className='arrow-box box-left' onClick={this.onBackButtonClick}> 
                    <div className='left arrow' />
                </div>
                    {this.state.pictures.slice(0, this.state.numberOfImages).map(picture => {
                        return (
                            <div key={this.state.pictures.indexOf(picture)} className='carouselImage'>
                                <CarouImg picture={picture} /> 
                            </div>
                        )
                    })}
                <div className='arrow-box box-right' onClick={this.onForwardButtonClick}> 
                    <div className="arrow right" />
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Carousel;
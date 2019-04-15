import React from 'react';

let styles = {
    height: '180px'
}

const CarouImg = ({picture}) => {
    return (
        <div> 
            <img style={styles} src={picture} alt=''/>
        </div>
    )
}

export default CarouImg;
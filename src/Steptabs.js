import React from 'react';

const Steptabs = ({styles1, styles2}) => {
    return (
        <div className='steptabs'>
            <div style={styles1} className='steptab'> 
                Step 1
            </div>
            <div style={styles2} className='steptab'> 
                Step 2
            </div>
        </div>
    )
}

export default Steptabs;
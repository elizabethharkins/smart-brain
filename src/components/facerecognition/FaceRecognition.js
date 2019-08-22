import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {

    const listOfBoxes = box.map((face, index) => {
        return (
            <div key={index} 
                className='bounding-box' 
                style={{top: face[1].topRow, 
                        right: face[2].rightCol, 
                        bottom: face[3].bottomRow, 
                        left: face[0].leftCol
                    }}>
            </div>
        )
    }) 

    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' src={imageUrl} alt='' width='700px' />
                {listOfBoxes}
            </div>
        </div>
    );
};

export default FaceRecognition;
import PictureInfo from './aboutImageInfo.json';
import { useState, useEffect } from 'react';

const desktop = PictureInfo.data.map((image) => (
    <div key={image.id}>
        <img src={image.desktop} title={image.title} alt={image.title} className="imageStyle" />
    </div>
));

const mobile = PictureInfo.data.map((image) => (
    <div key={image.id}>
        <img src={image.mobile} title={image.title} alt={image.title} className="imageStyle" />
    </div>
));

const PictureGrid = () => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        window.addEventListener('resize', (event) => {
          setViewportWidth(event.target.innerWidth);
          
          return () => {
            window.removeEventListener('resize');
          };
    }, [window.innerWidth])});

    let view = "Images Failed...";

    if(viewportWidth > 500){
        view = desktop; 
    } else if(viewportWidth <= 500){
        view = mobile; 
    };

    return(
        <div className="pictureGridContainer">
            {view}
        </div>
    )
};

export default PictureGrid; 

import React from 'react';
import GalleryItem from './Gallery-item';
import NoImages from './NoImages';

function Gallery(props){
  let data = props.data;
  let images;
  if(data.length > 0){
    images = data.map(image => <GalleryItem farm={image.farm} serverId={image.server} id={image.id} secret={image.secret} key={image.id} />);
} else{
    images = <NoImages key={0}/>
}


  return(
    <div>
      <ul className="photo-container">
      {
        (props.loading)
        ? <p>Loading...</p>
        : images
      }
      </ul>
    </div>
  );
}

export default Gallery;

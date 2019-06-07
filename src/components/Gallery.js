import React from 'react';
import GalleryItem from './Gallery-item';
import NoImages from './NoImages';

//function that renders the gallery area where images are to be displayed
function Gallery(props){
  //storing the data from props into a variable named data
  let data = props.data;
  //declaring the variable "images"
  let images;
  //conditional statement to test if there is any data sent through props
  if(data.length > 0){
    //if there is data it is mapped into individual "GalleryItem" components with the needed props
    images = data.map(image => <GalleryItem farm={image.farm} serverId={image.server} id={image.id} secret={image.secret} key={image.id} />);
} else{
    //if there is no data the "NoImages" component is declared as the value of "images"
    images = <NoImages key={0}/>
}


  return(
    <div>
      <ul className="photo-container">
      {
        //if the value of the loading state is currently set to true then the <p> tags will displaying a loading message
        (props.loading)
        ? <p>Loading...</p>
        //otherwise the images variable is returned
        : images
      }
      </ul>
    </div>
  );
}

export default Gallery;

import React from 'react';


function GalleryItem(props){
  return(
    //assembles a url using the information passed as props from the "Gallery" components
  <img src={`https://farm${props.farm}.staticflickr.com/${props.serverId}/${props.id}_${props.secret}_m.jpg`} alt="" />
  );
}

export default GalleryItem;

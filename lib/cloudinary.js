import cloudinary from 'cloudinary-core';

const cloudinaryClient = new cloudinary.Cloudinary({cloud_name: 'dnamyvmsq'});

cloudinaryClient.secureURL = function(id, options){ 
  return this.url(id, {
    fetch_format: "auto",
    quality: "auto",
    width: "auto", 
    dpr: "auto",
    crop: "scale",
    secure:true,
    ...options
  })
} 

export default cloudinaryClient
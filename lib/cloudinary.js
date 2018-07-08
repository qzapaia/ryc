import cloudinary from 'cloudinary-core';

const cloudinaryClient = new cloudinary.Cloudinary({cloud_name: 'dnamyvmsq'});

cloudinaryClient.secureURL = function(id, options){ 
  return this.url(id, {...options, secure:true})
}

export default cloudinaryClient
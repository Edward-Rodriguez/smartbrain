import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div>
      <p>
        {'This Magic Brain will detect faces in your pictures, give it a try'}
      </p>
      <div>
        <input type='text' />
        <button>Detect</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;

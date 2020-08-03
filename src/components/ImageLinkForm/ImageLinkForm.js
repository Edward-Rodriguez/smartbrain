import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div>
      <p className='pa3'>
        {'This Magic Brain will detect faces in your pictures, give it a try'}
      </p>
      <div className='center'>
        <div className='form center br3 pa4 shadow-5'>
          <input className='br2 f4 pa3 w-70 center' type='tex' />
          <button className='br2 w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;

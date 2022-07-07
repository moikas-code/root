import React, {useEffect, useState} from 'react';
export default function Dragon() {
  return (
    <div className='h-100 w-100 d-flex flex-column justify-content-center align-items-center'>
      <h1>Tako Labs</h1>
      <h4>Welcome Home</h4>
      <hr />
      <p>
        Twitter:{' '}
        <a
          href='https://twitter.com/takolabsio'
          target={'_blank'}
          rel='noreferrer'>
          @takolabsio
        </a>
      </p>
    </div>
  );
}

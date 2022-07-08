import Button from '../common/button';
import H from './H';

export default function Card({...props}) {
  return (
    <>
      <style jsx>
        {`
          .card-w,
          .card {
            height:300px;
            max-width: 400px !important;
            width: 100%;
            font-size: 1.125rem;
          }
        `}
      </style>
      <div
        className={`card card-w d-flex flex-column justify-content-between border-dark w-100 m-3 p-1 ${
          typeof props.className !== 'undefined' ? props.className : ''
        }`}>
        <div className='d-flex flex-column'>
          <H
            headerSize={'4'}
            className='text-center border-bottom border-dark mb-3'>
            {props.title}
          </H>
          <span
            className={`${
              typeof props.bodyTextStyle !== 'undefined'
                ? props.bodyTextStyle
                : ''
            }`}>
            {props.body}
          </span>
        </div>
        <Button className='btn btn-dark' onClick={() => props.onClick()}>
          {props.buttonTitle}
        </Button>
      </div>
    </>
  );
}

import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {truncateAddress} from '../lib/moiWeb3';
import TakoLink from './TakoLink';
import WalletButton from './walletbutton';
import WalletButtonItem from './walletbuttonitem';
import Button from './common/button';
function Navbar() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [address, setAddress] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [err, setErr] = React.useState<any>('');

  return (
    <>
      <style jsx>{`
        .navbar {
          height: 5rem;
        }
        .nav-brand {
          vertical-align: middle;
        }
        .wallet-button-items {
          max-height: 18.75rem;
          width: 175px;
        }
      `}</style>
      <div className='position-relative bg-white z-3'>
        <div className='navbar d-flex flex-row justify-content-between align-items-center border border-dark'>
          <span onClick={() => setShow(false)}>
            <TakoLink href={'/'} as={'/'}>
              <a className='d-flex flex-column justify-content-center h-100 fnt-color-black text-decoration-none text-center nav-brand width-10rem'>
                <span className='text-uppercase'>Tako Labs</span>
              </a>
            </TakoLink>
          </span>

          <div className='h-100 d-flex flex-column justify-content-center'>
            <Button className={`btn`} onClick={() => setShow(!show)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                fill='currentColor'
                className='bi bi-justify'
                viewBox='0 0 16 16'>
                <path
                  fillRule='evenodd'
                  d='M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z'
                />
              </svg>
            </Button>
          </div>
        </div>
        {show && (
          <div
            className={`wallet-button-items d-flex flex-column bg-grey position-absolute end-0`}>
            <WalletButtonItem
              text={`Create Contract`}
              onPress={() => {
                router.push('https://deploy.takolabs.io');
                setShow(false);
              }}
            />
            <WalletButtonItem
              text={`Mint NFT`}
              onPress={() => {
                router.push('https://mint.takolabs.io');
                setShow(false);
              }}
            />
            {/* <WalletButtonItem
              text={`List NFT`}
              onPress={() => {
                router.push('https://list.takolabs.io');
                setShow(false);
              }}
            /> */}
          </div>
        )}
      </div>
    </>
  );
}
export default Navbar;

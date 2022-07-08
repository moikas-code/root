import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import Card from '../src/components/Tako_UI/Card';
import TakoLink from '../src/components/Tako_UI/TakoLink';
export default function Dragon() {
  const router = useRouter();
  return (
    <div className='d-flex flex-column justify-content-between'>
      <style>
        {`
      .s1{
        height: 600px;
      }     
      .s2{
        height: 400px;
      }
      .
      `}
      </style>

      <div className='h-100'>
        <div className='s1 p-5 w-100 d-flex flex-column justify-content-center align-items-center'>
          <h1>Experiment Decentralizing Your Data With Tako Labs</h1>
        </div>
        <div className='s2 p-5 w-100 d-flex flex-column justify-content-center align-items-center'>
          <h4 className='border-bottom border-dark mb-3'>The Ecosystem</h4>
          <div className='w-100 d-flex flex-row justify-content-around flex-wrap'>
            <Card
              title={'Create Your Portal'}
              body={
                'Deploy A Smart Contract to Permanently Store Your Data On the Blockchain.'
              }
              buttonTitle={'Deploy'}
              onClick={() => router.push('https://deploy.takolabs.io')}
            />
            <Card
              title={'Store Your Data'}
              body={
                'Upload your data to the Blockchain as an NFT. This will allow you to share your data with anyone.'
              }
              buttonTitle={'Mint'}
              onClick={() => router.push('https://mint.takolabs.io')}
            />
            <Card
              title={'Trade Your Data'}
              body={
                'If you are an Artist, Content Creator, or a Collector, you can trade your NFTS with others.'
              }
              buttonTitle={'Market'}
              link={() => router.push('https://market.takolabs.io')}
            />
          </div>
        </div>
        <div className='s2 p-5 w-100 d-flex flex-column justify-content-center align-items-center'></div>
      </div>
      <div className='footer px-3 py-1 d-flex flex-row border border-dark'>
        <span>
          Twitter:{' '}
          <TakoLink
            href='https://twitter.com/takolabsio'
            target={'_blank'}
            rel='noreferrer'
            as={'https://twitter.com/takolabsio'}>
            @takolabsio
          </TakoLink>
        </span>
      </div>
    </div>
  );
}

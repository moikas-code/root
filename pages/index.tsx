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
        min-height: 600px;
      }     
      .s2{
        min-height: 400px;
      }
      .s2-lg{
        max-width: 1200px;
        min-height: 400px;
      }
      .footer a,
      .footer a:visited{
        color: #000;
      }
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
              title={'Deploy A NFT Smart Contract'}
              body={
                'Deploy A Smart Contract to Permanently Store Your Data On the Blockchain.'
              }
              buttonTitle={'Deploy'}
              onClick={() => router.push('https://deploy.takolabs.io')}
            />
            <Card
              title={'Create A NFT'}
              body={
                'Upload your data to the Blockchain as an NFT. This will allow you to share your data with anyone.'
              }
              buttonTitle={'Mint'}
              onClick={() => router.push('https://mint.takolabs.io')}
            />
            <Card
              title={'Trade Your NFT'}
              body={
                'If you are an Artist, Content Creator, or a Collector, you can trade your NFTS with others.'
              }
              buttonTitle={'Market'}
              link={() => router.push('https://market.takolabs.io')}
            />
          </div>
        </div>
        <div className='s2-lg mx-auto p-5 d-flex flex-column justify-content-center align-items-center'>
          <span>
            Tako Labs is a community working on an Open Source project. Our goal
            is to create tools to help introduce new users to the blockchain
            while improving the user experience and introducing our own layer of
            fun. You can contribute to the project to help us improve the
            ecosystem, or join the community to play some games. We are always
            open to new ideas and feedback.
          </span>
        </div>
      </div>
      <div className='footer px-3 py-1 d-flex flex-row justify-content-center border border-dark'>
        <span className='mx-2'>
          <TakoLink
            href='https://twitter.com/takolabsio'
            target={'_blank'}
            rel='noreferrer'
            as={'https://twitter.com/takolabsio'}
            className={''}>
            Twitter
          </TakoLink>
        </span>
        <span className='mx-2'>
          {' '}
          <TakoLink
            href='https://discord.gg/8R6ZMww3KJ'
            target={'_blank'}
            rel='noreferrer'
            className={''}
            as={'https://discord.gg/8R6ZMww3KJ'}>
            Discord
          </TakoLink>
        </span>
        <span className='mx-2'>
          {' '}
          <TakoLink
            href='https://github.com/tako-labs'
            target={'_blank'}
            rel='noreferrer'
            className={''}
            as={'https://github.com/tako-labs'}>
            Github
          </TakoLink>
        </span>
      </div>
    </div>
  );
}

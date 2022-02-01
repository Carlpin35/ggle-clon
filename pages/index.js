import React, { useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';
import {  MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import AppsIcon from '@material-ui/icons/Apps';
import { IconButton } from '@material-ui/core';



export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

const search = (e) => {
  e.preventDefault();
  const term = searchInputRef.current.value;

  if (!term) return;
router.push(`/search?term=${term}`)

}

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://cdn.iconscout.com/icon/free/png-256/google-152-189813.png" />
      </Head>
   

     <header className="flex w-full p-4 justify-between text-sm text-gray-700">
   {/*left*/}
       <div className="flex space-x-4 items-center">
         <p className="link">About</p>
         <p className="link">Store</p>
       </div>
     {/*right*/}
       <div className="flex space-x-4 items-center">
         <p className="link">Gmail</p>
         <p className="link">Images</p>

          {/*icon*/}
          <IconButton>
          <AppsIcon />
          </IconButton>
          <Avatar url="https://www.thesouthernreporter.co.uk/webimg/b25lY21zOjFkMGViNDJkLWE0NmUtNDVkOC05ODdmLWJlMmY2Y2I4ZGYxNzowMmQ2N2RkMi1iYWVhLTQ0MzItYWNhMy0yN2Y5MzBjMjg0OWI=.jpg?width=2048&enable=upscale" />
       </div>
     </header>

     {/*<Body */}
      <form className="flex flex-col items-center mt-24 flex-grow  w-4/5">
        <Image src="http://1000marcas.net/wp-content/uploads/2020/02/Google-logo.jpg"
          height={150}
          width={330}
         />

         <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-2 items-center sm:max-w-xl xl:max-w-2xl">
           <SearchIcon className="h-5 text-gray-500 mr-3" />
           <input ref={searchInputRef} type="text" className="focus:outline-none flex-grow" />
           <MicrophoneIcon className="h-5 text-blue-500 " />
         </div>

         <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 mb-2 sm:space-y-0 sm:flex-row sm:space-x-4">
           <button onClick={search} className="btn">Google search</button>

           <button onClick={search} className="btn">I&apos;m feeling Lucky</button>
         </div>
      </form>

      <Footer /> 
    </div>
  )
}

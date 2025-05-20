import React from 'react'
import { LuGithub } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { GoMail } from "react-icons/go";

function Footer() {
  return (
     <div className='bg-gray-50 dark:bg-gray-800'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr] gap-14 my-10 pt-20 text-sm px-20'>
          {/* 1st part */}
          <div className='flex flex-col gap-8'>
            <div className='flex gap-4 text-xl'>
              <a href='#home'>
              <p>{`<>`}</p>
              </a>
              <p className='font-semibold'>Portfolio</p>
            </div>

            <div className='flex items-center gap-4 text-xl '>
              <LuGithub />
              <SlSocialLinkedin/>
              <GoMail className='mt-1' />

            </div>

          </div>

          {/* 2nd part */}

          <div className='flex items-center flex-col gap-3'>
            <h1 className='text-xl font-semibold'>Quick Links</h1>
            <a href='#home'><p>Home</p></a>
            <a href='#about'><p>About</p></a>
            <a href='#skills'><p>Skills</p></a>
            <a href='#projects'><p>Projects</p></a>
            <a href='#experience'><p>Experience</p></a>

          </div>
        </div>

        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2025@ Portfolio - All Right Reserved.</p>
        </div>
      </div>
  )
}

export default Footer
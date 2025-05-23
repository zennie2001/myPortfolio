
import { motion } from 'framer-motion';

function About() {

  const handleOpenPDF = () =>{
    window.open('/Jenny.pdf', "_blank")
  }



  return (
   <div id="about" className=' w-full h-[100vh] md:h-[110vh] pt-20 px-2 sm:px-16 md:px-14 lg:px-14'>
    <div className='flex justify-center pb-16'>
      <h1 className='text-center text-2xl font-bold border-b-4 border-blue-400 border-spacing-2'>About Me</h1>

    </div>
        <div className='flex items-center justify-center md:flex-row lg:flex-row sm:flex-col gap-10 '>

          {/* picture
          <div className=' md:w-[50%] lg:w-[50%] md:pl-32'>
            <img src={profile}
            className="w-[500px] h-[500px] rounded-3xl shadow-2xl shadow-blue-200   "
            />
          </div> */}

          <div className='md:w-[50%] lg:w-[50%] flex  flex-col gap-6'>
            <motion.h2 className='text-2xl font-semibold '
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}>
              I'm a <span className='text-blue-500'>MERN Stack Developer</span> with a passion for building digital experiences...
              </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "anticipate", delay: 0.3 }}>
              I’m a passionate MERN Stack Developer with 1.5+ years of hands-on experience in building modern, responsive, and scalable web applications. I specialize in creating seamless user experiences on the front end while engineering robust and efficient solutions on the back end — delivering full-stack applications that are both user-centric and performance-driven.
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "anticipate", delay: 0.5 }}>
            Proficient in modern JavaScript,Typescript, RESTful APIs, database modeling, and UI/UX design. Strong problem-solving skills and a passion for delivering optimized, real-world solutions across the full development lifecycle.
            </motion.p>
            
            <motion.div className='shadow-lg p-2 mt-6 bg-gray-100 rounded-xl dark:bg-gray-700'
              initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "anticipate", delay: 0.9 }}>
              <p className='text-lg font-semibold'>Personal Information:</p>
              <div className='flex flex-row justify-between gap-2 pt-2 pb-6'>
                <div className='flex flex-col gap-2'>
              <p><span className='font-semibold'>Name:</span> Jenny Dev</p>
              <p><span className='font-semibold'>Email:</span> jennydev2001@gmail.com</p>
              </div>
              <div className='flex flex-col gap-2'>
              <p><span className='font-semibold'>Location:</span> Kathmandu, Nepal</p>
              <p><span className='font-semibold'>Phone:</span> +977-9844888976</p>
              </div>
              </div>

              {/* resume */}
              {/* <button onClick={handleOpenPDF} className='px-4 py-2 bg-blue-500 text-white rounded-md'>My Resume</button> */}

            </motion.div>

          </div>




        </div>
    </div>
  )
}

export default About
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FaApple, FaGooglePlay, FaBluetooth } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { FaDownload } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import { MdMotionPhotosAuto } from "react-icons/md";
import { GoGoal } from "react-icons/go";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MedPop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div id="navigation">
        <div className='flex justify-between py-2 px-2 border-b-2 border-black'>
          {/* App Icon */}
          <p className='flex items-center justify-center text-xl'>MedPop&reg;</p>
          {/* Join now button */}
          <a className='bg-gray-200 border-2 border-black px-6 py-2 rounded-md hover:scale-[105%] transition-transform' href=''>Get It Now</a>
        </div>
      </div>

      <main className='py-5 px-10 border-2 border-red-500'>
        <section id="landing">
          <div className='flex items-center justify-center mt-16'>
            {/* Device and App Photo */}
            <div className='border-2 border-yellow-500 w-[25rem] h-[25rem] text-center items-center justify-center flex'>Device and Phone Photos</div>
            {/* Introduce */}
            <div className='ml-5'>
              <p className='text-xl font-bold'>MedPop&reg; | Your Adherence Companion </p>
              <br />
              <p className=''>Seamlessly Synced to Your Health Routine. <br />Connect effortlessly, set your schedule, and never miss a dose with <br /> personalized reminders, wherever you are.</p>
              <br />
              <div className='flex space-x-5'>
                <a className='bg-gray-200 border-2 border-black px-6 py-2 rounded-md hover:scale-[105%] transition-transform' href=''>Learn More</a>
                <a className='bg-gray-200 border-2 border-black px-6 py-2 rounded-md hover:scale-[105%] transition-transform' href=''>Get It Now</a>
              </div>
            </div>
          </div>
        </section>

        <section id='device'>
          <div className='flex items-center justify-center mt-[5rem]'>
            {/* App Photo */}
            <div>
              <div className='border-2 border-yellow-500 w-[25rem] h-[25rem] text-center items-center justify-center flex'>Phone Photo</div>
              <div className='text-center text-2xl mt-7 p-4 rounded-xl bg-gray-500'>The Application</div>
            </div>
            {/* Introduce */}
            <div className='ml-5 grid grid-cols-2 gap-3'>
              <div className='bg-gray-200 w-60 h-60 text-center rounded-xl flex flex-col items-center justify-center'>
                <IoIosNotifications className='text-5xl mb-2' />
                <p className='text-lg'>Notification / Reminder</p>
              </div>
              <div className='bg-gray-200 w-60 h-60 text-center rounded-xl flex flex-col justify-center items-center'>
                <AiOutlineStock className='text-5xl mb-2' />
                <p className='text-lg'>View Stock Quantity</p>
              </div>
              <div className='bg-gray-200 w-60 h-60 text-center rounded-xl flex flex-col justify-center items-center'>
                <IoDocumentText className='text-5xl mb-2' />
                <p className='text-lg'>View Adherence Report</p>
              </div>
              <div className='bg-gray-200 w-60 h-60 text-center rounded-xl flex flex-col justify-center items-center'>
                <SlCalender className='text-5xl mb-2' />
                <p className='text-lg'>View Calendar</p>
              </div>
            </div>
          </div>

        </section>

        <section id='phone'>
          <div className='flex items-center justify-center mt-[5rem]'>
            {/* Introduce */}
            <div className='grid grid-cols-2 gap-3'>
              <div className='px-2 bg-gray-200 w-60 h-60 text-center rounded-xl flex flex-col items-center justify-center'>
                <IoIosNotifications className='text-5xl mb-2' />
                <p className='text-lg'>Fit up to 6 various <br /> blister pack</p>
              </div>
              <div className='px-2 bg-gray-200 w-60 h-60 text-center rounded-xl flex flex-col items-center justify-center'>
                <MdMotionPhotosAuto className='text-5xl mb-2' />
                <p className='text-lg'>Fully automated</p>
              </div>
              <div className='px-2 bg-gray-200 w-60 h-60 text-center rounded-xl flex flex-col items-center justify-center'>
                <GoGoal className='text-5xl mb-2' />
                <p className='text-lg'>Accurate punching system for precise dispensing</p>
              </div>
              <div className='px-2 bg-gray-200 w-60 h-60 text-center rounded-xl flex flex-col items-center justify-center'>
                <FaBluetooth className='text-5xl mb-2' />
                <p className='text-lg'>Integrated Bluetooth with mobile app</p>
              </div>
            </div>
            {/* DevicePhoto */}
            <div className='ml-5'>
              <div className='border-2 border-yellow-500 w-[25rem] h-[25rem] text-center items-center justify-center flex'>Device Photo</div>
              <div className='text-center text-2xl mt-7 p-4 rounded-xl bg-gray-500'>The Device</div>
            </div>
          </div>
        </section>

        <section id='step'>
          <div className='items-center mt-[5rem]'>
            <p className='text-2xl text-center'> <strong>How MedPop Works</strong> <br />From Delivery to Dosage </p>
            <div className="flex justify-center items-center space-x-12 mt-5">
              <div className="relative w-[14rem] h-[14rem] bg-gray-200 border-2 border-black rounded-full">
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <GiMedicines className='text-5xl mb-5' />
                  <p className='text-center'>Place the blister pack <br /> to the device</p>
                </div>
              </div>
              <div className="relative w-[14rem] h-[14rem] bg-gray-200 border-2 border-black rounded-full">
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <FaDownload className='text-5xl mb-5' />
                  <p className='text-center'>Download the application <br /> from App Store</p>
                </div>
              </div>
              <div className="relative w-[14rem] h-[14rem] bg-gray-200 border-2 border-black rounded-full">
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <FaBluetooth className='text-5xl mb-5' />
                  <p className='text-center'>Connect the device with the App via Bluetooth</p>
                </div>
              </div>
              <div className="relative w-[14rem] h-[14rem] bg-gray-200 border-2 border-black rounded-full">
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <SlCalender className='text-5xl mb-5' />
                  <p className='text-center'>Setup your medication schedule</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='download'>
          <div className='flex items-center justify-center mt-[5rem]'>
            <div>
              <p className='text-xl font-bold text-center'>Transform your health effortlessly. <br /> Dive into MedPop now!</p>
              <div className='flex space-x-5 mt-6 items-center justify-center'>
                <div className='flex items-center bg-gray-200 border-2 w-[13rem] border-black py-2 rounded-xl hover:scale-[105%] transition-transform' >
                  <FaApple className='text-4xl ml-3 justify-center' />
                  <p className='ml-2'>Download on the <br /><strong>Apple Store</strong></p>
                </div>
                <div className='flex items-center bg-gray-200 border-2 w-[13rem] border-black py-2 rounded-xl hover:scale-[105%] transition-transform' >
                  <FaGooglePlay className='text-4xl ml-3 justify-center' />
                  <p className='text-center  w-[9rem]'>Get it on <br /><strong>Google Play</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>

  )
}

export default Home

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
        <title>MedPop&reg;</title>
        <link rel="icon" href="/web-logo.png" />
      </Head>
      {/* Nav Bar  */}
      <div id="navigation">
        <div className="fixed w-full flex justify-between py-3 px-10 border-b-2 border-[#FFFFFF] bg-gradient-to-br from-blue-500 to-green-500 z-[1000]">
          {/* App Icon */}
          <div className="flex space-x-2">
            <img
              className="w-[2rem] h-auto"
              alt="MedPop Logo"
              src="/medpop-logo.png"
            />
            <p className="flex items-center justify-center text-2xl font-bold text-[#FFFFFF]">
              MedPop&reg;
            </p>
          </div>
          <div className="space-x-5">
            {/* <button
              type="button"
              className="text-white border-b-[0.15rem] border-white/0 hover:border-white font-medium text-base px-[0.3rem] pt-2.5 pb-[0.25rem] rounded-sm text-center transition-all duration-200 mx-2"
            >
              About Us
            </button> */}
            <a
              type="button"
              href="#download"
              className="text-white border-b-[0.15rem] border-white/0 hover:border-white font-medium text-base px-[0.3rem] pt-2.5 pb-[0.25rem] rounded-sm text-center transition-all duration-200 mx-2"
            >
              Get It Now
            </a>
          </div>
        </div>
      </div>

      <main className="py-5 px-10">
        <section id="landing">
          <div className="flex justify-center mt-16">
            {/* Device and App Photo */}
            <div className="pt-6">
              <img
                className="w-[20rem] h-auto"
                alt="MedPop App"
                src="/medpop-app.png"
              />
            </div>
            {/* Introduce */}
            <div className="ml-10 mt-14">
              <p className="text-5xl font-bold text-[#2E2C9C]">MedPop&reg; </p>
              <p className="text-4xl font-bold text-[#2E2C9C] mt-3">
                Your Adherence Companion{" "}
              </p>
              <br />
              <p className="text-base text-gray-700">
                Seamlessly Synced to Your Health Routine. <br />
                Connect effortlessly, set your schedule, and never miss a dose{" "}
                <br />
                with personalized reminders, wherever you are.
              </p>
              <br />
              <div className="flex justify-center space-x-5 mt-5">
                <a
                  type="button"
                  href="#app"
                  className="hover:cursor-pointer text-[#2E2C9C] hover:text-white border-[0.1rem] border-[#2E2C9C] hover:border-green-500 hover:bg-green-500 font-medium rounded-3xl text-sm px-10 py-2.5 text-center transition-all duration-200"
                >
                  Learn More
                </a>
                <a
                  type="button"
                  href="#download"
                  className="hover:cursor-pointer text-[#2E2C9C] hover:text-white border-[0.1rem] border-[#2E2C9C] hover:border-green-500 hover:bg-green-500 font-medium rounded-3xl text-sm px-10 py-2.5 text-center transition-all duration-200"
                >
                  Get It Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="app">
          <p className="text-4xl text-center font-bold text-[#2E2C9C] mt-[5rem] mb-[2rem]">
            Key Features
          </p>
          <div className="flex justify-center items-center">
            {/* Introduce */}
            <div className="grid grid-cols-2 gap-5 text-green-500">
              <div className="bg-slate-100 w-[15rem] h-[11rem] text-center rounded-3xl flex flex-col items-center justify-center space-y-2">
                <IoIosNotifications className="text-5xl mb-2" />
                <p className="text-base text-gray-700 font-medium">
                  Personalised Reminder
                </p>
              </div>
              <div className="bg-slate-100 w-[15rem] h-[11rem] text-center rounded-3xl flex flex-col justify-center items-center space-y-2">
                <AiOutlineStock className="text-5xl mb-2" />
                <p className="text-base text-gray-700 font-medium">
                  Medicine Stock Quantity
                </p>
              </div>
              <div className="bg-slate-100 w-[15rem] h-[11rem] text-center rounded-3xl flex flex-col justify-center items-center space-y-2">
                <IoDocumentText className="text-5xl mb-2" />
                <p className="text-base text-gray-700 font-medium">
                  Adherence Report
                </p>
              </div>
              <div className="bg-slate-100 w-[15rem] h-[11rem] text-center rounded-3xl flex flex-col justify-center items-center space-y-2">
                <SlCalender className="text-5xl mb-2" />
                <p className="text-base text-gray-700 font-medium">
                  Adherence Plan Calendar
                </p>
              </div>
            </div>
            {/* App Photo */}
            <div className="ml-5 flex flex-col">
              <div className="w-[25rem] h-[25rem] items-center justify-center flex">
                <img
                  className="w-[12rem] h-auto"
                  alt="MedPop App"
                  src="/phone-app.png"
                />
              </div>
              <div className="flex items-center justify-center mt-[0.5rem]">
                <div className="rotate-[30deg] bg-green-500 px-[0.2rem] py-3" />
                <div className="rotate-[30deg] bg-green-500 px-[0.2rem] py-3 ml-1" />

                <p className="text-2xl text-[#2E2C9C] font-bold ml-4">
                  MedPop Mobile App
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="device">
          <div className="flex justify-center items-center mt-[6rem]">
            {/* Device Photo */}
            <div className="flex flex-col">
              <div className="w-[25rem] h-[20rem] items-center justify-center flex">
                <img
                  className="w-[18rem] h-auto"
                  alt="MedPop App"
                  src="/device.png"
                />
              </div>
              <div className="flex items-center justify-center mt-[0.5rem]">
                <div className="rotate-[30deg] bg-green-500 px-[0.2rem] py-3" />
                <div className="rotate-[30deg] bg-green-500 px-[0.2rem] py-3 ml-1" />

                <p className="text-2xl text-[#2E2C9C] font-bold ml-4">
                  MedPop IoT Device
                </p>
              </div>
            </div>
            {/* Introduce */}
            <div className="ml-5 grid grid-cols-2 gap-5 text-green-500">
              <div className="bg-slate-100 w-[15rem] h-[11rem] text-center rounded-3xl flex flex-col items-center justify-center space-y-2">
                <GiMedicines className="text-5xl mb-2" />
                <p className="text-base text-gray-700 font-medium">
                  Fit 6 Blister Pack
                </p>
              </div>
              <div className="bg-slate-100 w-[15rem] h-[11rem] text-center rounded-3xl flex flex-col justify-center items-center space-y-2">
                <MdMotionPhotosAuto className="text-5xl mb-2" />
                <p className="text-base text-gray-700 font-medium">
                  Fully Automated
                </p>
              </div>
              <div className="bg-slate-100 w-[15rem] h-[11rem] text-center rounded-3xl flex flex-col justify-center items-center space-y-2">
                <GoGoal className="text-5xl mb-2" />
                <p className="text-base text-gray-700 font-medium">
                  Accurate Dispensing
                </p>
              </div>
              <div className="bg-slate-100 w-[15rem] h-[11rem] text-center rounded-3xl flex flex-col justify-center items-center space-y-2">
                <FaBluetooth className="text-5xl mb-2" />
                <p className="text-base text-gray-700 font-medium">
                  Integrated Bluetooth
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="step">
          <div className="items-center mt-[8rem]">
            <p className="text-4xl text-center font-bold text-[#2E2C9C] mb-[0.5rem]">
              How MedPop Works
            </p>
            <p className="text-2xl text-center font-semibold text-green-500 mb-[3rem]">
              - From Delivery to Dosage -
            </p>
            <div className="flex justify-center items-center mt-5">
              <div className="w-[18rem] h-[14rem] rounded-full flex flex-col items-center justify-center px-6 border-[0.15rem] border-green-500">
                <GiMedicines className="text-5xl mb-5 text-[#2E2C9C]" />
                <p className="text-center text-gray-700 text-sm font-medium">
                  1. Place the blister pack <br /> to the device
                </p>
              </div>
              <div className="bg-green-500 h-[0.3rem] w-[2rem]" />
              <div className="w-[18rem] h-[14rem] rounded-full flex flex-col items-center justify-center px-6 border-[0.15rem] border-green-500">
                <FaDownload className="text-5xl mb-5 text-[#2E2C9C]" />
                <p className="text-center text-gray-700 text-sm font-medium">
                  2. Download the app from App Store
                </p>
              </div>
              <div className="bg-green-500 h-[0.3rem] w-[2rem]" />
              <div className="w-[18rem] h-[14rem] rounded-full flex flex-col items-center justify-center px-6 border-[0.15rem] border-green-500">
                <FaBluetooth className="text-5xl mb-5 text-[#2E2C9C]" />
                <p className="text-center text-gray-700 text-sm font-medium">
                  3. Connect the device via Bluetooth
                </p>
              </div>
              <div className="bg-green-500 h-[0.3rem] w-[2rem]" />
              <div className="w-[18rem] h-[14rem] rounded-full flex flex-col items-center justify-center px-6 border-[0.15rem] border-green-500">
                <SlCalender className="text-5xl mb-5 text-[#2E2C9C]" />
                <p className="text-center text-gray-700 text-sm font-medium">
                  4. Setup your medication schedule
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="download">
          <div className="flex items-center justify-center mt-[10rem] mb-[5rem]">
            <div>
              <p className="text-4xl text-center font-bold text-[#2E2C9C] mb-[0.5rem]">
                Transform your health effortlessly.
              </p>
              <p className="text-3xl text-center font-semibold text-[#2E2C9C]">
                Dive into{" "}
                <span className="text-green-500 font-bold">MedPop</span> now!
              </p>
              <div className="flex items-center justify-center my-[2.5rem]">
                <img
                  className="w-[6rem] h-auto"
                  alt="medpop-logo"
                  src="/web-logo.png"
                />
              </div>
              <div className="flex space-x-10 items-center justify-center">
                <button className="flex items-center border-[0.15rem] w-[13.5rem] border-gray-500 py-2.5 rounded-2xl hover:border-green-500 transition-all duration-100 group">
                  <FaApple className="text-[2.5rem] ml-3 justify-center text-gray-600 group-hover:text-green-500 transition-all duration-100" />
                  <p className="text-center ml-3 group-hover:text-green-500 transition-all duration-100">
                    Download on the <br />
                    <strong>Apple Store</strong>
                  </p>
                </button>
                <button className="flex items-center border-[0.15rem] w-[13.5rem] border-gray-500 py-2.5 rounded-2xl hover:border-green-500 transition-all duration-100 group">
                  <FaGooglePlay className="text-[2.2rem] ml-5 justify-center text-gray-600 group-hover:text-green-500 transition-all duration-100" />
                  <p className="text-center w-[9rem] group-hover:text-green-500 transition-all duration-100">
                    Get it on <br />
                    <strong>Google Play</strong>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="w-full h-[4rem] border-t-2 border-[#FFFFFF] bg-gradient-to-br from-blue-500 to-green-500 z-[1000]"></div>
    </div>
  );
};

export default Home;

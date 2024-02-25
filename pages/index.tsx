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
        <div className="fixed w-full flex justify-between items-center py-2 px-3 pl-6 lg:py-3 lg:px-10 border-b-[0.2rem] border-[#FFFFFF] bg-gradient-to-br from-blue-500 to-green-500 z-[1000]">
          {/* App Icon */}
          <a
            href="#"
            // onClick={() => window.location.reload()}
            className="flex space-x-2 hover:cursor-pointer"
          >
            <img
              className="w-[2rem] h-auto"
              alt="MedPop Logo"
              src="/medpop-logo.png"
            />
            <p className="flex items-center justify-center text-lg lg:text-2xl font-bold text-[#FFFFFF]">
              MedPop&reg;
            </p>
          </a>
          <div className="space-x-5">
            {/* Mobile Button */}
            <a
              type="button"
              href="#download"
              className="lg:hidden bg-white/20 text-white border-[0.15rem] border-white font-medium text-xs px-4 py-1.5 rounded-lg text-center transition-all duration-200 mx-2"
            >
              Get It Now
            </a>
            {/* Web Button */}
            <a
              type="button"
              href="#download"
              className="hidden lg:inline text-white border-b-[0.15rem] border-white/0 hover:border-white font-medium text-base px-[0.3rem] pt-2.5 pb-[0.25rem] rounded-sm text-center transition-all duration-200 mx-2"
            >
              Get It Now
            </a>
          </div>
        </div>
      </div>

      <div className="py-5 px-6 lg:px-10">
        <section id="landing">
          <div className="flex justify-center mt-[4rem] lg:mt-[7rem]">
            {/* Device and App Photo */}
            <div className="pt-6">
              <img
                className="hidden lg:inline lg:w-[20rem] xl:w-[25rem] 3xl:w-[30rem] h-auto"
                alt="MedPop App"
                src="/medpop-app.png"
              />
            </div>
            {/* Introduce */}
            <div className="lg:ml-10 lg:mt-14">
              <p
                className="text-center lg:text-left text-4xl lg:text-5xl font-bold text-[#2E2C9C]
              xl:text-6xl 3xl:text-7xl"
              >
                MedPop&reg;{" "}
              </p>
              <p
                className="text-center lg:text-left text-2xl lg:text-4xl font-bold text-[#2E2C9C] mt-1 lg:mt-3
              xl:text-5xl 3xl:text-6xl"
              >
                Your Adherence Companion{" "}
              </p>
              <div>
                <img
                  className="lg:hidden w-[13rem] h-auto mx-auto -translate-x-6 mt-[1rem]"
                  alt="MedPop App"
                  src="/medpop-app.png"
                />
              </div>
              <br />
              <p
                className="text-base text-gray-700
              xl:text-lg 3xl:text-xl"
              >
                Seamlessly Synced to Your Health Routine. <br />
                Connect effortlessly, set your schedule,{" "}
                <br className="lg:hidden" />
                and never miss a dose <br className="hidden lg:inline" />
                with personalized reminders, wherever you are.
              </p>
              <br />
              <div className="flex justify-center space-x-5 mt-0 lg:mt-5 xl:mt-10 3xl:mt-16">
                <a
                  type="button"
                  href="#app"
                  className="hover:cursor-pointer text-[#2E2C9C] hover:text-white border-[0.1rem] border-[#2E2C9C] hover:border-green-500 hover:bg-green-500 font-medium rounded-3xl text-sm px-10 pt-2.5 pb-3 text-center transition-all duration-200
                  xl:text-base 3xl:text-lg"
                >
                  Learn More
                </a>
                <a
                  type="button"
                  href="#download"
                  className="hover:cursor-pointer text-[#2E2C9C] hover:text-white border-[0.1rem] border-[#2E2C9C] hover:border-green-500 hover:bg-green-500 font-medium rounded-3xl text-sm px-10 pt-2.5 pb-3 text-center transition-all duration-200
                  xl:text-base 3xl:text-lg"
                >
                  Get It Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="app">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:mt-[8rem]">
            {/* Introduce */}
            <div>
              <p className="text-3xl lg:text-4xl text-center font-bold text-[#2E2C9C] mt-[5rem] mb-[2rem]">
                Key Features
              </p>
              {/* App Photo Mobile*/}
              <div className="lg:hidden flex flex-col mt-[2rem]">
                <div className="lg:w-[25rem] lg:h-[25rem] items-center justify-center flex relative">
                  <img
                    className="w-[6rem] h-auto z-[50]"
                    alt="MedPop App"
                    src="/phone-app.png"
                  />
                  {/* <div className="absolute w-[14rem] h-[14rem] bg-green-500/75 rounded-full top-[-8%] left-0 z-[10]"></div>
                  <div className="absolute w-[12rem] h-[12rem] bg-[#2281C7]/75 rounded-full top-50% right-[5%] z-[10]"></div>
                  <div className="absolute w-[9rem] h-[9rem] bg-green-500/75 rounded-full bottom-0 left-[10%] z-[10]"></div> */}
                </div>
                <div className="flex items-center justify-center mt-[1rem] mb-[2rem] lg:mb-[0rem] lg:mt-[2rem]">
                  <p className="text-center lg:text-start text-2xl text-[#2E2C9C] font-bold ml-4">
                    MedPop Mobile App
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 lg:gap-5 text-green-500">
                <div className="bg-slate-100 w-[10rem] h-[8rem] lg:w-[15rem] lg:h-[11rem] text-center rounded-3xl flex flex-col items-center justify-center space-y-2">
                  <IoIosNotifications className="text-5xl mb-2" />
                  <p className="text-xs lg:text-base text-gray-700 font-medium">
                    Personalised Reminder
                  </p>
                </div>
                <div className="bg-slate-100  w-[10rem] h-[8rem] lg:w-[15rem] lg:h-[11rem] text-center rounded-3xl flex flex-col justify-center items-center space-y-2">
                  <AiOutlineStock className="text-5xl mb-2" />
                  <p className="text-xs lg:text-base text-gray-700 font-medium">
                    Medicine Stock Quantity
                  </p>
                </div>
                <div className="bg-slate-100  w-[10rem] h-[8rem] lg:w-[15rem] lg:h-[11rem] text-center rounded-3xl flex flex-col justify-center items-center space-y-2">
                  <IoDocumentText className="text-5xl mb-2" />
                  <p className="text-xs lg:text-base text-gray-700 font-medium">
                    Adherence Report
                  </p>
                </div>
                <div className="bg-slate-100  w-[10rem] h-[8rem] lg:w-[15rem] lg:h-[11rem] text-center rounded-3xl flex flex-col justify-center items-center space-y-2">
                  <SlCalender className="text-5xl mb-2" />
                  <p className="text-xs lg:text-base text-gray-700 font-medium">
                    Adherence Plan Calendar
                  </p>
                </div>
              </div>
            </div>
            {/* App Photo WEB*/}
            <div className="hidden lg:inline-flex ml-10 flex-col mt-[10rem]">
              <div className="w-[25rem] h-[25rem] items-center justify-center flex relative">
                <img
                  className="w-[12rem] h-auto z-[50]"
                  alt="MedPop App"
                  src="/phone-app.png"
                />
                <div className="absolute w-[14rem] h-[14rem] bg-green-500/75 rounded-full top-[-8%] left-0 z-[10]"></div>
                <div className="absolute w-[12rem] h-[12rem] bg-[#2281C7]/75 rounded-full top-50% right-[5%] z-[10]"></div>
                <div className="absolute w-[9rem] h-[9rem] bg-green-500/75 rounded-full bottom-0 left-[10%] z-[10]"></div>
              </div>
              <div className="flex items-center justify-center mt-[2rem]">
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
          <div className="flex flex-col lg:flex-row justify-center items-center mt-[3rem] lg:mt-[6rem]">
            {/* Device Photo */}
            <div className="lg:inline flex flex-col">
              <div className="lg:w-[25rem] lg:h-[25rem] items-center justify-center flex relative">
                <img
                  className="w-[11rem] lg:w-[18rem] h-auto z-[20]"
                  alt="MedPop App"
                  src="/device.png"
                />
                <div className="hidden lg:inline-flex absolute space-x-4">
                  <div className="w-[9rem] h-[16rem] bg-[#2281C7]/75 rounded-2xl z-[10] translate-y-[20%]"></div>
                  <div className="w-[9rem] h-[16rem] bg-green-500/75 rounded-2xl z-[10] translate-y-[-20%]"></div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-[1rem] mb-[2rem] lg:mb-[0rem] lg:mt-[2rem]">
                <div className="hidden lg:inline rotate-[30deg] bg-green-500 px-[0.2rem] py-3" />
                <div className="hidden lg:inline rotate-[30deg] bg-green-500 px-[0.2rem] py-3 ml-1" />

                <p className="text-2xl text-[#2E2C9C] font-bold ml-4">
                  MedPop Device
                </p>
              </div>
            </div>
            {/* Introduce */}
            <div className="lg:ml-10 grid grid-cols-2 gap-2 lg:gap-5 text-green-500">
              <div className="bg-slate-100 w-[10rem] h-[8rem] lg:w-[15rem] lg:h-[11rem] text-center rounded-3xl flex flex-col items-center justify-center space-y-2">
                <GiMedicines className="text-5xl mb-2" />
                <p className="text-xs lg:text-base text-gray-700 font-medium">
                  Fit 6 Blister Pack
                </p>
              </div>
              <div className="bg-slate-100 w-[10rem] h-[8rem] lg:w-[15rem] lg:h-[11rem] text-center rounded-3xl flex flex-col justify-center items-center space-y-2">
                <MdMotionPhotosAuto className="text-5xl mb-2" />
                <p className="text-xs lg:text-base text-gray-700 font-medium">
                  Fully Automated
                </p>
              </div>
              <div className="bg-slate-100 w-[10rem] h-[8rem] lg:w-[15rem] lg:h-[11rem] text-center rounded-3xl flex flex-col justify-center items-center space-y-2">
                <GoGoal className="text-5xl mb-2" />
                <p className="text-xs lg:text-base text-gray-700 font-medium">
                  Accurate Dispensing
                </p>
              </div>
              <div className="bg-slate-100 w-[10rem] h-[8rem] lg:w-[15rem] lg:h-[11rem] text-center rounded-3xl flex flex-col justify-center items-center space-y-2">
                <FaBluetooth className="text-5xl mb-2" />
                <p className="text-xs lg:text-base text-gray-700 font-medium">
                  Integrated Bluetooth
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="step">
          <div className="items-center mt-[6rem] lg:mt-[8rem] xl:mt-[14rem] 3xl:mt-[16rem] ">
            <p className="text-3xl lg:text-4xl text-center font-bold text-[#2E2C9C] mb-[0.5rem]">
              How MedPop Works
            </p>
            <p className="text-xl lg:text-2xl text-center font-semibold text-green-500 mb-[3rem]">
              - From Delivery to Dosage -
            </p>
            <div className="flex flex-col lg:flex-row justify-center items-center mt-5">
              <div className="w-[12.5rem] h-[12rem] lg:w-[18rem] lg:h-[14rem] rounded-full flex flex-col items-center justify-center px-6 border-[0.15rem] border-green-500">
                <GiMedicines className="text-5xl mb-5 text-[#2E2C9C]" />
                <p className="text-center text-gray-700 text-sm font-medium">
                  1. Place the blister pack <br /> to the device
                </p>
              </div>
              <div className="bg-green-500 h-[1.5rem] w-[0.3rem] lg:h-[0.3rem] lg:w-[2rem]" />
              <div className="w-[12.5rem] h-[12rem] lg:w-[18rem] lg:h-[14rem] rounded-full flex flex-col items-center justify-center px-6 border-[0.15rem] border-green-500">
                <FaDownload className="text-5xl mb-5 text-[#2E2C9C]" />
                <p className="text-center text-gray-700 text-sm font-medium">
                  2. Download the app <br /> from App Store
                </p>
              </div>
              <div className="bg-green-500 h-[1.5rem] w-[0.3rem] lg:h-[0.3rem] lg:w-[2rem]" />
              <div className="w-[12.5rem] h-[12rem] lg:w-[18rem] lg:h-[14rem] rounded-full flex flex-col items-center justify-center px-6 border-[0.15rem] border-green-500">
                <FaBluetooth className="text-5xl mb-5 text-[#2E2C9C]" />
                <p className="text-center text-gray-700 text-sm font-medium">
                  3. Connect the device <br />
                  via Bluetooth
                </p>
              </div>
              <div className="bg-green-500 h-[1.5rem] w-[0.3rem] lg:h-[0.3rem] lg:w-[2rem]" />
              <div className="w-[12.5rem] h-[12rem] lg:w-[18rem] lg:h-[14rem] rounded-full flex flex-col items-center justify-center px-6 border-[0.15rem] border-green-500">
                <SlCalender className="text-5xl mb-5 text-[#2E2C9C]" />
                <p className="text-center text-gray-700 text-sm font-medium">
                  4. Setup your <br />
                  medication schedule
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="download">
          <div className="flex items-center justify-center mt-[8rem] lg:mt-[10rem] xl:mt-[14rem] 3xl:mt-[16rem] mb-[2rem] lg:mb-[5rem] xl:mb-[8rem] 3xl:mb-[14rem]">
            <div>
              <p className="text-3xl lg:text-4xl 3xl:text-5xl text-center font-bold text-[#2E2C9C] mb-[0.5rem] 3xl:mb-[1rem]">
                Transform your health effortlessly.
              </p>
              <p className="text-2xl lg:text-3xl 3xl:text-4xl text-center font-semibold text-[#2E2C9C]">
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
              <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-10 items-center justify-center">
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
      </div>
      <div className="w-full h-[4rem] border-t-2 border-[#FFFFFF] bg-gradient-to-br from-blue-500 to-green-500 z-[1000]"></div>
    </div>
  );
};

export default Home;

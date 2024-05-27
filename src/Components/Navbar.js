import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { BsPersonBadge , BsPersonWorkspace , BsFileText, BsFillPersonFill, BsList, BsArrowBarLeft  } from "react-icons/bs";

const Navbar = () => {

  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isAbove768, setIsAbove768] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsAbove768(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isAbove768]);

  return (
    <> 
    {isAbove768 ?
      <div className='w-[100%] h-[100%] flex justify-around items-center bg-[#d4d4ef] shadow-md shadow-[#27374d]' dir="rtl">
            <p className='w-[10%] text-center font-bold text-xl font-[cursive]'>PMS</p>
        <div className='w-[60%] flex justify-around items-center'>
        <Link to="/students" className="flex justify-center items-center flex-col font-semibold text-lg text-[#27374d] hover:text-[#27374d95] transition duration-300 ease-in-out">
              <BsPersonBadge size={20}/>
              الطلاب
            </Link>
            <Link to="/supervisors" className="flex justify-center items-center flex-col font-semibold text-lg text-[#27374d] hover:text-[#27374d95] transition duration-300 ease-in-out">
              <BsPersonWorkspace size={20}/>
              المشرفين
              </Link>
            <Link to="/projects" className="flex justify-center items-center flex-col font-semibold text-lg text-[#27374d] hover:text-[#27374d95] transition duration-300 ease-in-out">
              <BsFileText size={20}/>
              المشاريع
            </Link>
            </div>
            <Link to="/profile" className='w-[12%] h-[80%] flex justify-evenly items-center rounded-3xl bg-slate-400 bg-opacity-40 hover:bg-opacity-75 cursor-pointer'>
              {/* <p className='text-[#27374d] font-semibold'>supervisor name</p> */}
              <BsFillPersonFill color='#27374d' size={28}/>
            </Link>
            <Link to="/" className='lg:w-[3%] w-[5%] h-[80%] flex justify-evenly items-center rounded-3xl bg-slate-400 bg-opacity-40 hover:bg-opacity-75 cursor-pointer'>
              {/* <p className='text-[#27374d] font-semibold'>supervisor name</p> */}
              <BsArrowBarLeft color='#27374d' size={28}/>
            </Link>
    </div>
    : isDivVisible ? 
    <div className='w-[100%] h-56 bg-slate-400 rounded-b-xl flex justify-center items-center flex-col fixed z-50 text-[#27374d]'>
      <p className='h-[22%] text-2xl absolute top-3 right-3 cursor-pointer' onClick={()=>setIsDivVisible(false)}>X</p>
      <p className='h-[22%] text-xl absolute top-3  font-semibold font-[cursive]' onClick={()=>setIsDivVisible(false)}>PMS</p>
      <Link to="/" className='lg:w-[3%] w-[5%] h-[22%] flex justify-evenly items-center rounded-3xl bg-slate-400 bg-opacity-40 hover:bg-opacity-75 cursor-pointer absolute top-3 left-3'>
              {/* <p className='text-[#27374d] font-semibold'>supervisor name</p> */}
              <BsArrowBarLeft color='#27374d' size={28}/>
            </Link>
      <div className='w-[90%] h-[60%] grid grid-cols-2 grid-rows-2 gap-[2%] items-center mt-[5%]' dir='rtl'>
        <Link to="/students" className="w-[98%] h-[75%] border-2 border-[#27374d] rounded-xl flex justify-center items-center flex-col sm:flex-row sm:gap-3 font-semibold text-sm sm:text-lg text-[#27374d] hover:text-[#27374d95] hover:border-[#27374d95] transition duration-300 ease-in-out">
              <BsPersonBadge size={20}/>
              الطلاب
            </Link>
            <Link to="/supervisors" className="w-[98%] h-[75%] border-2 border-[#27374d] rounded-xl flex justify-center items-center flex-col sm:flex-row sm:gap-3 font-semibold text-sm sm:text-lg text-[#27374d] hover:text-[#27374d95] hover:border-[#27374d95] transition duration-300 ease-in-out">
              <BsPersonWorkspace size={20}/>
              المشرفين
              </Link>
            <Link to="/projects" className="w-[98%] h-[75%] border-2 border-[#27374d] rounded-xl flex justify-center items-center flex-col sm:flex-row sm:gap-3 font-semibold text-sm sm:text-lg text-[#27374d] hover:text-[#27374d95] hover:border-[#27374d95] transition duration-300 ease-in-out">
              <BsFileText size={20}/>
              المشاريع
            </Link>
            <Link to="/profile" className='w-[98%] h-[75%] border-2 border-[#27374d] rounded-xl flex justify-center items-center flex-col sm:flex-row sm:gap-3 font-semibold text-sm sm:text-lg text-[#27374d] hover:text-[#27374d95] hover:border-[#27374d95] transition duration-300 ease-in-out'>
              <BsFillPersonFill size={28}/>
              {/* <p className='text-[#27374d] font-semibold'>supervisor name</p>  */}
            </Link>
      </div>
    </div> 
    :
     <div className="absolute top-3 right-3 cursor-pointer">
          <BsList
            size={25}
            color='#27374d'
            onClick={() => {
              setIsDivVisible(true);
            }}
          />
        </div>}
    </>
  )
}

export default Navbar
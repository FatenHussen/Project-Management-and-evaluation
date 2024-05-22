import React, { useEffect } from 'react'

const DetailsModel = ({onClose, visible, id}) => {

    useEffect(() => {
        if(visible){
        document.body.style.overflow = 'hidden';
        }
        return () => {
          document.body.style.overflow = 'visible';
        };
      }, [visible]);  

    if(!visible) return null;

  return (
      <div className={`w-screen h-full fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex justify-center items-center`}>
        <div className='md:w-[40%] w-[80%] h-[45%] flex justify-between items-center flex-col mt-8 bg-white rounded-2xl'>
            <div className='w-[90%] h-[15%] flex justify-between items-center'>
                <p className='font-semibold text-xl cursor-pointer' onClick={onClose}>X</p>
                <p className='font-bold text-lg'>التفاصيل</p>
            </div> 
            <div className='w-[90%] h-[80%] flex justify-between items-center flex-col text-[#27374d]'>
                <div className='w-[100%] h-[45%] flex justify-between items-center'>
                    <div className='flex justify-center flex-col w-[48%] h-[100%]'>
                    <label className='text-right'>تغيير المنصب</label>
                    <select className='w-[100%] h-10 outline-none border-2 border-[#27374d] rounded-lg'>
                        <option></option>
                    </select>
                    </div>
                    <div className='flex justify-center flex-col w-[48%] h-[100%]'>
                    <label className='text-right'>المنصب في اللجنة</label>
                    <select className='w-[100%] h-10 outline-none border-2 border-[#27374d] rounded-lg'>
                        <option></option>
                    </select>
                    </div>
                </div>
                <div className='w-[100%] h-[45%] flex justify-center items-center gap-7'>
                    <button className='w-40 h-10 bg-[#27374d] text-white rounded-lg'>حفظ</button>
                    <button className='w-28 h-10 bg-red-900 text-white rounded-lg'>حذف</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailsModel
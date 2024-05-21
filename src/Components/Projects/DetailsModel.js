import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const DetailsModel = ({onClose, visible, id}) => {

    useEffect(() => {
        if(visible){
        document.body.style.overflow = 'hidden';
        }
        return () => {
          document.body.style.overflow = 'visible';
        };
      }, [visible]);  
  console.log('ids', id)


    if(!visible) return null;

  return (
    <div className={`w-screen h-full fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex justify-center items-center`}>
        <div className='md:w-[40%] w-[80%] h-[55%] flex justify-between items-center flex-col mt-8 bg-white rounded-2xl'>
            <div className='w-[90%] h-[15%] flex justify-between items-center'>
                <p className='font-semibold text-xl cursor-pointer' onClick={onClose}>X</p>
                <p className='font-bold text-lg'>التفاصيل</p>
            </div> 
            <div className='w-[90%] h-[80%] flex justify-between items-center flex-col mb-5'>
                <Link to={`/proposal/${id}`} className='w-[65%] h-[20%] bg-[#27374d] rounded-lg text-white flex justify-center items-center hover:bg-[#27374dd8]'>المقترح</Link>
                <Link to={`/weekly/${id}`} className='w-[65%] h-[20%] bg-[#27374d] rounded-lg text-white flex justify-center items-center hover:bg-[#27374dd8]'>متابعة المشروع</Link>
                <Link to={`/evaluation/${id}`} className='w-[65%] h-[20%] bg-[#27374d] rounded-lg text-white flex justify-center items-center hover:bg-[#27374dd8]'>الدراسة المرحلية</Link>
                <Link to={`/final/${id}`} className='w-[65%] h-[20%] bg-[#27374d] rounded-lg text-white flex justify-center items-center hover:bg-[#27374dd8]'>الدراسة النهائية</Link>
            </div>
        </div>
    </div>
  )
}

export default DetailsModel
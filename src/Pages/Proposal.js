import React from 'react'
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import test from '../Assets/OIP (2).jpg' 

const Proposal = () => {
  const { id } = useParams();

  console.log('id', id)

  return (
    <div className='w-[100%] min-h-screen h-fit bg-slate-200'>
      <div className='w-[100%] h-16'>
        <Navbar/>
      </div>
      <div className='w-[100%] h-fit flex justify-center items-center flex-col' dir="rtl">
        <p className='w-[90%] text-3xl font-bold text-[#27374d] my-5'>المقترح</p>
      {/* <div className='w-[90%] h-[100px] mt-5'>
        <p className='text-right text-3xl font-bold text-[#27374d]'>المشاريع</p>
        </div>
        <div className='w-[90%] h-fit'>
          <ProjectsTable projects={projects}/>
        </div> */}
        <table className="w-[90%] mt-16 border-2 border-[#27374d] text-[#27374d] mb-10" border="">
          <thead>
            <tr className='border-b-2 border-[#27374d] bg-gray-300'>
              <th className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d]">اسم المشروع</th>
              <th className='w-[80%]'>
                <input 
                  type="text"
className='w-[100%] h-10 outline-none bg-transparent' 
                  name="projectName"   
                  disabled
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d text-center">المشكلة</td>
              <td className="w-[80%]">
              <textarea
                 disabled
                  rows="10"
                  className='w-[100%] resize-none bg-transparent p-2 outline-none'
                  name="problem"
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">المجال</td>
              <td className="w-[80%]">
                <input disabled
                  type="text"
className='w-[100%] h-10 outline-none bg-transparent' 
                  name="domain"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">مراجع الأدبيات للمشكلة</td>
              <td className="w-[80%]">
              <textarea
                 disabled
                  rows="10"
                  className='w-[100%] resize-none bg-transparent p-2 outline-none'
                  name="literature"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">الخريطة الرئيسية</td>
              <td className="w-[80%]">
                {/* <div
                className='fileInput' id='main_map' onDragOver={handleDragOver} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                <input disabled name='main_map' id='mainMap' type="file" multiple onChange={handleFileInputChange}/>
                <p>Drag and drop files here</p>
                <p>or</p>
                <label htmlFor="mainMap">
                    Click to select files
                </label>
            </div>
            {formData.main_map != null ? 
            <div className='fileShow'>
               
                <Link to={`${URL.createObjectURL(formData.main_map)}`}>
                        <img
                            src={URL.createObjectURL(formData.main_map)}
                            // alt={`Uploaded Image ${index}`}
                        />
                    </Link>
                        
                        <button onClick={() => handleRemoveImage('main_map')}>X</button>
            </div>
             ''}
             */}
                {/* <div
                  className="fileInput"
                  id="main_map"
                  onDragOver={handleDragOver}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input disabled
                    name="main_map"
                    accept="image/*"
                    id="mainMap"
                    type="file"
                    multiple
                    onChange={handleFileInputChange}
                  />
                  {size ? (
                    <p style={{ color "red" }}>
                      يجب أن يكون الملف أصغر من 2 ميجابايت
                    </p>
                  )  (
                    ""
                  )}
                  {type ? (
                    <p style={{ color "red" }}>يجب أن يكون الملف صورة</p>
                  )  (
                    ""
                  )}
                  <p>قم بسحب وإسقاط الملفات هنا</p>
                  <p>أو</p>
                  <label htmlFor="mainMap">انقر لتحديد الملفات</label>
                </div> */}
                {/* {formData.main_map != null ? ( */}
                  <div className="flex justify-center items-center">
                    <Link to={``}>
                      <img
                        src={test}
                      />
                    </Link>
                  </div>
                {/* )  (
                  ""
                )} */}
                {/* <input disabled type="file" accept="image/*" onChange={handleChange} /> */}
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">الخبراء</td>
              <td className="w-[80%]">
                <input disabled
                  type="text"
className='w-[100%] h-10 outline-none bg-transparent' 
                  name="experts"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">المستخدمون</td>
              <td className="w-[80%]">
                <input disabled
                  type="text"
className='w-[100%] h-10 outline-none bg-transparent' 
                  name="users"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">الأطراف المعنية</td>
              <td className="w-[80%]">
                <input disabled
                  type="text"
className='w-[100%] h-10 outline-none bg-transparent' 
                  name="stakeholders"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">مراجع الأدبيات للحل المقترح</td>
              <td className="w-[80%]">
              <textarea
                 disabled
                  rows="10"
                  className='w-[100%] resize-none bg-transparent p-2 outline-none'
                  name="literatureS"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">الخريطة الذهنية</td>
              <td className="w-[80%]">
                {/* <div
                  className="fileInput"
                  id="mind_map"
                  onDragOver={handleDragOver}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input disabled
                    name="mind_map"
                    accept="image/*"
                    id="mindMap"
                    type="file"
                    multiple
                    onChange={handleFileInputChange}
                  />
                  {size ? (
                    <p style={{ color "red" }}>
                      يجب أن يكون الملف أصغر من 2 ميجابايت
                    </p>
                  )  (
                    ""
                  )}
                  {type ? (
                    <p style={{ color "red" }}>يجب أن يكون الملف صورة</p>
                  )  (
                    ""
                  )}
                  <p>قم بسحب وإسقاط الملفات هنا</p>
                  <p>أو</p>
                  <label htmlFor="mindMap">انقر لتحديد الملفات</label>
                </div> */}
                {/* {formData.mind_map != null ? (
                  <div className="fileShow">
                    <Link to={`${URL.createObjectURL(formData.mind_map)}`}>
                      <img
                        src={URL.createObjectURL(formData.mind_map)}
                      />
                    </Link>
                    <button onClick={() => handleRemoveImage("mind_map")}>
                      X
                    </button>
                  </div>
                )  (
                  ""
                )} */}
                <div className="flex justify-center items-center">
                    <Link to={``}>
                      <img
                        src={test}
                      />
                    </Link>
                  </div>
                {/* <input disabled type="file" accept="image/*" onChange={handleChange} /> */}
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">الخبراء</td>
              <td className="w-[80%]">
                <input disabled
                  type="text"
className='w-[100%] h-10 outline-none bg-transparent' 
                  name="experts_S"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">المستخدمون</td>
              <td className="w-[80%]">
                <input disabled
                  type="text"
className='w-[100%] h-10 outline-none bg-transparent' 
                  name="users_S"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">الأطراف المعنية</td>
              <td className="w-[80%]">
                <input disabled
                  type="text"
className='w-[100%] h-10 outline-none bg-transparent' 
                  name="stakeholders_S"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">الحل المقترح</td>
              <td className="w-[80%]">
              <textarea
                 disabled
                  rows="10"
                  className='w-[100%] resize-none bg-transparent p-2 outline-none'
                  name="pro_solution"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">المتطلبات الوظيفية</td>
              <td className="w-[80%]">
              <textarea
                 disabled
                  rows="10"
                  className='w-[100%] resize-none bg-transparent p-2 outline-none'
                  name="fun_requirements"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">المتطلبات غير الوظيفية</td>
              <td className="w-[80%]">
              <textarea
                 disabled
                  rows="10"
                  className='w-[100%] resize-none bg-transparent p-2 outline-none'
                  name="fun_Nrequirements"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">المنهجية</td>
              <td className="w-[80%]">
                <input disabled
                  type="text"
className='w-[100%] h-10 outline-none bg-transparent' 
                  name="methodology"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">الاجتماعات</td>
              <td className="w-[80%]">
                <input disabled
                  type="text"
className='w-[100%] h-10 outline-none bg-transparent' 
                  name="meetings"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">التواصل</td>
              <td className="w-[80%]">
                <input disabled
                  type="text"
className='w-[100%] h-10 outline-none bg-transparent' 
                  name="communication"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">قائد المشروع</td>
              <td className="w-[80%]">
                <input disabled
                  type="text"
className='w-[100%] h-10 outline-none bg-transparent' 
                  name="projectLeader"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">مشاركة الملفات</td>
              <td className="w-[80%]">
                <input disabled
                  type="text"
className='w-[100%] h-10 outline-none bg-transparent' 
                  name="fileSharing"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">المنصة</td>
              <td className="w-[80%]">
                <input disabled
                  type="text"
className='w-[100%] h-10 outline-none bg-transparent' 
                  name="platform"
   
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">الأدوات</td>
              <td className="w-[80%]">
                <input disabled
                  type="text"
className='w-[100%] h-10 outline-none bg-transparent' 
                  name="tools"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">اللغات</td>
              <td className="w-[80%]">
                <input disabled
                  type="text"
className='w-[100%] h-10 outline-none bg-transparent' 
                  name="languages"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">قاعدة البيانات</td>
              <td className="w-[80%]">
                <input disabled
                  type="text"
className='w-[100%] h-10 outline-none bg-transparent' 
                  name="database"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
              <td className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d] text-center">الحزم</td>
              <td className="w-[80%]">
                <input disabled
                  type="text"
className='w-[100%] h-10 outline-none bg-transparent' 
                  name="packages"
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-300'>
                <th className='w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d]'>أسماء المشرفين</th>
                <th className='w-[80%] h-10 border-l-2 border-[#27374d] text-[#27374d]'>الاختصاص</th>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
                <td className='w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
                <td className='w-[80%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
                <td className='w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
                <td className='w-[80%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
                <td className='w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
                <td className='w-[80%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-300'>
                <th className='w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d]'>أسماء الطلاب</th>
                <th className='w-[80%] h-10 border-l-2 border-[#27374d] text-[#27374d]'>دور الطالب في المشروع</th>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
                <td className='w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
                <td className='w-[80%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
                <td className='w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
                <td className='w-[80%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
                <td className='w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
                <td className='w-[80%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
                <td className='w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
                <td className='w-[80%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
                <td className='w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
                <td className='w-[80%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
            </tr>
          </tbody>
        </table>
        {/* <div className='w-[90%] my-10 flex justify-start items-center'>
        <button type="button" className='w-[15%] h-12 bg-[#27374d] text-white rounded-lg'>إرسال</button>
        </div> */}
      </div>
    </div>
  )
}

export default Proposal
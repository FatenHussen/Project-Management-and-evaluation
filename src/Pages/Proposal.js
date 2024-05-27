import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import test from '../Assets/OIP (2).jpg' 

const Proposal = () => {
  const { id } = useParams();
  const [proposal, setProposal] = useState('')
  const [project, setProject] = useState('')

  const empListURlAPI=`http://127.0.0.1:8000/employee/get_project_proposal/${id}`
  async function get_employee(){
    // setLoader(false) 
   try{
     const response =await axios.get(empListURlAPI,{
       headers:{
         "Authorization":`Bearer ${localStorage.getItem('token')}`,
         "Access-Control-Allow-Origin": "*",
       "Content-Type": "multipart/form-data",

       }
     })
     console.log(response.data.data)
     setProposal(response.data.data)
   }
   catch(err){
     console.log(err)
   }
  }

  const proListURlAPI=`http://127.0.0.1:8000/employee/get_info_project/${id}`
  async function get_project(){
    // setLoader(false) 
   try{
     const response =await axios.get(proListURlAPI,{
       headers:{
         "Authorization":`Bearer ${localStorage.getItem('token')}`,
         "Access-Control-Allow-Origin": "*",
       "Content-Type": "multipart/form-data",

       }
     })
     console.log(response.data.data)
     setProject(response.data.data)
   }
   catch(err){
     console.log(err)
   }
  }

  useEffect( ()=>{
    console.log(localStorage.getItem('token'))
    get_employee()
    get_project()
  //  setAddEmployee1(false)
  //  console.log(students)
   },[])


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
                  value={project.name}
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
                  value={proposal.problem}
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
                  value={proposal.domain}
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
                  value={proposal.literature_references}
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
                        src={proposal.main_map}
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
                  value={proposal.experts}
  
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
                  value={proposal.users}
  
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
                  value={proposal.stakeholders}
  
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
                  value={proposal.solution_literature_references}
  
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
                        src={proposal.mind_map}
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
                  value={proposal.proposed_solution}
  
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
                  value={proposal.functional_requirements}
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
                  value={proposal.non_functional_requirements}
  
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
                  value={proposal.methodology}
  
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
                  value={proposal.meetings}
  
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
                  value={proposal.communication}
  
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
                  value={proposal.project_leader}
  
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
                  value={proposal.file_sharing}
  
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
                  value={proposal.platform}
   
  
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
                  value={proposal.tools}
  
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
                  value={proposal.languages}
  
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
                  value={proposal.database}
  
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
                  value={proposal.packages}
  
                />
              </td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-300'>
                <th className='w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d]'>أسماء المشرفين</th>
                <th className='w-[80%] h-10 border-l-2 border-[#27374d] text-[#27374d]'>الاختصاص</th>
            </tr>
             {(project && project.employees.length > 0)? project.employees.map((supervisor, index) => (
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
                <td className='w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d]'>{supervisor.name}</td>
                <td className='w-[80%] h-10 border-l-2 border-[#27374d] text-[#27374d]'>{supervisor.specialization_id == 1 ? 'شبكات حاسوبية' : supervisor.specialization_id == 2 ? 'هندسة البرمجيات' : supervisor.specialization_id == 3 ? 'الذكاء الصنعي' : ''}</td>
            </tr>
            )) : ''}
            {/* <tr className='border-b-2 border-[#27374d] bg-gray-200'>
                <td className='w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
                <td className='w-[80%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
            </tr>
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
                <td className='w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
                <td className='w-[80%] h-10 border-l-2 border-[#27374d] text-[#27374d]'></td>
            </tr> */}
            <tr className='border-b-2 border-[#27374d] bg-gray-300'>
                <th className='w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d]'>أسماء الطلاب</th>
                <th className='w-[80%] h-10 border-l-2 border-[#27374d] text-[#27374d]'>دور الطالب في المشروع</th>
            </tr>
            {(project && project.user.length > 0) ? project.user.map((students, index) => (
            <tr className='border-b-2 border-[#27374d] bg-gray-200'>
                <td className='w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d]'>{students.name}</td>
                <td className='w-[80%] h-10 border-l-2 border-[#27374d] text-[#27374d]'>{students.role_for_project}</td>
            </tr>
             )) : ''}
            {/* <tr className='border-b-2 border-[#27374d] bg-gray-200'>
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
            </tr> */}
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
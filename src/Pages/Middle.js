import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';

const Middle = () => {
  const { id } = useParams();
  const [evaluations, setEvaluations] = useState([]);
  const [project, setProject] = useState('');
  const [projectEvaluation, setProjectEvaluation] = useState(null);

  const projectData = [
    { name: 'فكرة المشروع', key: 'project_idea', staticScore: 8 },
    { name: 'دراسة الإشارة', key: 'signal_study', staticScore: 8 },
    { name: 'دراسة تحليلية', key: 'analytical_study', staticScore: 8 },
    { name: 'التصميم', key: 'design', staticScore: 10 },
    { name: 'البرمجة', key: 'programming', staticScore: 10 },
    { name: 'الإدارة', key: 'administration', staticScore: 8 },
    { name: 'Git Hub', key: 'github', staticScore: 8 },
    { name: 'النتائج/التحليل', key: 'results', staticScore: 8 },
    { name: 'القيمة المضافة', key: 'value_added', staticScore: 8 },
    { name: 'التقدير', key: 'appreciation', staticScore: 8 },
    { name: 'العرض', key: 'presentation', staticScore: 8 }
  ];

  const fetchMidEvaluations = async () => {
    try {
      const response = await axios.get('http://localhost:8000/employee/evaluations/get_all_mid_evaluations', {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        }
      });
      console.log('API response:', response.data); // Debugging statement
      if (response.data && response.data.data && Array.isArray(response.data.data)) {
        const filteredEvaluations = response.data.data.filter(evaluation => evaluation.project_id === parseInt(id));
        if (filteredEvaluations.length > 0) {
          setProjectEvaluation(filteredEvaluations[0]); // Assuming there's only one evaluation per project
          setEvaluations(filteredEvaluations);
        }
      } else {
        console.log('Unexpected response structure:', response.data); // Debugging statement
      }
    } catch (err) {
      console.log('Error fetching evaluations:', err);
    }
  };

  const proListURlAPI = `http://127.0.0.1:8000/employee/get_info_project/${id}`;
  async function get_project() {
    try {
      const response = await axios.get(proListURlAPI, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "multipart/form-data",
        }
      });
      console.log('Project info response:', response.data.data);
      setProject(response.data.data.user);
    } catch (err) {
      console.log('Error fetching project info:', err);
    }
  }

  useEffect(() => {
    get_project();
  }, [id]);

  useEffect(() => {
    fetchMidEvaluations();
  }, [id]);

  console.log('dataaa', project)
  return (
    <div className='w-[100%] min-h-screen h-fit bg-slate-200'>
      <div className='w-[100%] h-16'>
        <Navbar />
      </div>
      <div className='w-[100%] h-fit flex justify-center items-center flex-col' dir="rtl">
        <p className='w-[90%] text-3xl font-bold text-[#27374d] my-5'>الدراسة المرحلية</p>
        <div className='w-[90%] bg-[#9fb0c9] border-2 border-b-0 border-[#27374d] text-[#27374d] mt-16 flex justify-center items-center'>
          <p className="w-[25.05%] h-[100%] border-l-2 border-[#27374d] text-[#27374d] p-2">اسم المشروع</p>
          <div className='w-[74.95%]'>
            <input 
              type="text"
              className='w-[100%] h-[100%] p-2 outline-none bg-transparent' 
              name="projectName"
              value={project.name || ''}
              disabled
            />
          </div>
        </div>
        <table className="w-[90%] border-2 border-[#27374d] text-[#27374d] mb-10" border="2">
          <thead>
            <tr className='border-b-2 border-[#27374d]'>
              <td className='w-[25%] h-10 text-center border-l-2 border-[#27374d]'>أعضاء المشروع</td>
              <td className='w-[10%] h-10 text-center border-l-2 border-[#27374d] font-bold'></td>
              <td className='w-[10%] h-10 text-center border-l-2 border-[#27374d]'>العلامة</td>
              <td className='w-[55%] h-10 text-center border-l-2 border-[#27374d]'>ملاحظات</td>
            </tr>
          </thead>
          <tbody>
            {project ? project.map((evaluation, index) => (
              <tr key={index} className='border-b-2 border-[#27374d]'>
                <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'>{evaluation.name}</td>
                <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d] font-bold'>{evaluation.score || ''}</td>
                <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d]'>{evaluation.grade || ''}</td>
                <td className='w-[55%] h-14 text-center border-l-2 border-[#27374d]'>{evaluation.note || ''}</td>
              </tr>
            )) : ''}
            <tr className='border-b-2 border-[#27374d]'>
              <td className='w-[25%] h-10 text-center border-l-2 border-[#27374d]'>مكونات التقييم</td>
              <td className='w-[10%] h-10 text-center border-l-2 border-[#27374d] font-bold'></td>
              <td className='w-[10%] h-10 text-center border-l-2 border-[#27374d]'>العلامة</td>
              <td className='w-[55%] h-10 text-center border-l-2 border-[#27374d]'>ملاحظات</td>
            </tr>
            {projectData.map((project, index) => {
              let score = '';
              let note = '';
              if (projectEvaluation && projectEvaluation[project.key]) {
                try {
                  const parsedData = JSON.parse(projectEvaluation[project.key]);
                  console.log(`Parsed data for ${project.key}:`, parsedData); // Debugging statement
                  score = parsedData.score;
                  note = parsedData.note;
                } catch (e) {
                  console.log(`Error parsing JSON for ${project.key}:`, e);
                }
              }
              return (
                <tr key={index} className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'>{project.name}</td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d] font-bold'>{project.staticScore}</td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d]'>{score}</td>
                  <td className='w-[55%] h-14 text-center border-l-2 border-[#27374d]'>{note}</td>
                </tr>
              );
            })}
            <tr className='border-b-2 border-[#27374d]'>
              <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'>التقييم نهائي</td>
              <td className='h-14 text-center font-bold'></td>
              <td className='h-14 text-center font-bold'></td>
              <td className='h-14 text-center font-bold'></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Middle;

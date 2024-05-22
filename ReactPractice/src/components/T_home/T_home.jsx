import React from 'react';
import Fsidebar from '../Style/fsidebar';
import img2 from '../../assets/landing-page-template-social-media-marketing-trendy-flat-design-website-web-design-mobile-website-concept-team-work-business-vector-illustration_87744-1112.jpg';
import './T_home.css';
import Fcard from '../Fcard';
import { useNavigate } from 'react-router-dom';
import { Link ,useParams } from 'react-router-dom';
import axios from "axios";

import { useState } from 'react';
const T_home = () => {
  let navigate = useNavigate();
  let role = localStorage.getItem('role');
  const handleButton = () => {
    if (role === 'Student') {
      navigate('/finputuser');
    } else {
      navigate('/fadmin');
    }
  };

  const project = {
    id:'1',
    project_name: "project management system",
    students_names: ["Alice", "Bob", "Charlie", "David", "Eve"],
    supervisors_names: ["Dr. Smith", "Prof. Johnson", "Dr. Lee"],
  };

  const colors = { 
    color_follow: 'أحمر',
    color_evaluate: 'برتقالي',
    color_finalEvaluate: 'أخضر'
  };
  
  const style = (color) => {
    return {
      color: color === 'أحمر' ? 'red'  : color === 'برتقالي' ? 'orange' : 'green'
    };
  };

  return (
    <div>
      <div className="container01">
        <Fsidebar />
        <div className="header50">
          <h2 style={{textAlign:'center', color:'rgb(7, 139, 139)', fontSize:'26px'}}>مرحبًا بك</h2>
          <h2 className="title"> {project.project_name}</h2>
          <div className="line"></div>
          <div className="project">
            <div className="names_container">
              <div className="students_name">
                <h4>أسماء الطلاب:</h4>
                <ul>
                  {project.students_names.map((student, studentIndex) => (
                    <li key={studentIndex}>{student}</li>
                  ))}
                </ul>
              </div>
              <div className="students_name">
                <h4>أسماء المشرفين:</h4>
                <ul>
                  {project.supervisors_names.map((supervisor, supervisorIndex) => (
                    <li key={supervisorIndex}>{supervisor}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="buttons_container">
             <Link to={`/Project_Follow_up/${project.id}`} className="project_button">
            <button>متابعة المشروع</button>
              </Link> 
              <Link to={`/evaluate/${project.id}`} className="project_button">
                <button>الدراسة المرحلية</button>
              </Link>
              <Link to={`/finalevaluate/${project.id}`} className="project_button">
                <button>الدراسة النهائية</button>
              </Link>
              <Link to={`/proposal/${project.id}`} className="project_button">
                <button>المقترح</button>
              </Link>
            </div>
          </div>
          <div className='part-follow'>
            <div className='part1-follow' >
              <h5>متابعة تقدم المشروع:</h5>
              <span  style={style(colors.color_follow)}>{colors.color_follow}</span>
            </div>
            <div className='part1-follow'>
              <h5>الدراسة المرحلية :</h5>
              <span style={style(colors.color_evaluate)}>{colors.color_evaluate}</span>
            </div>
            <div className='part1-follow' >
              <h5>الدراسة النهائية:</h5>
              <span style={style(colors.color_finalEvaluate)}>{colors.color_finalEvaluate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default T_home;

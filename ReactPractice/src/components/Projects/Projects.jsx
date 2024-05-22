import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import Fsidebar from "../Style/fsidebar";

const Projects = () => {
  const projects = [
    {
      id: 1,
      project_name: "Project A",
      students_names: ["Alice", "Bob", "Charlie", "David", "Eve"],
      supervisors_names: ["Dr. Smith", "Prof. Johnson", "Dr. Lee"],
    },
    {
      id: 2,
      project_name: "Project B",
      students_names: ["Frank", "Grace", "Hannah", "Ian", "Jenny"],
      supervisors_names: ["Prof. Brown", "Dr. White", "Prof. Martinez"],
    },
    {
      id:3,
      project_name: "Project C",
      students_names: ["Kevin", "Linda", "Michael", "Nancy", "Olivia"],
      supervisors_names: ["Dr. Garcia", "Prof. Taylor", "Dr. Nguyen"],
    },
  ];

  return (
    <div>
      <div className="container01">
        <Fsidebar />
        {projects.map((project) => (
          <div className="header50">
            <h2 className="title"> {project.project_name}</h2>
            <div className="line"></div>
            <div className="project">
              <div className="names_container">
                <div className="students_name">
                  <h4>أسماء الطلاب:</h4>
                  <ul>
                    {project.students_names.map((student) => (
                      <li key={student}>{student}</li>
                    ))}
                  </ul>
                </div>
                <div className="students_name">
                  <h4>أسماء المشرفين:</h4>
                  <ul>
                    {project.supervisors_names.map((supervisors) => (
                      <li key={supervisors}>{supervisors}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="buttons_container">
                <Link to={`/Project_Follow_up/${project.id}`} className="project_button">
                  <button>
                    {/* <BiTask className='icon-f'/> */}
                    متابعة المشروع
                  </button>
                </Link>
              <Link to={`/evaluate/${project.id}`} className="project_button">
                  <button>
                    {/* <BiTask className='icon-f'/> */}
                    الدراسة المرحلية
                  </button>
                </Link>
                <Link to={`/finalevaluate/${project.id}`}  className="project_button">
                  <button>
                    {/* <BiTask className='icon-f'/> */}
                    الدراسة النهائية
                  </button>
                </Link>
                <Link to={`/proposal/${project.id}`} className="project_button">
                  <button>
                    {/* <BiTask className='icon-f'/> */}
                    المقترح
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import "./Proposal.css";
import { Link , useParams} from "react-router-dom";
import { useState } from "react";
import Fsidebar from "../Style/fsidebar";
import { RiFileEditFill } from "react-icons/ri";
import img_6 from "../../assets/Event-Proposal-Template.png";
import img2 from "../../assets/image/OIP (2).jpg";
import Table_pr from "./Table_pr";
import Decision from "./Decision";
import axios from "axios";

const Proposal = ({students ,committeeDecision}) => {  
  const { id } = useParams();
  console.log('dd',id)
  const project =[
    {
      "projectName": "مشروع 1",
      "projectDescription": "وصف المشروع 1",
      "students": ["طالب 1", "طالب 2", "طالب 3", "طالب 4", "طالب 5"],
      "supervisors": ["مشرف 1", "مشرف 2", "مشرف 3"],
      "specialization":['هندسة برمحيات','ذكاء صنعي','شبكات'],
      "semester": "الأول"
    },
    // {
    //   "projectName": "مشروع 2",
    //   "projectDescription": "وصف المشروع 2",

    //   "students": ["طالب 1", "طالب 2", "طالب 3", "طالب 4", "طالب 5"],
    //   "supervisors": ["مشرف 1", "مشرف 2", "مشرف 3"],
    //   "semester": "الثاني"
    // },
    // {
    //   "projectName": "مشروع 3",
    //   "projectDescription": "وصف المشروع 3",
    //   "students": ["طالب 1", "طالب 2", "طالب 3", "طالب 4", "طالب 5"],
    //   "supervisors": ["مشرف 1", "مشرف 2", "مشرف 3"],
    //   "semester": "الأول"
    // },
    // {
    //   "projectName": "مشروع 4",
    //   "projectDescription": "وصف المشروع 4",
    //   "students": ["طالب 1", "طالب 2", "طالب 3", "طالب 4", "طالب 5"],
    //   "supervisors": ["مشرف 1", "مشرف 2", "مشرف 3"],
    //   "semester": "الثاني"
    // },
    // {
    //   "projectName": "مشروع 5",
    //   "projectDescription": "وصف المشروع 5",
    //   "students": ["طالب 1", "طالب 2", "طالب 3", "طالب 4", "طالب 5"],
    //   "supervisors": ["مشرف 1", "مشرف 2", "مشرف 3"],
    //   "semester": "الأول"
    // }
  ]
  // const [year, setYear] = useState('');
  const [dragging, setDragging] = useState(false);
  const [size, setSize] = useState(false);
  const [type, setType] = useState(false);
  const [formData, setFormData] = useState({
    projectName: project[0].projectName,
    problem: "",
    domain: "",
    literature: "",
    literatureS: "",
    mainMap: "",
    main_map: null,
    mind_map: null,
    experts: "",
    users: "",
    stakeholders: "",
    experts_S: "",
    users_S: "",
    stakeholders_S: "",
    pro_solution: "",
    fun_requirements: "",
    fun_Nrequirements: "",
    methodology: "",
    meetings: "",
    communication: "",
    project_Leader: "",
    fileSharing: "",
    platform: "",
    tools: "",
    languages: "",
    database: "",
    packages: "",
  });
console.log('dfdff', formData.projectName);
  const [supervisors, setSupervisors] = useState([
    { id: 1, supervisor: project[0].supervisors[0], specialization:project[0].specialization[0] },
    { id: 2, supervisor: project[0].supervisors[1],  specialization:project[0].specialization[1]},
    { id: 3, supervisor: project[0].supervisors[2], specialization: project[0].specialization[2]},
  ]);
  console.log('dvdvdsv',supervisors)
  const [supervisorInput, setSupervisorInput] = useState([]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Date:', date);
  // }

  const handleSelectChange = (e, index) => {
    const selectedData = supervisors.find(
      (supervisor) => supervisor.supervisor === e.target.value
    );
    if (selectedData) {
      const updatedSupervisorInput = [...supervisorInput];
      updatedSupervisorInput[index] = selectedData;
      setSupervisorInput(updatedSupervisorInput);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // إذا كان الحقل ملف، استخدم القيمة الملفية، وإلا استخدم القيمة النصية
    }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const name = e.target.id;
    const droppedFile = e.dataTransfer.files[0]; // Only consider the first dropped file
    if (droppedFile) {
      if (droppedFile.size > 2 * 1024 * 1024) {
        setSize(true);
      }
      if (!droppedFile.type.startsWith("image/")) {
        setType(true);
      }
      if (
        droppedFile.size <= 2 * 1024 * 1024 &&
        droppedFile.type.startsWith("image/")
      ) {
        setSize(false);
        setType(false);
        setFormData((prevState) => ({
          ...prevState,
          [name]: droppedFile, // If it's an image and within size limit, store it in formData
        }));
      }
    }
  };

  const handleFileInputChange = (e) => {
    const { name, files } = e.target;
    console.log("dd", files[0].size);
    if (files[0] && files[0].size <= 2 * 1024 * 1024) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    }
  };

  const handleRemoveImage = (fileKey) => {
    setFormData((prevState) => {
      // Create a copy of the formData object
      const updatedFormData = { ...prevState };
      // Remove the file associated with the specified key
      delete updatedFormData[fileKey];
      // Return the updated formData object
      return updatedFormData;
    });
  };

  console.log("data", supervisorInput);
 
  return (
    <div>
      <div className="container01">
        <Fsidebar />
        <div className="header5">
          <div>
            <div className="magd11">
          <h2 className="style-h2">
            <RiFileEditFill /> مقترح الطالب
          </h2>
          <div className="magd">
            <label className='style-span'>حالة المقترح:</label>
            <span className="style-span">قيد العمل </span>  
            
          </div>
          </div>
          <div className="line10"></div>

          </div>
          <div className="start">
            <div>
              <h3 className="style-h3">الجمهورية العربية السورية</h3>
              <h3 className="style-h3">جامعة الشام الخاصة</h3>
              <h3 className="style-h3">كلية الهندسة المعلوماتية</h3>
            </div>
            <div className="img-contanier">
              <img src={img2} className="img-aspu" alt="" />
            </div>
          </div>
          <div className="body09">
            <h4 className="style-h4">
              يمكن لهذا المقترح أن يمكّن الطلاب من التعبير بشكل كامل عن أفكار
              مشاريعهم، بما في ذلك تفصيل جميع جوانب المشروع المقترح والمشكلة
              التي يهدفون إلى حلها أو معالجتها.
            </h4>
            <img className="img-g" src={img_6} alt="" />
          </div>
          <Table_pr
            formData={formData}
            handleChange={handleChange}
            handleDrop={handleDrop}
            handleFileInputChange={handleFileInputChange}
            handleRemoveImage={handleRemoveImage}
            dragging={dragging}
            setDragging={setDragging}
            size={size}
            type={type}
            handleSelectChange={handleSelectChange}
            supervisors={supervisors}
            supervisorInput={supervisorInput}
            project={project}
            students={students}
            committeeDecision={committeeDecision}
          />
        </div>
      </div>
    </div>
  );
};

export default Proposal;

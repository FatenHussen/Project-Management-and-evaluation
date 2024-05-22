import React, { useState, useEffect } from 'react';
import './Table_Project_up.css';
import axios from 'axios';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
const Table_Project_follow_up = () => {
 
  const history1 =[
    {
      "data": "2024-05-21"
    },
  {
    "data": "05-07-2024"
  },
    {
      "data": "28-11-2023"
    },
    {
      "data": "28-12-2023"
    },

  ]
  const [history, setHistory] = useState(history1);
  const handelmeeting = (e, index) => {
    const selectedDate = e.target.value;
    const selectedHistory = history1.find(item => item.data === selectedDate );
    if (selectedHistory) {
      const localFormData = getLocalFormDataForDate(selectedDate); 
      setForData(localFormData);
      setHistory(selectedDate);
      
    }
  };
  console.log('sccd',history)
  const [projectTitle, setProjectTitle] = useState('');
  const [date, setDate] = useState([new Date().toISOString().slice(0, 10)]);
  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setDate([...date, newDate]); 
  };
  
  const projects=[
    {id:'1',
     title:'project mangment system',
     name:['fdfd','dfdf','dfdfdf','dfdfd','dfdfdf']
    }
  ]
  const [attendanceData, setAttendanceData] = useState([
    'Testing', 'Code', 'Design', 'Presentation', 'Report', 'Github',' reference_study','analytical_study','results'
  ]);
    const [committeeDecision, setCommitteeDecision] = useState('');
  const [committeeDecision1, setCommitteeDecision1] = useState('');
  const [formdata,setForData]=useState([
    {name: '',attendance:'غياب' ,testing: '' ,code:'',design:'',presentation:'',report:'',github:'', reference_study:'',analytical_study:'',results:''},
    {name: '',attendance:'غياب' ,testing: '' ,code:'',design:'',presentation:'',report:'',github:'', reference_study:'',analytical_study:'',results:''},
    {name: '' ,attendance:'غياب',testing: '' ,code:'',design:'',presentation:'',report:'',github:'', reference_study:'',analytical_study:'',results:''},
    {name: '' ,attendance:'غياب',testing: '' ,code:'',design:'',presentation:'',report:'',github:'', reference_study:'',analytical_study:'',results:''},
    {name: '',attendance:'غياب' ,testing: '' ,code:'',design:'',presentation:'',report:'',github:'', reference_study:'',analytical_study:'',results:''}
  ]);
  console.log('magdkouli',formdata);
  const [selectedProject, setSelectedProject] = useState('');
  
  const [students, setStudents] = useState([]);
  const[evaluate,setEvaluate]=useState('');
  const handleAttendanceChange = (index) => {
    const updatedFormData = [...formdata];
    updatedFormData[index].attendance = updatedFormData[index].attendance === 'حضور' ? 'غياب' : 'حضور';
    setForData(updatedFormData);
  };
  
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://example.com/api/evaluate');
        setEvaluate(response.data); 
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchData();
  }, []); 

  useEffect(() => {
    axios.get('http://localhost:8000/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  const handleProjectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedProject(selectedValue);

    axios.get(`http://localhost:8000/api/students?project=${selectedValue}`)
      .then(response => {
        setName(response.data);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  };
  const handleSignChange = (e, rowIndex, field) => {
    let inputValue = e.target.value;
    const intValue = parseInt(inputValue);
  
    if (isNaN(intValue) || intValue < 0) {
      inputValue = ''; 
    }else if( intValue > 100){
      inputValue = '100'; 
    }
  
    const newSign = [...formdata];
    newSign[rowIndex][field] = inputValue;
    setForData(newSign);
    console.log("", newSign);
  };

  // const getLocalFormDataForDate = (selectedDate) => {
  //   const randomFormData = [
  //     {name: 'John', testing: '90', code:'80', design:'75', presentation:'85', report:'95', github:'70', reference_study:'85', analytical_study:'90', results:'92'},
  //     {name: 'Alice', testing: '85', code:'90', design:'80', presentation:'75', report:'85', github:'80', reference_study:'92', analytical_study:'85', results:'88'},
  //     {name: 'Bob', testing: '75', code:'80', design:'90', presentation:'85', report:'80', github:'90', reference_study:'80', analytical_study:'75', results:'82'},
  //     {name: 'Carol', testing: '80', code:'85', design:'85', presentation:'90', report:'75', github:'85', reference_study:'88', analytical_study:'80', results:'90'},
  //     {name: 'David', testing: '85', code:'75', design:'80', presentation:'75', report:'85', github:'70', reference_study:'90', analytical_study:'85', results:'88'}
  //   ];
  //     [
  //       {name: 'magd', testing: '90', code:'80', design:'75', presentation:'85', report:'95', github:'70', reference_study:'85', analytical_study:'90', results:'92'},
  //       {name: 'Alice', testing: '85', code:'90', design:'80', presentation:'75', report:'85', github:'80', reference_study:'92', analytical_study:'85', results:'88'},
  //       {name: 'Bob', testing: '75', code:'80', design:'90', presentation:'85', report:'80', github:'90', reference_study:'80', analytical_study:'75', results:'82'},
  //       {name: 'Carol', testing: '80', code:'85', design:'85', presentation:'90', report:'75', github:'85', reference_study:'88', analytical_study:'80', results:'90'},
  //       {name: 'David', testing: '85', code:'75', design:'80', presentation:'75', report:'85', github:'70', reference_study:'90', analytical_study:'85', results:'88'}
  //     ];
    
  //   return randomFormData;
  // };
  const getLocalFormDataForDate = (selectedDate) => {
    const formDataByDate = {
      [date]: [
        { name: 'John',attendance:'غياب', testing: '90', code: '80', design: '75', presentation: '85', report: '95', github: '70', reference_study: '85', analytical_study: '90', results: '92' },
        { name: 'Alice',attendance:'حضور', testing: '85', code: '90', design: '80', presentation: '75', report: '85', github: '80', reference_study: '92', analytical_study: '85', results: '88' },
        { name: 'Bob',attendance:'غياب', testing: '75', code: '80', design: '90', presentation: '85', report: '80', github: '90', reference_study: '80', analytical_study: '75', results: '82' },
        { name: 'Carol',attendance:'حضور', testing: '80', code: '85', design: '85', presentation: '90', report: '75', github: '85', reference_study: '88', analytical_study: '80', results: '90' },
        { name: 'David',attendance:'غياب',testing: '85', code: '75', design: '80', presentation: '75', report: '85', github: '70', reference_study: '90', analytical_study: '85', results: '88' }
      ],
    };
  
    return formDataByDate[selectedDate] || []; 
  };
    console.log('scs',getLocalFormDataForDate);
  // const handelmeeting=(e,index) =>{
  //   const inputValue=e.target.value;
  //   const newData=[...history];
  //   newData[index]={...newData[index], data:inputValue};
  //   setHistory(newData);
  // }
  // const handelmeeting = (e, index) => {
  //   // يتم استخدام e.target.value للحصول على التاريخ المحدد من الحدث
  //   const selectedDate = e.target.value;
  
  //   // يتم البحث في مصفوفة history1 للعثور على العنصر الذي يتطابق مع التاريخ المحدد
  //   const selectedHistory = history1.find(item => item.data === selectedDate);
  
  //   // إذا تم العثور على تاريخ مطابق في history1
  //   if (selectedHistory) {
  //     // يتم إرسال طلب GET إلى الخادم لجلب بيانات الحضور للتاريخ المحدد
  //     axios.get(`http://localhost:8000/api/attendance?date=${selectedDate}`)
  //       .then(response => {
  //         // يتم تحديث بيانات الحضور بالبيانات المسترجعة من الطلب
  //         setAttendanceData(response.data);
  //       })
  //       .catch(error => {
  //         // في حالة حدوث أي خطأ أثناء جلب بيانات الحضور
  //         console.error('Error fetching attendance:', error);
  //       });
  //   }
  // };
  const handleInputName = (e, taskIndex) => {
    const inputValue = e.target.value;
    const newData = [...formdata];
    newData[taskIndex] = { ...newData[taskIndex], name: inputValue };
    setForData(newData);
    localStorage.setItem('name', JSON.stringify(newData));
  };

  const handleTitleChange = (event) => {
    const { value } = event.target;
    setProjectTitle(value);
  };


  const handleCommitteeDecisionChange = (event) => {
    setCommitteeDecision(event.target.value);
  };

  const handleCommitteeDecisionChange2 = (event) => {
    setCommitteeDecision1(event.target.value);
  };
  const declarePresence = (taskIndex) => {
    const newData = [...formdata];
    newData[taskIndex] = { ...newData[taskIndex], present: true };
    setForData(newData);
  };
  const [isSaved, setIsSaved] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const project_follow = 'http://localhost:8000/api/';
  async function ProjectEv() {
    try {
      setLoading(true);
      const response = await axios.post(project_follow, {
        t:projectTitle,
       d: date,
        c:committeeDecision,
        c1:committeeDecision1,
        name:formdata.name,
        testing:formdata.testing,
        code:formdata.design,
        presentation: formdata.presentation,
        report:formdata.report,
        github:formdata.github,
        reference_study:formdata.reference_study,
        analytical_study:formdata.analytical_study,
        results:formdata.results,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); 
    }
  }
  const project_follow_save = 'http://localhost:8000/api/';
  const handleSave = async () => {
    try {
      const responseSave = await axios.post(project_follow_save,{
        t:projectTitle,
        d: date,
         c:committeeDecision,
         c1:committeeDecision1,
         name:formdata.name,
         testing:formdata.testing,
         code:formdata.design,
         presentation: formdata.presentation,
         report:formdata.report,
         github:formdata.github,
         reference_study:formdata.reference_study,
         analytical_study:formdata.analytical_study,
         results:formdata.results,
      }
       );
      console.log("تم حفظ البيانات بنجاح:", responseSave.data);

      setIsSaved(true);
    } catch (error) {
      console.error("حدث خطأ أثناء الحفظ:", error);
    }
  
  };
  console.log('attmendsd', formdata);
    return (
    <div className='cont'>
      <div className=' table-container'>
      <table className="my-table" border="" >
        <thead>
          <tr>
            <th style={{width:'10%'}}>
            <select style={{ width: '100%' }} onChange={(e) => handelmeeting(e, 0)}>
                <option></option>
                {history1.map((history, index) => (
                  <option key={index}>{history.data}</option>
                ))}
              </select>
            </th>
            <th>
  <input
    type="date"
    value={date[date.length - 1]} 
    onChange={handleDateChange}
  />
</th>
            <th>العنوان:</th>
            <th colSpan='8'>
            <select value={selectedProject} onChange={handleProjectChange}>
        <option value="">اختر عنوان المشروع</option>
        {projects.map(project => (  
          <option key={project.id} value={project.id}>{project.title}</option>
        ))}
      </select>
            </th>
          </tr>
          
          <tr>
          <td>الحضور</td>
            {attendanceData.map((task, index) => (
              <td key={index}>{task}</td>
            ))}
          </tr>
        </thead>
        <tbody>
        {formdata.map((row, index) =>(
          <tr key={index}>
            <td>{row.name}
            <input
            type="checkbox"
            checked={row.attendance === 'حضور'}
            onChange={() => handleAttendanceChange(index)}
            className='click'
            disabled
          />

            </td>
            <td>
             <input
             type="number"
             value={row.testing}
             onChange={(e) => handleSignChange(e, index, 'testing')}
              />
             </td>
             
            <td><input
                    type="number"
                    value={row.code}
                    onChange={(e) => handleSignChange(e, index, 'code')}
                  /></td>
            <td><input
                    type="number"
                    value={row.design}
                    onChange={(e) => handleSignChange(e, index, 'design')}
                  /></td>
                  
            <td><input
                    type="number"
                    value={row.presentation}
                    onChange={(e) => handleSignChange(e, index, 'presentation')}
                  /></td>
            <td><input
                    type="number"
                    value={row.report}
                    onChange={(e) => handleSignChange(e, index, 'report')}
                  /></td>
                   <td><input
                    type="number"
                    value={row.github}
                    onChange={(e) => handleSignChange(e, index, 'github')}
                  /></td>
                  <td><input
                    type="number"
                    value={row.reference_study}
                    onChange={(e) => handleSignChange(e, index, 'reference_study')}
                  /></td>
                   <td><input
                    type="number"
                    value={row.analytical_study}
                    onChange={(e) => handleSignChange(e, index, 'analytical_study')}
                  /></td>
                   <td><input
                    type="number"
                    value={row.results}
                    onChange={(e) => handleSignChange(e, index, 'results')}
                  /></td>
                  
          </tr>
        ))}
          <tr>
            <td>المجموع:</td>
            <td colSpan='9'></td>
          </tr>
          <tr>
            <td>التقيم:</td>
            <td colSpan='9'>{evaluate}</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className='end'>
        <label htmlFor="committeeDecision">الملاحظات:</label>
        <textarea
          id="committeeDecision"
          className="committee-decision"
          value={committeeDecision}
          onChange={handleCommitteeDecisionChange}
          rows="5"
          cols="50"
        />
        <label htmlFor="committeeDecision1">المهام:</label>
        <textarea
          id="committeeDecision1"
          className="committee-decision"
          value={committeeDecision1}
          onChange={handleCommitteeDecisionChange2}
          rows="5"
          cols="50"
        />
        <div className="button2">
            <div className="style-button">
          <button type="button"  onClick={handleSave}>
            حفظ
          </button>
          <h5>في حال الضغط على زر الحفظ يمكن ارجاء تعديل بعد الضعط</h5>
          </div>
          <div className="style-button">
          <button style={{backgroundColor:'rgb(125,  125, 125)'}}onClick={()=>ProjectEv() }disabled={loading}>
                {loading ? <div className="spinner" /> : 'ارسال'}</button>
          <h5>في حال الضعط على زر الارسال لا يمكن تعديل بعد الضغط</h5>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Table_Project_follow_up;

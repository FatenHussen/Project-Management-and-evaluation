import React, { useEffect, useState } from 'react';
import axios from 'axios'; // استيراد مكتبة axios
import './Table.css';

const Table_ev = () => {
  const currentYear = new Date().getFullYear(); // السنة الحالية
  const futureYears = [currentYear, currentYear + 1, currentYear + 2]
  const [formData, setFormData] = useState({
    date:  new Date().toISOString().slice(0, 10),
    semester: '',
    year: currentYear.toString(),
    rating: ''
  });
  console.log('dddd',formData.semester);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // جلب قائمة العناوين من الـ API
    axios.get('http://localhost:8000/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);
  const [selectedProject, setSelectedProject] = useState('');
  const [projects, setProjects] = useState([]);
  const [students, setStudents] = useState([]);

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
  const [members, setMembers] = useState([
    { name: '', score: 100, note: '', score1: '' },
    { name: '', score: 100, note: '', score1: '' },
    { name: '', score: 100, note: '', score1: '' },
    { name: '', score: 100, note: '', score1: '' },
    { name: '', score: 100, note: '', score1: '' }
  ]);
  const [members2, setMembers2] = useState([
    { name: 'فكرة المشروع', score: 8, score2: '', note3: '' },
    { name: 'دراسة الإشارة', score: 8, score2: '', note3: '' },
    { name: 'دراسة تحليلية', score: 8, score2: '', note3: '' }
  ]);
  const [members3, setMembers3] = useState([
    { name: 'التصميم', score: 10, score4: '', note4: '' },
    { name: 'البرمجة', score: 10, score4: '', note4: '' },
  ])
  const [members4, setMembers4] = useState([
    { name: 'الإدارة', score: 8, score5: '', note5: '' },
    { name: 'Git Hub', score: 8, score5: '', note5: '' },
    { name: 'النتائج/التحليل', score: 8, score5: '', note5: '' },
    { name: 'القيمة المضافة', score: 8, score5: '', note5: '' },
    { name: 'التقدير', score: 8, score5: '', note5: '' },
    { name: 'العرض', score: 8, score5: '', note5: '' }
  ])
  const [projectData, setProjectData] = useState([
    { name: 'فكرة المشروع', score: 8 },
    { name: 'دراسة الإشارة', score: 8 },
    { name: 'دراسة تحليلية', score: 8 },
    { name: 'التصميم', score: 10 },
    { name: 'البرمجة', score: 10 },
    { name: 'الإدارة', score: 8 },
    { name: 'Git Hub', score: 8 },
    { name: 'الخيارات', score: 8 },
    { name: 'النتائج/التحليل', score: 8 },
    { name: 'القيمة المضافة', score: 8 },
    { name: 'التقدير', score: 8 },
    { name: 'العرض', score: 8 },
  ]);
  const [sum ,setSum]=useState('');

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    console.log('name:', name);
    console.log('value:', value);

    if (name === 'name' || name === 'score' || name === 'score1') {
      const updatedMembers = [...members];
      updatedMembers[index][name] = value;
      if ((name === 'score' || name === 'score1') && (value < 0 || value > 100)) {
        return;
      }
      setMembers(updatedMembers);
    } else if (name === 'note') {
      const updatedMembers = [...members];
      updatedMembers[index][name] = value;
      setMembers(updatedMembers);
    } else if (name === 'score2') {
      const updatedMembers = [...members2];
      const newValue = parseInt(value);
      if (newValue >= 0 && newValue <= 8) {
        updatedMembers[index][name] = newValue;
        setMembers2(updatedMembers);
      }
    } else if (name === 'note3') {
      const updatedMembers = [...members2];
      updatedMembers[index][name] = value;
      setMembers2(updatedMembers);
    } else if (name === 'score4') {
      const updatadMemebers = [...members3];
      const newValue = parseInt(value);
      if (!isNaN(newValue) && newValue >= 0 && newValue <= 10) {
        updatadMemebers[index][name] = newValue;
        setMembers3(updatadMemebers);
      }
    } else if (name === 'note4') {
      const updatadMemebers = [...members3];
      updatadMemebers[index][name] = value;
      setMembers3(updatadMemebers);
    } else if (name === 'score5') {
      const updatedMembers = [...members4];
      const newValue = parseInt(value);
      if (!isNaN(newValue) && newValue >= 0 && newValue <= 8) {
        updatedMembers[index][name] = newValue;
        setMembers4(updatedMembers);
      }
    } else if (name === 'note5') {
      const updatadMemebers = [...members4];
      updatadMemebers[index][name] = value;
      setMembers4(updatadMemebers);
    }

  };
  console.log('ss', members);
  console.log('tt', members2);
  console.log('', members3);
  console.log('', members4);

  const evaluateUrl = 'http://localhost:8000/api/'
  async function evauate1() {
    setLoading(true);
    try {
      const response = await axios.post(evaluateUrl, {
        formData: formData,
        members: members,
        members2: members2,
        members3: members3,
        members4: members4
      })
      .then(response => {
        console.log('تم إرسال البيانات بنجاح:', response.data);
      })
      .catch(error => {
        console.error('حدث خطأ أثناء إرسال البيانات:', error);
      });
    } catch (err) {
      console.log(err);
    }finally {
      setLoading(false); 
    }
  }
  const fetchRatingFromBackend = async () => {
    try {
      const response = await axios.get('API endpoint for rating');
      setFormData(prevState => ({
        ...prevState,
        rating: response.data.rating
      }));
    } catch (error) {
      console.error('Error fetching rating:', error);
    }
  };
  useEffect(() => {
    fetchRatingFromBackend();
  }, []);
  
  return (
    <div>
      <div className='form-ff'>
        <label>
          التاريخ:
          <input
            type="date"
            value={formData.date}
            onChange={(event) => setFormData(prevState => ({
              ...prevState,
              date: event.target.value
            }))}
          />
        </label>
        <br />
        <label>
          الفصل:
          <select value={formData.semester} onChange={(event) => setFormData(prevState => ({
            ...prevState,
            semester: event.target.value
          }))}>
            <option value="الأول">الأول</option>
            <option value="الثاني">الثاني</option>
            <option value="الصيفي">الصيفي</option>
          </select>
        </label>
        <br />
        <label>
          السنة:
          <select value={formData.year} onChange={(event) => setFormData(prevState => ({
            ...prevState,
            year: event.target.value
          }))}>
            {futureYears.map((year, index) => (
              <option key={index} value={year}>{year}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          العلامة:
          <input
            type="number"
            value={formData.rating}
            onChange={(event) => {
              const value = parseInt(event.target.value);
              if (!isNaN(value) && value >= 0 && value <= 100) {
                setFormData(prevState => ({
                  ...prevState,
                  rating: value
                }));
              }
            }}
            min="0"
            max="100"
          />
        </label>
        <br />
      </div>
      <div className=' table-container'>
      <table className="my-table" border="">
        <thead>
          <tr>
            <th colSpan='1'>عنوان المشروع</th>
            <th colSpan='5'>
            <select value={selectedProject} onChange={handleProjectChange}>
        <option value="">اختر عنوان المشروع</option>
        {projects.map(project => (
          <option key={project.id} value={project.id}>{project.title}</option>
        ))}
      </select>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='ttt'>أعضاء المشروع</td>
            <td className='vvv'></td>
            <td className='vvv'>العلامة</td>
            <td>ملاحظات</td>
          </tr>
          {members.map((member, index) => (
            <tr key={index}>
               <td>{member.name}</td>
              {/* <td>
                <input
                  type="text"
                  name="name"
                  placeholder="الاسم"
                  value={member.name}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td> */}
              <td>
                {member.score}
              </td>
              <td><input
                type="number"
                name="score1"
                value={member.score1}
                onChange={(event) => handleInputChange(index, event)}
              /></td>
              <td>
                <textarea
                  name="note"
                  value={member.note}
                  onChange={(event) => handleInputChange(index, event)}
                  rows="1" // عدد الأسطر المعروضة
                  cols="50" // عدد الأحرف في كل سطر
                />
              </td>
            </tr>
          ))}
          <tr>
            <td>مكونات التقييم</td>
            <td></td>
            <td>العلامة</td>
            <td>ملاحظات</td>
          </tr>
          {members2.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.score}</td>
              <td>
                <input
                  type="number"
                  name="score2"
                  value={item.score2}
                  min="0"
                  max={item.score}
                  onChange={(event) => handleInputChange(index, event)}
                /></td>
              <td>
                <textarea
                  name={`note3`}
                  value={item.note3}
                  onChange={(event) => handleInputChange(index, event)}
                  rows="1" // عدد الأسطر المعروضة
                  cols="50" // عدد الأحرف في كل سطر
                />
              </td>
            </tr>
          ))}
          {members3.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.score}</td>
              <td>
                <input
                  type="number"
                  name="score4"
                  value={item.score4}
                  min="0"
                  max={item.score}
                  onChange={(event) => handleInputChange(index, event)}
                /></td>
              <td>
                <textarea
                  name={`note4`}
                  value={item.note4}
                  onChange={(event) => handleInputChange(index, event)}
                  rows="1"
                  cols="50"
                />
              </td>
            </tr>
          ))}
          {members4.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.score}</td>
              <td>
                <input
                  type="number"
                  name="score5"
                  value={item.score5}
                  min="0"
                  max={item.score}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <textarea
                  name='note5'
                  value={item.note5}
                  onChange={(event) => handleInputChange(index, event)}
                  rows="1"
                  cols="50"
                />
              </td>
            </tr>
          ))}
          <tr></tr>
          <tr>
            <td>التقيم نهائي </td>
            <td colSpan='4'></td>
          </tr>
        </tbody>
      </table>
      </div>
      <button style={{backgroundColor:'rgb(125,  125, 125)'}}onClick={()=>evauate1() }disabled={loading}>
                {loading ? <div className="spinner" /> : 'ارسال'}</button>
    </div>
  );
};

export default Table_ev;

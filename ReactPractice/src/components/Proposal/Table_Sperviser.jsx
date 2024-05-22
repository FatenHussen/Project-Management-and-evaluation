import React, { useState, useEffect } from 'react';
import axios from 'axios'; // استيراد مكتبة Axios

const Table_Sperviser = ({handleSelectChange, supervisors, supervisorInput,project}) => {
  // const [search,setSearch] = useState('')
  
  
  // const filteredData = supervisors.filter((item) => {
  //   return item.supervisor.toLowerCase().includes(search.toLowerCase());
  // });
  // console.log('pp',filteredData)

  // const handleSupervisorChange = (event, id) => {
  //   const updatedSupervisors = supervisors.map(s => {
  //     if (s.id === id) {
  //       return { ...s, supervisor: event.target.value };
  //     }
  //     return s;
  //   });
  //   setSupervisors(updatedSupervisors);
  // };

  // const handleSpecializationChange = (event, id) => {
  //   const updatedSupervisors = supervisors.map(s => {
  //     if (s.id === id) {
  //       return { ...s, specialization: event.target.value };
  //     }
  //     return s;
  //   });
  //   setSupervisors(updatedSupervisors);
  // };

  // const handleSaveData = () => {
  //   try {
  //     // تحويل قائمة المشرفين إلى سلسلة نصية وحفظها في localStorage
  //     localStorage.setItem('supervisors', JSON.stringify(supervisors));
  //     console.log("تم حفظ البيانات في localStorage");
  //   } catch (error) {
  //     console.error('حدث خطأ أثناء حفظ البيانات في localStorage:', error);
  //   }
  // };

  const handleSendData = async () => {
    try {
      const response = await axios.post('عنوان-الخادم-هنا', supervisors);
      console.log('تم إرسال البيانات بنجاح:', response.data);
    } catch (error) {
      console.error('حدث خطأ أثناء إرسال البيانات:', error);
    }
  };

  // console.log('oo' , supervisorInput[0].specialization)
  console.log('tt',project[0].supervisors)
  console.log('magd',project[0].specialization)
  return (
    <div className='superviser'>
      <table className="my-table" border="">
        <thead>
          <tr>
            <th className='tr'>أسم المشرف:</th>
            <th>الاختصاص</th>
          </tr>
        </thead>
        <tbody>
        {supervisors.map((supervise, index) => {
            return (
              <tr key={index}>
                <td>
                  <input
                    type='text'
                    value={project[0].supervisors[index]}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={project[0].specialization[index]}
                  />
                </td>
              </tr>
               );
              })}
               {/* <tr>
              <td>
              <select className='selector' onChange={(e) => handleSelectChange(e, 0)}>
                  <option value=''></option>
                  {supervisors.map((supervisor) => (
          // <EmployeeCard key={employee.id} photo={employee.image} handleSubmits1={get_employees_dismissed} id={employee.id} name={employee.name} job={employee.type == 3 ? 'HR' : employee.position} phone={employee.mobile} mail={employee.email} department={employee.type == 3 ? 'HR' : employee.departement} joinDate={employee.start_job_contract} active={employee.status} handleSubmits={get_employees_list} martial={martial_status} nationality={nationality} handleChange={handleInputChange} handleImage={handleImageChange} onChange={InputChange} handleTime={handleTime} employee={data} shifts={shifts} update={updateEmployee} setSelectedEmployee={setSelectedEmployee} selectedEmployee={selectedEmployee} loader={addLoader} setAddLoader={setAddLoader} warn={setWarning1} warning={warning1}/>
                  // <option value={supervisor.supervisor}>{supervisor.supervisor} ({supervisor.specialization})</option>
                  // <option value={project[0].supervisors[index]}></option>
                  <option></option>
        ))}
                </select>
                
              </td>
              <td>
              <p>{supervisorInput && supervisorInput.length > 0  ? supervisorInput[0].specialization : ''}</p>
              </td>
              
            </tr>
            {supervisorInput.length >=  1 ? 
            <tr>
              <td>
              <select className='selector' onChange={(e) => handleSelectChange(e, 1)}> 
                  <option value=''></option>
                  {supervisors.map((supervisor) => (
          // <EmployeeCard key={employee.id} photo={employee.image} handleSubmits1={get_employees_dismissed} id={employee.id} name={employee.name} job={employee.type == 3 ? 'HR' : employee.position} phone={employee.mobile} mail={employee.email} department={employee.type == 3 ? 'HR' : employee.departement} joinDate={employee.start_job_contract} active={employee.status} handleSubmits={get_employees_list} martial={martial_status} nationality={nationality} handleChange={handleInputChange} handleImage={handleImageChange} onChange={InputChange} handleTime={handleTime} employee={data} shifts={shifts} update={updateEmployee} setSelectedEmployee={setSelectedEmployee} selectedEmployee={selectedEmployee} loader={addLoader} setAddLoader={setAddLoader} warn={setWarning1} warning={warning1}/>
                  <option value={supervisor.supervisor}>{supervisor.supervisor} ({supervisor.specialization} {project[0].supervisors})</option>
        ))}
                </select>
                
              </td>
              <td>
              <p>{supervisorInput && supervisorInput.length >  1  ? supervisorInput[1].specialization : ''}</p>
              </td>
              
            </tr>  : ''}
            {supervisorInput.length >=  2 ? 
            <tr>
              <td>
                <select className='selector' onChange={(e) => handleSelectChange(e, 2)}>
                  <option value=''></option>
                  {supervisors.map((supervisor) => (
          // <EmployeeCard key={employee.id} photo={employee.image} handleSubmits1={get_employees_dismissed} id={employee.id} name={employee.name} job={employee.type == 3 ? 'HR' : employee.position} phone={employee.mobile} mail={employee.email} department={employee.type == 3 ? 'HR' : employee.departement} joinDate={employee.start_job_contract} active={employee.status} handleSubmits={get_employees_list} martial={martial_status} nationality={nationality} handleChange={handleInputChange} handleImage={handleImageChange} onChange={InputChange} handleTime={handleTime} employee={data} shifts={shifts} update={updateEmployee} setSelectedEmployee={setSelectedEmployee} selectedEmployee={selectedEmployee} loader={addLoader} setAddLoader={setAddLoader} warn={setWarning1} warning={warning1}/>
                  <option value={supervisor.supervisor}>{supervisor.supervisor} ({supervisor.specialization})</option>
        ))}
                </select>
                
              </td>
              <td>
                <p>{supervisorInput && supervisorInput.length >  2  ? supervisorInput[2].specialization : ''}</p>
              </td>
              
            </tr> : ''
} */}
        </tbody>
      </table>
      <div>
        {/* <button onClick={handleSaveData}>حفظ</button>
        <button onClick={handleSendData}>إرسال البيانات</button> */}
      </div>
    </div>
  );
};

export default Table_Sperviser;

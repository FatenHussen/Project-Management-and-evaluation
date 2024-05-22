import React, { useEffect, useState } from 'react';
const ViewTableFinalEvaluate = () => {
    const [date1, setDate1] = useState('');
    const [members, setMembers] = useState([
      { name: '', score: 100, note: '' , score1:'',score2:''},
      { name: '', score: 100, note: '',score1:'',score2:'' },
      { name: '', score: 100, note: '',score1:'',score2:'' },
      { name: '', score: 100, note: '',score1:'',score2:''  },
    ]);
    const [projectData, setProjectData] = useState([
        {  name : 'فكرة المشروع', score: 8 },
        {  name : 'دراسة الإشارة', score: 8 },
        {  name : 'دراسة تحليلية', score: 8 },
        {  name : 'التصميم', score: 10 },
        {  name : 'البرمجة', score: 10 },
        {  name : 'الإدارة', score: 8 },
        {  name : 'Git Hub', score: 8 },
        {  name : 'الخيارات', score: 8 },
        {  name : 'النتائج/التحليل', score: 8 },
        {  name : 'القيمة المضافة', score: 8 },
        {  name : 'التقدير', score: 8 },
        {  name : 'العرض', score: 8 },
        {  name : 'الإجمالي', score: 100 },
      ]);

  return (
    <div>
    <table className="my-table" border="">
        <thead>
          <tr>
            <th colSpan='1'>عنوان المشروع</th>
            <th colSpan='4'>
              
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
              <td>
                
              </td>
              <td>
                <input
                  type="text"
                  name="score"
                  placeholder="العلامة"
                  value={member.score}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td></td>
              <td>
                
              </td>
            </tr>
          ))}
          <tr>
              <td>مكونات التقييم</td>
              <td></td>
              <td>العلامة</td>
              <td>ملاحظات</td>
          </tr>
          {projectData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.score}</td>
              <td>
              </td>
              <td>
    </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewTableFinalEvaluate
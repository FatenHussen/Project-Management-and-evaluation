import React, { useState, useEffect } from "react";
import axios from "axios";
import Table_student from "./Table_student";
import Table_Sperviser from "./Table_Sperviser";
import Decision from "./Decision";
import { Link } from "react-router-dom";

const   Table_pr = ({
  formData,
  handleChange,
  handleDrop,
  handleFileInputChange,
  handleRemoveImage,
  setDragging,
  dragging,
  type,
  size,
  setSize,
  setType,
  handleSelectChange,
  supervisors,
  supervisorInput,
  project,
  date,
  committeeDecision,
  studnent,
  students
}) => {
  //     const [size,setSize] = useState(false)
  // const [type,setType] = useState(false)

  // useEffect(() => {
  //     // استعادة قيم الحقول من localStorage عند تحميل الصفحة
  //     const savedFormData = JSON.parse(localStorage.getItem('formData')) || {};
  //     setFormData(savedFormData);
  // }, []);
  console.log('ss',project[0].projectName)
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleSubmit1 = async (event) => {
    event.preventDefault();

    try {
      // استخدام Axios لإرسال البيانات إلى الخادم
      const response = await axios.post("عنوان-الخادم-هنا", formData);
      console.log("تم إرسال البيانات بنجاح:", response.data);
    } catch (error) {
      console.error("حدث خطأ أثناء إرسال البيانات:", error);
    }
  };
  const handleSave = async () => {
    try {
      const responseSave = await axios.post("عنوان-ال-API-للحفظ",{
        problem: formData.problem,
        domain: formData.domain,
        literature: formData.literature,
        literatureS: formData.literatureS,
        mainMap: formData.mainMap,
        main_map: formData.main_map,
        mind_map: formData.mind_map,
        experts: formData.experts,
        users: formData.users,
        stakeholders: formData.stakeholders,
        experts_S: formData.experts_S,
        users_S: formData.users_S,
        stakeholders_S: formData.stakeholders_S,
        pro_solution: formData.pro_solution,
        fun_requirements: formData.fun_requirements,
        fun_Nrequirements: formData.fun_Nrequirements,
        methodology: formData.methodology,
        meetings: formData.meetings,
        communication: formData.communication,
        project_Leader: formData.project_Leader,
        fileSharing: formData.fileSharing,
        platform: formData.platform,
        tools: formData.tools,
        languages: formData.languages,
        database: formData.database,
        packages: formData.packages,
        role: students.role,
        date,
        committeeDecision,
        
      }
       );
      console.log("تم حفظ البيانات بنجاح:", responseSave.data);

      setIsSaved(true);
    } catch (error) {
      console.error("حدث خطأ أثناء الحفظ:", error);
    }
  };
  const [isSaved, setIsSaved] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [accept, setAccept] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSend = async () => {
    let flag = true;
    setAccept(true);
    if (
        formData.problem === '' ||
        formData.domain === '' ||
        formData.literature === '' ||
        formData.main_map === null ||
        formData.experts === '' ||
        formData.users === ''||
        formData.stakeholders=== ''||
        formData.literatureS===''||
        formData.mind_map===null||
        formData.experts_S===''||
        formData.users_S===''||
        formData.stakeholders_S===''||
        formData.pro_solution===''||
        formData.fun_requirements===''||
        formData.fun_Nrequirements===''||    
        formData.methodology===''||
        formData.meetings===''||
        formData.communication===''||
        formData.fileSharing===''||
        formData.platform===''||
        formData.tools===''||
        formData.languages===''||
        formData.database===''||
        formData.packages===''||
        formData.project_Leader===''||
        studnent && students.role||
        committeeDecision===''
    ) {
        flag = false;
    }else flag=true;

    if (flag) {
        try {
            setLoading(true);
            const responseSend = await axios.post("عنوان-ال-API-للإرسال",{
              problem: formData.problem,
              domain: formData.domain,
              literature: formData.literature,
              literatureS: formData.literatureS,
              mainMap: formData.mainMap,
              main_map: formData.main_map,
              mind_map: formData.mind_map,
              experts: formData.experts,
              users: formData.users,
              stakeholders: formData.stakeholders,
              experts_S: formData.experts_S,
              users_S: formData.users_S,
              stakeholders_S: formData.stakeholders_S,
              pro_solution: formData.pro_solution,
              fun_requirements: formData.fun_requirements,
              fun_Nrequirements: formData.fun_Nrequirements,
              methodology: formData.methodology,
              meetings: formData.meetings,
              communication: formData.communication,
              project_Leader: formData.project_Leader,
              fileSharing: formData.fileSharing,
              platform: formData.platform,
              tools: formData.tools,
              languages: formData.languages,
              database: formData.database,
              packages: formData.packages,
              role: students.role,
              date,
              committeeDecision,
            });
            console.log("تم إرسال البيانات بنجاح:", responseSend.data);
        } catch (error) {
            console.error("حدث خطأ أثناء الإرسال:", error);
        }  setTimeout(() => {
          setLoading(false); 
      }, 1000); 
    }
};
  console.log('magd',formData);
  return (
    <>
    <div className='table-container1'>
      <form>
        <table className="my-table" border="">
          <thead>
            <tr>
              <th className="ttt">اسم المشروع:</th>
              <th>
                {/* <select className='selector'>
                                    <option>اختر مشروعا</option>
                                </select> */}
                <input
                  type="text"
                  name="projectName"
                  value={project[0].projectName}
                  onChange={handleChange}
                  disabled={project}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>المشكلة:</td>
              <td>
                <textarea
                  rows="10"
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                />
                {formData.problem==='' && accept && <p className="erro">الحقل فارغ.</p>}
              </td>
            </tr>
            <tr>
              <td>المجال:</td>
              <td>
                <input
                  type="text"
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                />
                {formData.domain==='' && accept && <p className="erro">الحقل فارغ.</p>}
              </td>
            </tr>
            <tr>
              <td>مراجع الأدبيات للمشكلة:</td>
              <td>
                <textarea
                  rows="10"
                  name="literature"
                  value={formData.literature}
                  onChange={handleChange}
                />
                {formData.literature==='' && accept && <p className="erro">الحقل فارغ.</p>}
              </td>
            </tr>
            <tr>
              <td>الخريطة الرئيسية:</td>
              <td>
                {/* <div
                className='fileInput' id='main_map' onDragOver={handleDragOver} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                <input name='main_map' id='mainMap' type="file" multiple onChange={handleFileInputChange}/>
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
            : ''}
             */}
                <div
                  className="fileInput"
                  id="main_map"
                  onDragOver={handleDragOver}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    name="main_map"
                    accept="image/*"
                    id="mainMap"
                    type="file"
                    multiple
                    onChange={handleFileInputChange}
                  />
                  {size ? (
                    <p style={{ color: "red" }}>
                      يجب أن يكون الملف أصغر من 2 ميجابايت
                    </p>
                  ) : (
                    ""
                  )}
                  {type ? (
                    <p style={{ color: "red" }}>يجب أن يكون الملف صورة</p>
                  ) : (
                    ""
                  )}
                  <p>قم بسحب وإسقاط الملفات هنا</p>
                  <p>أو</p>
                  <label htmlFor="mainMap">انقر لتحديد الملفات</label>
                </div>
                {formData.main_map != null ? (
                  <div className="fileShow">
                    {/* {files.map((file, index) => (
                    <Link key={index} to={`/proposal${file}`}>
                        <img
                            src={URL.createObjectURL(file)}
                            alt={`Uploaded Image ${index}`}
                        />
                        <button onClick={() => handleRemoveImage(index)}>X</button>
                    </Link>
                ))} */}
                    <Link to={`${URL.createObjectURL(formData.main_map)}`}>
                      <img
                        src={URL.createObjectURL(formData.main_map)}
                        // alt={`Uploaded Image ${index}`}
                      />
                      {/* <button onClick={() => handleRemoveImage(index)}>X</button> */}
                    </Link>
                    <button onClick={() => handleRemoveImage("main_map")}>
                      X
                    </button>
                  </div>
                ) : (
                  ""
                )}
                {/* <input type="file" accept="image/*" onChange={handleChange} /> */}
                {formData.main_map=== null && accept && <p className="erro">قم بإضافة الخريطة الذهنية.</p>}
              </td>
            </tr>
            <tr>
              <td>الخبراء:</td>
              <td>
                <input
                  type="text"
                  name="experts"
                  value={formData.experts}
                  onChange={handleChange}
                />
                 {formData.experts=== '' && accept && <p className="erro">الحقل فارغ.</p>}
              </td>
            </tr>
            <tr>
              <td>المستخدمون:</td>
              <td>
                <input
                  type="text"
                  name="users"
                  value={formData.users}
                  onChange={handleChange}
                />
                  {formData.users=== '' && accept && <p className="erro">الحقل فارغ.</p>}

              </td>
            </tr>
            <tr>
              <td>الأطراف المعنية:</td>
              <td>
                <input
                  type="text"
                  name="stakeholders"
                  value={formData.stakeholders}
                  onChange={handleChange}
                />
              {formData.stakeholders=== '' && accept && <p className="erro">الحقل فارغ.</p>}

              </td>

            </tr>
            <tr>
            {/* formData.literatureS===''||
        formData.mind_map===null||
        formData.experts_S===''||
        formData.users_S==='' */}
              <td>مراجع الأدبيات للحل المقترح:</td>
              <td>
                <textarea
                  rows="10"
                  name="literatureS"
                  value={formData.literatureS}
                  onChange={handleChange}
                />
                {formData.literatureS==='' && accept && <p className="erro">الحقل فارغ.</p>}
              </td>
            </tr>
            <tr>
              <td>الخريطة الذهنية:</td>
              <td>
                <div
                  className="fileInput"
                  id="mind_map"
                  onDragOver={handleDragOver}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    name="mind_map"
                    accept="image/*"
                    id="mindMap"
                    type="file"
                    multiple
                    onChange={handleFileInputChange}
                  />
                  {size ? (
                    <p style={{ color: "red" }}>
                      يجب أن يكون الملف أصغر من 2 ميجابايت
                    </p>
                  ) : (
                    ""
                  )}
                  {type ? (
                    <p style={{ color: "red" }}>يجب أن يكون الملف صورة</p>
                  ) : (
                    ""
                  )}
                  <p>قم بسحب وإسقاط الملفات هنا</p>
                  <p>أو</p>
                  <label htmlFor="mindMap">انقر لتحديد الملفات</label>
                </div>
                {formData.mind_map != null ? (
                  <div className="fileShow">
                    {/* {files.map((file, index) => (
                    <Link key={index} to={`/proposal${file}`}>
                        <img
                            src={URL.createObjectURL(file)}
                            alt={`Uploaded Image ${index}`}
                        />
                        <button onClick={() => handleRemoveImage(index)}>X</button>
                    </Link>
                ))} */}
                    <Link to={`${URL.createObjectURL(formData.mind_map)}`}>
                      <img
                        src={URL.createObjectURL(formData.mind_map)}
                        // alt={`Uploaded Image ${index}`}
                      />
                      {/* <button onClick={() => handleRemoveImage(index)}>X</button> */}
                    </Link>
                    <button onClick={() => handleRemoveImage("mind_map")}>
                      X
                    </button>
                  </div>
                ) : (
                  ""
                )}
                {/* <input type="file" accept="image/*" onChange={handleChange} /> */}
                { formData.mind_map===null&& accept && <p className="erro">قم بإضافة الخريطة الذهنية .</p>}
              </td>
            </tr>
            <tr>
              <td>الخبراء:</td>
              <td>
                <input
                  type="text"
                  name="experts_S"
                  value={formData.experts_S}
                  onChange={handleChange}
                />
                {formData.experts_S==='' && accept && <p className="erro">الحقل فارغ.</p>}
              </td>
            </tr>
            <tr>
              <td>المستخدمون:</td>
              <td>
                <input
                  type="text"
                  name="users_S"
                  value={formData.users_S}
                  onChange={handleChange}
                />
                {formData.users_S==='' && accept && <p className="erro">الحقل فارغ.</p>}
              </td>
            </tr>
            <tr>
              <td>الأطراف المعنية:</td>
              <td>
                <input
                  type="text"
                  name="stakeholders_S"
                  value={formData.stakeholders_S}
                  onChange={handleChange}
                />
                {formData.stakeholders_S==='' && accept && <p className="erro">الحقل فارغ.</p>}
               
              </td>
            </tr>
            <tr>
              <td>الحل المقترح:</td>
              <td>
                <textarea
                  rows="10"
                  name="pro_solution"
                  value={formData.pro_solution}
                  onChange={handleChange}
                />
                  {formData.pro_solution==='' && accept && <p className="erro">الحقل فارغ.</p>}

              </td>
            </tr>
            <tr>
              <td>المتطلبات الوظيفية:</td>
              <td>
                <textarea
                  rows="10"
                  name="fun_requirements"
                  value={formData.fun_requirements}
                  onChange={handleChange}
                />
                {formData.fun_requirements==='' && accept && <p className="erro">الحقل فارغ.</p>}

              </td>
            </tr>
            <tr>
              <td>المتطلبات غير الوظيفية:</td>
              <td>
                <textarea
                  rows="10"
                  name="fun_Nrequirements"
                  value={formData.fun_Nrequirements}
                  onChange={handleChange}
                />
                 {formData.fun_Nrequirements==='' && accept && <p className="erro">الحقل فارغ.</p>}

              </td>
            </tr>
            <tr>
              <td>المنهجية:</td>
              <td>
                <input
                  type="text"
                  name="methodology"
                  value={formData.methodology}
                  onChange={handleChange}
                />
                {formData.methodology==='' && accept && <p className="erro">الحقل فارغ.</p>}
              </td>
            </tr>
            <tr>
              <td>الاجتماعات:</td>
              <td>
                <input
                  type="text"
                  name="meetings"
                  value={formData.meetings}
                  onChange={handleChange}
                />
                {formData.meetings==='' && accept && <p className="erro">الحقل فارغ.</p>}
              </td>
            </tr>
            <tr>
              <td>التواصل:</td>
              <td>
                <input
                  type="text"
                  name="communication"
                  value={formData.communication}
                  onChange={handleChange}
                />
                {formData.communication==='' && accept && <p className="erro">الحقل فارغ.</p>}
              </td>
            </tr>
            <tr>
  <td>قائد المشروع:</td>
  <td>
    <input
      type="text"
      name="project_Leader"
      value={formData.project_Leader}
      onChange={handleChange}
    />
    {formData.project_Leader==='' && accept && <p className="erro">الحقل فارغ.</p>}
  </td>
</tr>
            <tr>
              <td>مشاركة الملفات:</td>
              <td>
                <input
                  type="text"
                  name="fileSharing"
                  value={formData.fileSharing}
                  onChange={handleChange}
                />
                {formData.fileSharing==='' && accept && <p className="erro">الحقل فارغ.</p>}
              </td>
            </tr>
            <tr>
              <td>المنصة:</td>
              <td>
                <input
                  type="text"
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                />
                {formData.platform==='' && accept && <p className="erro">الحقل فارغ.</p>}
              </td>
            </tr>
            <tr>
              <td>الأدوات:</td>
              <td>
                <input
                  type="text"
                  name="tools"
                  value={formData.tools}
                  onChange={handleChange}
                />
                {formData.tools==='' && accept && <p className="erro">الحقل فارغ.</p>}
              </td>
            </tr>
            <tr>
              <td>اللغات:</td>
              <td>
                <input
                  type="text"
                  name="languages"
                  value={formData.languages}
                  onChange={handleChange}
                />
                {formData.languages==='' && accept && <p className="erro">الحقل فارغ.</p>}
              </td>
            </tr>
            <tr>
              <td>قاعدة البيانات:</td>
              <td>
                <input
                  type="text"
                  name="database"
                  value={formData.database}
                  onChange={handleChange}
                />
                {formData.database==='' && accept && <p className="erro">الحقل فارغ.</p>}
              </td>
            </tr>
            <tr>
              <td>الحزم:</td>
              <td>
                <input
                  type="text"
                  name="packages"
                  value={formData.packages}
                  onChange={handleChange}
                />
                {formData.packages==='' && accept && <p className="erro">الحقل فارغ.</p>}
              </td>
            </tr>
          </tbody>
        </table>
        <Table_Sperviser
          handleSelectChange={handleSelectChange}
          supervisors={supervisors}
          supervisorInput={supervisorInput}
          project={project}
        />
        <Table_student 
        project={project}
        accept={accept}
        handleSend={handleSend}
        />
        <div className="margin">
          <Decision 
          accept={accept}
          handleSend={handleSend}
          />
          <div className="button2">
            <div className="style-button">
          <button type="button" onClick={handleSave}>
            حفظ
          </button>
          <h5>في حال الضغط على زر الحفظ يمكن ارجاء تعديل بعد الضعط</h5>
          </div>
          <div className="style-button">
          <button type="button" onClick={handleSend}  disabled={loading}>
          {loading ? <div className="spinner" /> : 'أرسال'}
          </button>
          <h5>في حال الضعط على زر الارسال لا يمكن تعديل بعد الضغط</h5>
          </div>
          </div>
        </div>
      </form>
    </div>
  </>
  );
};

export default Table_pr;

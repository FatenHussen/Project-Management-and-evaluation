import React from 'react'
import { useState, useEffect } from 'react';
import ViewTableStudent from './ViewTableStudent';
import ViewTableSuperviser from './ViewTableSuperviser';
import ViewDecision from './ViewDecision';
const ViewTable_pr = () => {
    const [formData, setFormData] = useState({
        projectName: '',
        problem: '',
        domain: '',
        literature: '',
        literatureS: '',
        mainMap: '',
        image: null,
        experts: '',
        users: '',
        stakeholders: '',
        experts_S: '',
        users_S: '',
        stakeholders_S: '',
        pro_solution: '',
        fun_requirements: '',
        fun_Nrequirements: '',
        methodology: '',
        meetings: '',
        communication: '',
        projectLeader: '',
        fileSharing: '',
        platform: '',
        tools: '',
        languages: '',
        database: '',
        packages: ''
    });

    useEffect(() => {
        // استعادة قيم الحقول من localStorage عند تحميل الصفحة
        const savedFormData = JSON.parse(localStorage.getItem('formData')) || {};
        setFormData(savedFormData);
    }, []);

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value // إذا كان الحقل ملف، استخدم القيمة الملفية، وإلا استخدم القيمة النصية
        }));
    };

    const handleSubmit1 = async (event) => {
        event.preventDefault();

        try {
            // استخدام Axios لإرسال البيانات إلى الخادم
            const response = await axios.post('عنوان-الخادم-هنا', formData);
            console.log('تم إرسال البيانات بنجاح:', response.data);
        } catch (error) {
            console.error('حدث خطأ أثناء إرسال البيانات:', error);
        }
    };

    useEffect(() => {
        // حفظ قيم الحقول في localStorage عندما تتغير
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

  return (
    <div className='table11'>
    <form onSubmit={handleSubmit1}>
        <table className="my-table" border="">
            <thead>
            <tr>
                    <th className='ttt'>اسم المشروع:</th>
                    <th><input type="text" name="projectName" value={formData.projectName} onChange={handleChange} /></th>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                    <td>المشكلة:</td>
                    <td><textarea rows="5" name="problem" value={formData.problem} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>المجال:</td>
                    <td><input type="text" name="domain" value={formData.domain} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>مراجع الأدبيات للمشكلة:</td>
                    <td><textarea rows="5" name="literature" value={formData.literature} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>الخريطة الرئيسية:</td>
                    <td><input type="file" accept="image/*" onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>الخبراء:</td>
                    <td><input type="text" name="experts" value={formData.experts} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>المستخدمون:</td>
                    <td><input type="text" name="users" value={formData.users} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>الأطراف المعنية:</td>
                    <td><input type="text" name="stakeholders" value={formData.stakeholders} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>مراجع الأدبيات للحل المقترح:</td>
                    <td><textarea rows="5" name="literatureS" value={formData.literatureS} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>الخريطة الذهنية:</td>
                    <td><input type="file" accept="image/*" onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>الخبراء:</td>
                    <td><input type="text" name="experts_S" value={formData.experts_S} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>المستخدمون:</td>
                    <td><input type="text" name="users_S" value={formData.users_S} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>الأطراف المعنية:</td>
                    <td><input type="text" name="stakeholders_S" value={formData.stakeholders_S} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>الحل المقترح:</td>
                    <td><textarea rows="5" name="pro_solution" value={formData.pro_solution} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>المتطلبات الوظيفية:</td>
                    <td><textarea rows="5" name="fun_requirements" value={formData.fun_requirements} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>المتطلبات غير الوظيفية:</td>
                    <td><textarea rows="5" name="fun_Nrequirements" value={formData.fun_Nrequirements} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>المنهجية:</td>
                    <td><input type="text" name="methodology" value={formData.methodology} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>الاجتماعات:</td>
                    <td><input type="text" name="meetings" value={formData.meetings} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>التواصل:</td>
                    <td><input type="text" name="communication" value={formData.communication} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>قائد المشروع:</td>
                    <td><input type="text" name="projectLeader" value={formData.projectLeader} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>مشاركة الملفات:</td>
                    <td><input type="text" name="fileSharing" value={formData.fileSharing} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>المنصة:</td>
                    <td><input type="text" name="platform" value={formData.platform} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>الأدوات:</td>
                    <td><input type="text" name="tools" value={formData.tools} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>اللغات:</td>
                    <td><input type="text" name="languages" value={formData.languages} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>قاعدة البيانات:</td>
                    <td><input type="text" name="database" value={formData.database} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>الحزم:</td>
                    <td><input type="text" name="packages" value={formData.packages} onChange={handleChange} /></td>
                </tr>
            </tbody>
        </table>
        <ViewTableStudent/>
        <ViewTableSuperviser/>
        <div className='margin'>
        <ViewDecision/>
        </div>
    </form>
</div>
);
};

export default ViewTable_pr
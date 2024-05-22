import React from 'react'
  import Fsidebar from '../Style/fsidebar'
  import './ContactForm.css'
    import { useState } from 'react'
  import { Link } from 'react-router-dom'
    const ContactForm = () => {
      const[name, setName]=useState('');
      const[email,setEmail]=useState('');
      const[description,setDescription]=useState('');
      return (
        <div className='container-us'>
          <Fsidebar/>
          <div className='contact-us'>
            <div className='body-us'>
              <div className='part1-us'>
                <h3 >أبحث عنا</h3>
                <div className='body-part2'>
                <label htmlFor="Email">البريد الألكتروني: <Link to="mailto:aspu.edu.sy">support@aspu.edu.sy</Link></label>
                <label htmlFor="phone"> الرقم: <Link to="tel:0958899168">0958899168</Link></label>
                <label htmlFor="location">موقع جامعة الشام الخاصة: <a href="geo:33.5135,36.2920">جامعة الشام الخاصة</a></label>
                <label htmlFor="Facebook">facebook : <a href="https://www.facebook.com/Al.Sham.University?mibextid=ZbWKwL">جامعة الشام الخاصة</a></label>
                </div>
              </div>
              <div className='part2-us'>
                <h3>اتصل بنا</h3>
                <div className='body-part2'>
                <label htmlFor="Name">الأسم:</label>
                
                <input
                  id="name"
                  type="text"
                  placeholder="Name..."
                  value={name}
                  className='style-us'
                  onChange={(e) => setName(e.target.value)}
                  disabled
                />
                <label htmlFor="Email">البريد الألكتروني:</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email..."
                  required
                  value={email}
                  className='style-us'
                  onChange={(e) => setEmail(e.target.value)}
                  disabled
                />
                <label htmlFor="Email"> اكتب رسالتك:</label>
                <textarea
                    value={description}
                    className='style-us2'
                    placeholder="أكتب رسالتك"
                    onChange={(e) => setDescription(e.target.value)}
                    rows="1"
                    
                    cols="50"
                  />
                  <div className='body-button'>
                  <button className="button-us" onClick={()=> Signup()}>
                  Register
                </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    
    export default ContactForm 

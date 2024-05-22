import React, { useState, useEffect } from "react";
import {
  BiHelpCircle,
  BiHome,
  BiMessage,
  BiStats,
  BiTask,
  BiLogOut,
  BiPencil,
  BiMenu,
} from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./fsidebar.css";
const Fsidebar = () => {
  let navigate = useNavigate();
  const [dash, setDash] = useState(false);
  const [project, setProject] = useState(false);
  const [follow, setFollow] = useState(false);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isAbove768, setIsAbove768] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsAbove768(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isAbove768]);
  let role = localStorage.getItem("role");
  console.log("Role:", isDivVisible);
  const handleButton = () => {
    if (role === "Student") {
      navigate("/finputuser");
    } else {
      navigate("/fadmin");
    }
  };
  const [isSupervisor, setIsSupervisor] = useState(false);

  useEffect(() => {
    const userType = localStorage.getItem('userType');
    if (userType === 'supervisor') {
      setIsSupervisor(true);
    }
  }, []);
  return (
    <>
      {isAbove768 ? (
        <div className="menu-f">
          <div className="logo-f">
            <h2 className="PMSys">PMS</h2>
          </div>
          <div className="menu-list-f">
             <Link to="/home" className="item">
              <BiHome className="icon-f" />
              الصفحة الرئيسية
            </Link> 

            <Link to="/projects" className="item">
              <BiTask className="icon-f" />
              المشاريع
            </Link>
            {/* {isSupervisor && (
        <Link to="/projects" className="item">
          <BiTask className="icon-f" />
          المشاريع
        </Link>
      )} */}
            {/* <div  className='item'> 
            <div className='item1' style={{
        backgroundColor: dash ? '#27374d' : '',
        color: dash ? '#ddefed' : '',
      }}
 onClick={()=>{setFollow(false); setProject(false); setDash(!dash)}}>
                <BiStats className='icon-f'/>
                لوحة التحكم
            </div>
            {dash ? <ul className='ul-style'>
            <li><Link to='/studenttable'>Student</Link></li>
            <li><Link to='/supervisor'>supervisor</Link></li>
            <li><Link>Ptojects</Link></li>
            </ul> : ''} 
            </div> */}
            {/* <Link to="/proposal" className="item">
              <BiPencil className="icon-f" />
              المقترح
            </Link> */}
             <div  className='item'> 
            <div className='item1' style={{
        backgroundColor: project ? '#27374d' : '',
        color: project ? '#ddefed' : '',
      }}
 onClick={()=>{setFollow(false); setProject(!project); setDash(false)}}>
                <BiPencil className='icon-f'/>
                إنشاء مشروع
            </div>
            {project ? <ul className='ul-style'>
            <li><Link to='/inputproject'>
                إنشاء مشروع
            </Link></li>
            <li><Link to='/proposal'>
                المقترح
            </Link></li>
            </ul> : ''}
            </div> 

            <div className="item">
              <div
                className="item1"
                style={{
                  backgroundColor: follow ? "#27374d" : "",
                  color: follow ? "#ddefed" : "", 
                }}
                onClick={() => {
                  setFollow(!follow);
                  setProject(false);
                  setDash(false);
                }}
              >
                <BiMessage className="icon-f" />
                المتابعة
              </div>
              {follow ? (
                <ul className="ul-style">
                  <li>
                    <Link to="/Project_Follow_up">
                      {/* <BiPencil  className='icon-f'/> */}
                      متابعة المشروع
                    </Link>
                  </li>
                  <li>
                    <Link to="/evaluate">
                      {/* <BiTask className='icon-f'/> */}
                      المناقشة المرحلية
                    </Link>
                  </li>
                  <li>
                    <Link to="/finalevaluate">
                      {/* <BiTask className='icon-f'/> */}
                      المناقشة النهائية
                    </Link>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </div>

            {/* <Link to='/Project_Follow_up' className='item'>
                <BiMessage className='icon-f'/>
                متابعة المشروع
            </Link>
            <Link to='/evaluate' className='item'>
                <BiMessage className='icon-f'/>
                الدراسة المرحلية
            </Link>
            <Link to='/finalevaluate' className='item'>
                <BiMessage className='icon-f'/>
                الدراسة النهائية
            </Link> */}
            <Link
              to={role === "Student" ? "/finputuser" : "/fadmin"}
              className="item"
              onClick={handleButton}
            >
              <FaAddressCard className="icon-f" />
              الملف الشخصي
            </Link>
            <Link to="/contactform" className="item">
              <BiHelpCircle className="icon-f" />
              اتصل بنا
            </Link>
            <Link to="/contactform" className="item">
              <BiLogOut className="icon-f" />
              تسجيل الخروج
            </Link>
          </div>
          <BiMenu className="burger" />
        </div>
      ) : isDivVisible ? (
        <>
          <div className="menu-f">
            <div className="logo-f">
              <h2 className="PMSys">PMS</h2>
            </div>
            <div className="menu-list-f">
              <Link to="/home" className="item">
                <BiHome className="icon-f" />
                الصفحة الرئيسية
              </Link>
              {/* <div className="item">
                <div
                  className="item1"
                  style={{
                    backgroundColor: dash ? "#27374d" : "",
                    color: dash ? "#ddefed" : "",
                  }}
                  onClick={() => {
                    setFollow(false);
                    setProject(false);
                    setDash(!dash);
                  }}
                >
                  <BiStats className="icon-f" />
                  لوحة التحكم
                </div>
                {dash ? (
                  <ul className="ul-style">
                    <li>
                      <Link to="/studenttable">Student</Link>
                    </li>
                    <li>
                      <Link to="/supervisor">supervisor</Link>
                    </li>
                    <li>
                      <Link>Ptojects</Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </div> */}
               <Link to="/projects" className="item">
              <BiTask className="icon-f" />
              المشاريع
            </Link>
              <div className="item">
                <div
                  className="item1"
                  style={{
                    backgroundColor: project ? "#27374d" : "",
                    color: project ? "#ddefed" : "",
                  }}
                  onClick={() => {
                    setFollow(false);
                    setProject(!project);
                    setDash(false);
                  }}
                >
                  <BiPencil className="icon-f" />
                  إنشاء مشروع
                </div>
                {project ? (
                  <ul className="ul-style">
                    <li>
                      <Link to="/inputproject">
                        {/* <BiPencil  className='icon-f'/> */}
                        إنشاء مشروع
                      </Link>
                    </li>
                    <li>
                      <Link to="/proposal">
                        {/* <BiTask className='icon-f'/> */}
                        المقترح
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </div>

              <div className="item">
                <div
                  className="item1"
                  style={{
                    backgroundColor: follow ? "#27374d" : "",
                    color: follow ? "#ddefed" : "",
                  }}
                  onClick={() => {
                    setFollow(!follow);
                    setProject(false);
                    setDash(false);
                  }}
                >
                  <BiMessage className="icon-f" />
                  المتابعة
                </div>
                {follow ? (
                  <ul className="ul-style">
                    <li>
                      <Link to="/Project_Follow_up">
                        {/* <BiPencil  className='icon-f'/> */}
                        متابعة المشروع
                      </Link>
                    </li>
                    <li>
                      <Link to="/evaluate">
                        {/* <BiTask className='icon-f'/> */}
                        المناقشة المرحلية
                      </Link>
                    </li>
                    <li>
                      <Link to="/finalevaluate">
                        {/* <BiTask className='icon-f'/> */}
                        المناقشة النهائية
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </div>

              {/* <Link to='/Project_Follow_up' className='item'>
                <BiMessage className='icon-f'/>
                متابعة المشروع
            </Link>
            <Link to='/evaluate' className='item'>
                <BiMessage className='icon-f'/>
                الدراسة المرحلية
            </Link>
            <Link to='/finalevaluate' className='item'>
                <BiMessage className='icon-f'/>
                الدراسة النهائية
            </Link> */}
              <Link
                to={role === "Student" ? "/finputuser" : "/fadmin"}
                className="item"
                onClick={handleButton}
              >
                <FaAddressCard className="icon-f" />
                الملف الشخصي
              </Link>
              <Link to="/contactform" className="item">
                <BiHelpCircle className="icon-f" />
                اتصل بنا
              </Link>
              <Link to="/contactform" className="item">
                <BiLogOut className="icon-f" />
                تسجيل الخروج
              </Link>
              <p
                className="close"
                onClick={() => {
                  setIsDivVisible(false);
                }}
              >
                X
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="burger_holder">
          <BiMenu
            className="burger"
            onClick={() => {
              setIsDivVisible(true);
            }}
          />
        </div>
      )}
    </>
  );
};
export default Fsidebar;

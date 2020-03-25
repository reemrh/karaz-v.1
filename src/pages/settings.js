import React, { useState } from "react";
import profilePhoto from "../img/profilePhoto.png";
import EditPen from "../img/pen.svg";
import Arrow from "../img/arrow.svg";
import EditWrapper from "../components/editWrapper";
import DatePicker from "../components/DatePicker";
import invisible from '../img/eye.png';



function Settings(props) {

    const [showEditName, setShowEditName] = useState(false);
    const [showEditEmail, setShowEditEmail] = useState(false);
    const [showEditAddres, setShowEditAddres] = useState(false);
    const [showEditPhone, setShowEditPhone] = useState(false);
    const [showEditBirthdate, setShowEditBirthdate] = useState(false);
    const [showEditPassword, setShowEditPassword] = useState(false);
    const [inputType, setInputType] = useState("password");

    const handlePasswordType = () => {
        (inputType == "password") ? setInputType("text") : setInputType("password");
      }
      function onChange(timestamp) {
        console.log(timestamp);
      }

    return (

        <div dir="rtl" className="settings">
            <div className="menu">
                <div className="menu-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <rect style={{ fill: 'rgba(255,255,255,0)' }} width="24" height="24"/>
                        <path d="M19,20H1a1,1,0,0,1-.89-1.45L2,14.76A4.974,4.974,0,0,1,6.469,12h7.062A4.974,4.974,0,0,1,18,14.76l1.89,3.79a.99.99,0,0,1-.041.973A1,1,0,0,1,19,20ZM10,10a5,5,0,1,1,5-5A5.006,5.006,0,0,1,10,10Z" transform="translate(2.003 2)"/></svg>
                    <h1> الحساب</h1>
                </div>
                <div className="menu-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <rect  style={{ fill: 'rgba(255,255,255,0)' }} width="24" height="24"/>
                    <path  d="M18,19H6a2,2,0,0,1-2-2H18a2,2,0,0,0,2-2V4a2,2,0,0,1,2,2v9A4,4,0,0,1,18,19Zm-2-4H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H16a2,2,0,0,1,2,2V13A2,2,0,0,1,16,15ZM2,8v5H16V8ZM2,2V5H16V2Z" transform="translate(1 3)"/>
                </svg>
                    <h1> عمليات الدفع</h1>
                </div>
                <div className="menu-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <rect style={{ fill: 'rgba(255,255,255,0)' }} width="24" height="24"/>
                    <path  d="M10,20a2,2,0,0,1-2-2h4A2,2,0,0,1,10,20Zm7-4H3a1,1,0,0,1-1-1v-.59a1.008,1.008,0,0,1,.29-.7l.83-.83A3.021,3.021,0,0,0,4,10.76V8A6.035,6.035,0,0,1,5.2,4.4l.9-1.2A3.014,3.014,0,0,1,8.5,2H9V.5A.5.5,0,0,1,9.5,0h1a.5.5,0,0,1,.5.5V2h.5a3.014,3.014,0,0,1,2.4,1.2l.9,1.2A6.035,6.035,0,0,1,16,8v2.76a3.021,3.021,0,0,0,.88,2.12l.83.83a1.008,1.008,0,0,1,.29.7V15A1,1,0,0,1,17,16Zm2.49-8h-1A.5.5,0,0,1,18,7.52a8.088,8.088,0,0,0-1.64-4.31.363.363,0,0,1,.06-.5l1-.78a.447.447,0,0,1,.27-.092l.039,0A.382.382,0,0,1,18,2a10.1,10.1,0,0,1,2,5.47.547.547,0,0,1-.15.37.5.5,0,0,1-.36.16ZM1.5,8H.5a.483.483,0,0,1-.36-.16A.468.468,0,0,1,0,7.47,10.012,10.012,0,0,1,2,2a.373.373,0,0,1,.23-.16l.043,0a.4.4,0,0,1,.256.093l1,.78a.362.362,0,0,1,.059.5A8.1,8.1,0,0,0,2,7.52.513.513,0,0,1,1.5,8Z" transform="translate(1.999 2)"/>
                </svg>
                    <h1> الإشعارات</h1>
                </div>
                <div className="menu-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <rect style={{ fill: 'rgba(255,255,255,0)' }} width="24" height="24"/>
                    <path d="M9.174,20H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H14a2,2,0,0,1,2,2V13.17a2.014,2.014,0,0,1-.59,1.42L10.59,19.41A2.012,2.012,0,0,1,9.174,20ZM10,13a1,1,0,0,0-1,1v4.18L14.18,13ZM3.5,8a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h5A.5.5,0,0,0,9,9.5v-1A.5.5,0,0,0,8.5,8Zm0-4a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5Z" transform="translate(4 2)"/>
                </svg>
                    <h1>سياسة الخصوصية</h1>
                </div>
                <div className="menu-item active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <rect style={{ fill: 'rgba(255,255,255,0)' }} width="24" height="24" />
                        <path d="M18,12v4a2,2,0,0,1-2,2v1a3,3,0,0,1-3,3H10a1,1,0,0,1-1-1v-.5a.5.5,0,0,1,.5-.5H13a1,1,0,0,0,1-1V18a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1V7A5,5,0,1,0,4,7v3a1,1,0,0,1,1,1v6a1,1,0,0,1-1,1H2a2,2,0,0,1-2-2V12a2,2,0,0,1,2-2V7A7,7,0,0,1,16,7v3a2,2,0,0,1,2,2Z" transform="translate(3 1)" />
                    </svg>
                    <h1> الدعم</h1>
                </div>
                <div className="menu-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                   <rect style={{ fill: 'rgba(255,255,255,0)' }} width="24" height="24"/>
                   <path  d="M10,20A10,10,0,1,1,20,10,10.011,10.011,0,0,1,10,20Zm-.5-8a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5ZM9.32,6a.5.5,0,0,0-.5.56l.4,3.22a.25.25,0,0,0,.248.22H10.53a.251.251,0,0,0,.25-.22l.4-3.22a.5.5,0,0,0-.5-.56H9.32Z" transform="translate(2 2)"/>
                </svg>
                    <h1> من نحن</h1>
                </div>
                <div className="join-us">
                    <h1>انضمي الى فريق كرز بيوتي </h1>
                </div>
            </div>
            <div className="menu-content">
                <h1>الحساب</h1>
                <div className="profile-photo">
                    <img src={profilePhoto} />
                </div>
                {showEditName
                ?
                <div className="edit-div">
                    <div className="edit-div-wrapper">
                        <label>الاسم الأول</label>
                        <input type="text" />
                        <div className="save-cancel">
                            <div>حفظ </div>
                            <h3 onClick={() => setShowEditName(false)}>إلغاء </h3>
                        </div>
                    </div>
                    <div className="edit-div-wrapper">
                        <label>الاسم الأخير</label>
                        <input type="text" />                        
                    </div>                    
                </div>
                :
                <EditWrapper name="الاسم" value="غيداء محمد" icon={EditPen} onClick={()=>setShowEditName(true)}/>
                }
               


                {showEditEmail
                ?
                <div className="edit-div">
                    <div className="edit-div-wrapper">
                        <label>تغيير البريد الإلكتروني</label>
                        <div className="edit-email">
                            <label>بريد إلكتروني جديد </label>
                            <input type="text" placeholder="example@gmail.com" />
                        </div>
                        <div className="save-cancel email-save-cancel">
                           <div>حفظ </div>
                           <h3 onClick={() => setShowEditEmail(false)}>إلغاء </h3>
                        </div> 
                    </div>                                                        
                </div>
                :
                <EditWrapper name="الإيميل" value="ghidaamohammed@gmail.com" icon={EditPen} onClick={()=>setShowEditEmail(true)}/>
                }





                

                {showEditPassword
                ?
                <div className="edit-div">
                    <div className="edit-div-wrapper">
                        <label>تغيير كلمة السر</label>
                        <div className="edit-email">
                            <label > كلمة السر الحالية</label>
                            <input type="password" id="settintg-password1" />
                        </div>
                        <div className="edit-email">
                            <div className="passwordLabel">
                                <label>  كلمة السر الجديدة</label>
                                <input
                                type={inputType}
                                className="password "       
                                id="settintg-password"                         
                                />  
                                <span className="input-with-icon show-password"
                                onClick={handlePasswordType}
                                ><img src={invisible} width="15px" height="15px"/></span>
                            </div>
                        </div>                       
                        <div className="save-cancel email-save-cancel">
                            <div>حفظ </div>
                            <h3 onClick={() => setShowEditPassword(false)}>إلغاء </h3>
                        </div> 
                    </div>                                                        
                </div>
                :
                <EditWrapper name="كلمة السر " value=" " icon={EditPen} onClick={()=>setShowEditPassword(true)}/>
                }

                
                {showEditPhone  ?
                <div className="edit-div">
                    <div className="edit-div-wrapper">
                        <label>تغيير رقم الجوال</label>
                        
                        <div className="edit-email">
                            <div className="passwordLabel">
                                <label>  رقم الجوال الجديد</label>
                                <input
                                type={inputType}
                                className="password "       
                                id="settintg-password"                         
                                />  
                                <span className="input-with-icon"                               
                                >972+</span>
                            </div>
                        </div>     
                        <span className="messge-under-input">سيرسل لك كرز رسالة نصية تحتوي على كود التفعيل للتحقق من رقم هاتفك</span>

                        <div className="save-cancel email-save-cancel">
                            <div>التالي</div>
                            <h3 onClick={() => setShowEditPhone(false)}>إلغاء </h3>
                        </div> 
                    </div>                                                        
                </div>
                :
                <EditWrapper name="رقم الجوال " value="972591234567+" icon={EditPen} onClick={()=>setShowEditPhone(true)}/>
                }



               {showEditAddres                ?
                <div className="edit-div">
                <div className="edit-div-wrapper">
                    <label>تعديل العنوان</label>
                    
                    <div className="edit-email">
                        <div className="passwordLabel">
                          <select className="select-settings">
                          <option>المدينة</option>    
                          </select>                           
                        </div>
                    </div> 
                    <div className="edit-email">
                        <div className="passwordLabel">
                          <select className="select-settings">
                          <option>الحي</option>    
                          </select>                           
                        </div>
                    </div> 
                    <input
                    type="text"
                    placeholder="الشارع" 
                    id="street"                       
                    /> 
                    <textarea placeholder="ادخل مزيد من التفاصيل" />                 
                   
                    <div className="save-cancel">
                        <div>حفظ </div>
                        <h3 onClick={() => setShowEditAddres(false)}>إلغاء </h3>
                    </div> 
                </div>                                                        
            </div>
                :
                <EditWrapper name="العنوان" value="غزة،الرمال، شارع أحمد عبد العزيز" icon={EditPen} onClick={()=>setShowEditAddres(true)}/>
                }

               <div className="edit-wrapper select-setting-wrapper">
                    <label>اللغة</label>
                    <select className="edit select-setting">
                        <option className="feild-value">العربية </option>
                        <option className="feild-value">الإنجليزية</option>
                    </select>
                    <div><img src={props.icon} /></div>  
                </div>
               
               <DatePicker onChange={onChange}/>
               
                
      
               
            </div>
        </div>
    )
}

export default Settings;
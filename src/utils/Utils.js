import axios from "axios";

const Utils = {
  "getDate": getDate,
  "getDDay": getDDay,
  "checkEmail": checkEmail,
  "checkPassword": checkPassword,
  "login": login,
  "loginCheck": loginCheck
}

async function loginCheck() {
  axios.defaults.headers.common["Authorization"] = localStorage.getItem("Authorization");
  try {
    const res = await axios.get("/user");  
    return res.status;
  } catch (error) {
    localStorage.removeItem("Authorization");
    axios.defaults.headers.common["Authorization"] = null;
    return null;
  }
}
      
async function login(data) {
  
  try {
    const res = await axios.post("/login", data);
    const token = res.headers.authorization;

    //로컬스토리지에 토큰 저장
    localStorage.setItem("Authorization", token);
    //axios 요청 헤더에 토큰 저장
    axios.defaults.headers.common["Authorization"] = token;
    return token
  } catch (error) {
    axios.defaults.headers.common["Authorization"] = null;
    localStorage.removeItem("Authorization");
    return null    
  }
  
}

function getDate(rowDate) {
  let date = new Date(rowDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  date = (`${year}-${month + 1}-${day}`);
  return date;
}

function getDDay(rowDate) {
  let date = new Date(rowDate);
  let todayTime = new Date();
  let diff = date - todayTime;
  const diffDay = String(Math.floor(diff / (1000 * 60 * 60 * 24)));
  const diffHour =String( Math.floor((diff / (1000*60*60)) % 24)).padStart(2,"0");
  const diffMin = String(Math.floor((diff / (1000*60)) % 60)).padStart(2,"0");
  date = (`${diffDay}일 ${diffHour} : ${diffMin}`)
  return date;
}

function checkEmail(email) {
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  return emailRegEx.test(email);
}

function checkPassword(password) {
  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
  return passwordRegEx.test(password);
}

export default Utils;
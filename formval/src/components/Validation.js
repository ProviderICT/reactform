
function Validation(values) {
  const error = {};

  const email_Pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  const password_Pattern =  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/; 

  if(values.fullname === ""){
    error.fullname = "Name is Required";
  }
  if(values.email === ""){
    error.email = "Email is Required";
  }
  else if (!email_Pattern.test(values.email)) {
    error.email = "Invalid Email Address";
  }
  if(values.selfdrive === ""){
    error.selfdrive = "Choose self drive or not";
  }
  if(values.selectcar === ""){
    error.selectcar = "select a car ,Its Required";
  }
  if(values.contactno === ""){
    error.contactno = "Contact number is Required";
  }
  if(values.datepicker === ""){
    error.datepicker = "Choose a Date";
  }

  if(values.password === ""){
    error.password = "Password is Required";
  }
  else if (!password_Pattern.test(values.email)) {
    error.password = "Invalid Email Address";
  }

  return error
}

export default Validation
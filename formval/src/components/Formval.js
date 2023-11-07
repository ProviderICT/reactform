import React, { useState } from 'react'
import Validation from './Validation';

function Formval() {
  const [userRegistration, setUserRegistration] = useState({
    fullname: "",
    contactno: "",
    email: "",
    selfdrive: "",
    selectcar: "",
    datepicker: "",
    password:"",
  });
  const [error, setError] = useState([]);
  const [inparry, setinparry] = useState([]);
  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(Validation(userRegistration));
    setUserRegistration({
      fullname: "",
      contactno: "",
      email: "",
      selfdrive: "",
      selectcar: "",
      datepicker: "",
      password:"",
    });
  };
  let {fullname,contactno,email, selfdrive,selectcar,datepicker,password} =userRegistration
  const changeHandle=()=>{
    setinparry([...inparry,{fullname,contactno,email, selfdrive,selectcar,datepicker,password}])
    console.log(inparry);
    console.log(userRegistration);
  }
  return (
    <div className="card" style={{ margin: "7vw 4vw 7vw" }}>
      <div className="card-body">
        <h5
          className="card-title"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "2vw",
            color: "black",
          }}
        >
          Form Validation
        </h5>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-2" style={{ fontSize: "17px", color: "black" }}>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Full Name*
            </label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              name="fullname"
              value={userRegistration.fullname}
              onChange={handleinput}
              aria-describedby="name"
              placeholder="Enter Your Full Name"
            />
            {error.fullname && <p style={{ color: "red" }}> {error.fullname}</p>}

            <label htmlFor="exampleInputEmail1" className="form-label">
              Contact Number*
            </label>
            <input
              type="text"
              className="form-control"
              id="contactno"
              name="contactno"
              value={userRegistration.contactno}
              onChange={handleinput}
              aria-describedby="name"
              placeholder="Enter Your Contact number"
            />
            {error.contactno && <p style={{ color: "red" }}> {error.contactno}</p>}

            <label htmlFor="exampleInputEmail1" className="form-label">
              Password*
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={userRegistration.password_Pattern}
              onChange={handleinput}
              aria-describedby="name"
              placeholder="Enter Your Password"
            />
            {error.password && <p style={{ color: "red" }}> {error.password}</p>}
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email Address*
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={userRegistration.email}
              onChange={handleinput}
              aria-describedby="name"
              placeholder="Enter Your Email Address"

            /> {error.email && <p style={{ color: "red" }}> {error.email}</p>}

            <label htmlFor="exampleInputEmail1" className="form-label">
              Select Car
            </label>
            <select
              type="text"
              className="form-control"
              id="selectcar"
              name="selectcar"
              value={userRegistration.selectcar}
              onChange={handleinput}
              aria-describedby="name"

            >
              <option> Chose your Option </option>
              <option> Hatchback</option>
              <option> Sedan</option>
              <option> SUV/MUV</option>
              <option> Premium</option>
              <option> Luxury</option>
            </select>
            {error.selectcar && <p style={{ color: "red" }}> {error.selectcar}</p>}
            <label htmlFor="exampleInputEmail1" className="form-label">
              Self Drive
            </label>
            <select
              type="text"
              className="form-control"
              id="selfdrive"
              name="selfdrive"
              value={userRegistration.selfdrive}
              onChange={handleinput}
              aria-describedby="name"
            >
              <option> Chose your Option </option>
              <option> Yes</option>
              <option> No</option>
            </select>
            {error.selfdrive && <p style={{ color: "red" }}> {error.selfdrive}</p>}
            <label htmlFor="exampleInputEmail1" className="form-label">
              Choose Date
            </label>
            <input
              type="date"
              className="form-control"
              id="datepicker"
              name="datepicker"
              value={userRegistration.datepicker}
              onChange={handleinput}
              aria-describedby="name"
            />
            {error.datepicker && <p style={{ color: "red" }}> {error.datepicker}</p>}
          </div>

          <button
            type="submit"
            className="btn btn-dark"
            onClick={changeHandle}
            style={{ width: "100%", fontSize: "17px" }}
          >
            Submit
          </button>
        </form>
       
      </div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Fullname</th>
      <th scope="col">contact</th>
      <th scope="col">password</th>
      <th scope="col">Email</th>
      <th scope="col">Car</th>
      <th scope="col">SelfDrive</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
   {
      inparry.map((info,ind)=>{
        return(
          <tr key={ind}>
      <th scope="row">1</th>
      <td>{info.fullname}</td>
      <td>{info.contactno}</td>
      <td>{info.password}</td>
      <td>@{info.email}</td>
      <td>{info.selectcar}</td>
      <td>{info.selfdrive}</td>
      <td>@{info.datepicker}</td>
    </tr>)
  }) 
}
  </tbody>
</table>
    </div>
    
  );
}

export default Formval
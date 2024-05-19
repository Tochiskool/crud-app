import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const url = "http://localhost:5001/createUser";
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, { name, email, age })
      .then((result) => {
        setTimeout(function () {
          navigate("/");
        }, 3000);
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className='mb-2'>
            <label htmlFor=''>Name</label>
            <input
              type='text'
              value={name}
              placeholder='Enter Name'
              className='form-control'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Email</label>
            <input
              type='email'
              value={email}
              placeholder='Enter Email'
              className='form-control'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Age</label>
            <input
              type='number'
              value={age}
              placeholder='Enter Age'
              className='form-control'
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;

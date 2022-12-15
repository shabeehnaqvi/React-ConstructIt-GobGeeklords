import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
   
  const history = useNavigate();
  function changegender(e){
    setData(e)
  }
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
    gender:"",

  });

  const [data, setData] = useState([]);
//   console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  
  const addData = (e) => {
    e.preventDefault();

    const { name, email, date, password } = inpval;

    if (name === "") {
      toast.error(" name field is requred!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (date === "") {
      toast.error("date field is requred", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      console.log("data added succesfully");
      history("/login");
      localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));
    }
    console.log(inpval)
    const user =  {
        "id":4,
        "email": email,
        "name": name,
        "password": password,
        "gender": 'male',
        "dob": date
  
        
      }
    fetch("http://localhost:3001/users1", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (res.status >= 200 && res.status <= 300) {
                    toast('Success!');
                }
                else {
                    toast('Failed!')
                }
            })
            
  };

  return (
    <>
      <div className="container mt-3 text-center w-25">
        <div className="row col-md-12 col-sm-12 col-lg-12 col-xl-12">
        {/* <section className="d-flex justify-content-between"> */}
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="">Register</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicname">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter Your Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicdate">
                <Form.Control onChange={getdata} name="date" type="date" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>
              <div className="row mb-3">
                <div className="col">
                  <input
                    className="form-check-input mr-1"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" >
                    User
                  </label>
                </div>
                <div className="col">
                  <input
                    className="form-check-input mr-1"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    onChange={changegender}
                    checked
                  />
                  <label className="form-check-label" >
                    Engineer
                  </label>
                </div>
              </div>

              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              <span>
              Already Have an Account? <span onClick={()=>{history("/login");}}>SignIn</span>{" "}
              </span>{" "}
            </p>
          </div>
        {/* </section> */}
        <ToastContainer />
      </div>
      </div>
    </>
  );
};

export default Signup




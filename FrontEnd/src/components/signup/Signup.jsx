import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const changeRadio = (id) => {
    inpval["role"] = id;
  };

  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
    role: "",
  });

  const [data, setData] = useState([]);
  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, date, password, role } = inpval;

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
      // localStorage.setItem("islogin", true);
      localStorage.setItem("user_data", JSON.stringify([...data, inpval]));
      //history("/home");

      let userlength = 0;
      if (role === "User") {
        fetch("http://localhost:3001/users")
          .then((response) => response.json())
          .then((data) => {
            userlength = data.length;

            const user = {
              id: userlength + 1,
              email: email,
              name: name,
              password: password,
              role: role,
              dob: date,
            };

            fetch("http://localhost:3001/users", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(user),
            }).then((res) => {
              if (res.status >= 200 && res.status <= 300) {
                toast("Congragulation User");
                toast("Successfuly Registered!");
              } else {
                toast("Failed! Contact Support");
              }
            });
          });
      } else {
        toast("Congragulation Engineer");
        fetch("http://localhost:3001/Engineers")
          .then((response) => response.json())
          .then((data) => {
            userlength = data.length;

            const user = {
              id: userlength + 1,
              email: email,
              name: name,
              password: password,
              role: role,
              dob: date,
            };
            fetch("http://localhost:3001/Engineers", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(user),
            }).then((res) => {
              if (res.status >= 200 && res.status <= 300) {
                toast("Successfuly Registered!");
              } else {
                toast("Failed! Contact Support");
              }
            });
          });
      }
    }
  };
  return (
    <div
      className="my-container"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mt-3 text-center w-25">
        <div
          className="row col-md-12 col-sm-12 col-lg-12 col-xl-12 border rounded-5"
          style={{ background: `rgba(255, 255, 255, 0.5)` }}
        >
          <div className="mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="mb-5">Register</h3>

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

              <Form.Group className="mb-3" controlId="formBasicPassword">
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
                    value="User"
                    name="role"
                    id="flexRadioDefault1"
                    onChange={changeRadio.bind(this, "User")}
                  />
                  <label className="form-check-label">User</label>
                </div>
                <div className="col">
                  <input
                    className="form-check-input mr-1"
                    type="radio"
                    value="Engineer"
                    name="role"
                    id="flexRadioDefault2"
                    onChange={changeRadio.bind(this, "Engineer")}
                  />
                  <label className="form-check-label">Engineer</label>
                </div>
              </div>

              <Button
                variant="primary"
                className="col-lg-12"
                onClick={addData}
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              <span>
                Already Have an Account?
                <span
                  style={{ color: "navy", cursor: "pointer" }}
                  onClick={() => {
                    history("/login");
                  }}
                >
                  Login Now
                </span>{" "}
              </span>{" "}
            </p>
          </div>
          {/* </section> */}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Signup;

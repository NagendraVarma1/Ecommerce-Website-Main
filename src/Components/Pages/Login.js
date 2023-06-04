import React, { useContext, useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import AuthContext from "../../Store/AuthContext/auth-context";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const authCtx = useContext(AuthContext)

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        localStorage.setItem("email", enteredEmail )

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCaggKqSumIPyIy8dkWYG-caa-Ch0JFG_c', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        }).then((res) => {
            if(res.ok){
                navigate('/')
                return res.json();
                
            }
            else {
                return res.json().then((data) => {
                    throw new Error('Authentication Failed!')
                })
            }
        }).then((data) => {
            authCtx.logIn(data.idToken)
        }).catch((err) => {
            alert(err.message)
        })
    }

  return (
    <Container className="mt-5">
      <h1 className="text-center">Log In</h1>
      <Container
        className="mt-3 shadow-lg"
        style={{ border: "2px solid black", borderRadius: "7px", width: "60%" }}
      >
        <Form className="m-3 p-2" onSubmit={formSubmitHandler}>
          <Form.Group className="m-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailInputRef}/>
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordInputRef}/>
          </Form.Group>
          <div style={{ textAlign: "center" }}>
            <Button type="submit">Sign In</Button>
          </div>
        </Form>
      </Container>
    </Container>
  );
};

export default Login;

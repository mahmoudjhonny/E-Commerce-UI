import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { userRegister } from "../redux/authRedux";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://filmfaremiddleeast.com/wp-content/uploads/2021/01/fashion-featured-image-1170x600.png");
  background-size: cover;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: #fff;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Error = styled.span`
  font-size: 11px;
  margin-top: 10px;
  color: red;
`;

const Register = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const { user } = useSelector((state) => state);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(userRegister(formData));
    toast(user.created.massage);
  };
  const notMatch = !(formData["password"] === formData["confirmpassword"]);
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="First Name"
            name="firstname"
            type="text"
            onChange={onChange}
          />
          <Input
            placeholder="Last Name"
            name="lastname"
            type="text"
            onChange={onChange}
          />
          <Input
            placeholder="userName"
            name="username"
            type="text"
            onChange={onChange}
          />
          <Input
            placeholder="Email"
            name="email"
            type="email"
            onChange={onChange}
          />
          <Input
            placeholder="password"
            name="password"
            type="password"
            onChange={onChange}
          />
          <Input
            placeholder="confirm password"
            name="confirmpassword"
            type="password"
            onChange={onChange}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button disabled={notMatch} onClick={handleClick}>
            Create
          </Button>
          <ToastContainer />
          {notMatch && (
            <Error>Password and confirm Password mast be the same</Error>
          )}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

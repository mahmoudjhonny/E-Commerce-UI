import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { userLogin } from "../redux/authRedux";
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
  width: 25%;
  background-color: #fff;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Link = styled.a`
  color: #000;
  margin: 10px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin({ email, password }));
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="email"
            name="email"
            onChange={(e) => setemail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Log In</Button>
          <Link>Do You have forget password ?</Link>
          <Link href="/register">Create A New Account?</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import { Search, ShoppingCart } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ paddding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const { user } = useSelector((state) => state.user.userInfo);
  const { quantity } = useSelector((state) => state.cart);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>NEMO</Logo>
        </Center>
        <Right>
          {user && (
            <p
              style={{
                fontWeight: "bold",
                fontSize: "17px",
                marginRight: "20px",
              }}
            >
              {user.firstname + " " + user.lastname}
            </p>
          )}
          <Link
            style={{
              display: user ? "none" : "block",
              color: "#000",
              textDecoration: "none",
              fontSize: "14px",
              marginRight: "10px",
            }}
            to="/register"
          >
            REGISTER
          </Link>
          <Link
            style={{
              display: user ? "none" : "block",
              color: "#000",
              textDecoration: "none",
              fontSize: "14px",
              marginRight: "10px",
            }}
            to="/login"
          >
            SIGN IN
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCart />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

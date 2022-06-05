import React, { useState } from "react";
import styled from "styled-components";
// import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img src="/images/tesla-logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}>Menu</CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadstar</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 70px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  a img {
    cursor: pointer;
    display: flex;
    margin-left: 10px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* flex: 1; */

  a {
    font-weight: 600;
    font-size: 14.5px;
    color: #000;
    padding: 0px 15px;
  }

  a:hover {
    background-color: #e0e0e0;
    border-radius: 10px;
    padding: 5px 15px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 14.5px;
  float: right;
  a {
    font-weight: 600;
    color: #000;
    padding: 0px 15px;
  }

  a:hover {
    background-color: #e0e0e0;
    border-radius: 10px;
    padding: 5px 15px;
  }
`;

const CustomMenu = styled.div`
  cursor: pointer;
  font-weight: 600;
  color: #000;
  padding: 0px 15px;
  :hover {
    background-color: #e0e0e0;
    border-radius: 10px;
    padding: 5px 15px;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  z-index: 1000;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)``;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

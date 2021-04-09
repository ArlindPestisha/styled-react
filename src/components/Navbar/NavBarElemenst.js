import styled from 'styled-components'
// Import link Router as alias LinkR
import { Link as LinkR } from 'react-router-dom'
//Import Link scroll as alias LinkS
//import { Link as LinkS } from 'react-scroll'


//This is for the Nav big container
export const Nav = styled.nav`
  background: #000;
  /*margin-top: -80px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`
//This is for the NavContainer and everything inside
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

//THis is for the Logo which is linked with the LinkR router package
export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  display: flex;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`















import React from 'react'
import logo from '../../assets/logo-nz.svg'
import { HeaderContainer, Logo, Menu, MenuItem } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Logo src={logo} alt="logo nicole zolnier"/>
      </div>
      <Menu>
        <MenuItem>quem sou</MenuItem>
        <MenuItem>projetos</MenuItem>
        <MenuItem>contato</MenuItem>
      </Menu>
    </HeaderContainer>
  )
}

export default Header;
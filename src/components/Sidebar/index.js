import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBarBtnWrap,
  SidebarRoute,
} from "./SidebarElement";

const Sidebar = () => {
  return (
    <SideBarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="discover">Discover</SidebarLink>
          <SidebarLink to="services">Services</SidebarLink>
          <SidebarLink to="Signup">Sign up</SidebarLink>
          <SideBarBtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
          </SideBarBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;

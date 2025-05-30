import { Outlet } from 'react-router-dom';
import NavBar from '../../features/common/components/NavBar';
import { LayoutContainer, MainContent } from './MainLayout.styles';

function MainLayout() {
  return (
    <LayoutContainer>
      <NavBar />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
}

export default MainLayout; 
import { Outlet } from 'react-router-dom';
import NavBar from '../../features/common/components/NavBar';

function MainLayout() {
  return (
    <div style={{ 
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <NavBar />
      <main style={{ 
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout; 
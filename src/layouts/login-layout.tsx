import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';
import { Image } from 'antd';
import LoginBg from '@assets/login-bg.svg';
import Logo from '@assets/logo.svg';

const LoginLayout = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  
  useEffect(() => {
    window.document.title = `Login | ${__APP_TITLE__}`;
  }, []);
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {!isMobile && (
        <div
          className="w-1/2 flex items-center justify-center bg-blue-200 bg-cover bg-center"
          style={{
            backgroundImage: `url(${LoginBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
        </div>
      )}
      <div className="flex w-full md:w-1/2 items-center justify-center p-4 md:p-0">
        <div className="flex flex-col w-full items-center login">
          <div className="mb-6 text-center">
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              preview={false}
            />
          </div>
          
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;

import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Flex, Image, Layout, Typography } from 'antd';
import Logo from '@assets/logo.svg';
import PageLoader from '@components/shared/page-loader';
import MenuContext from '@contexts/menu-context';
import Header from '@layouts/partials/header';
import Sidebar from '@layouts/partials/sidebar';
import { UserDetails } from '@models/user-model';
import { setUser } from '@reducers/user-slice';
import { useAuthUserQuery } from '@services/auth/auth-service';
import { useAppDispatch } from '@/store';

const { Sider, Content } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
  background: '#002141'
};

const DefaultLayout = () => {
  const dispatch = useAppDispatch();
  const { isFetching, data, isSuccess } = useAuthUserQuery();
  
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [lastOpenKeys, setLastOpenKeys] = useState<string[]>([]);
  
  useEffect(() => {
    if (isSuccess && data) {
      const newUserData = Object.assign({}, data) as UserDetails;
      dispatch(setUser(newUserData));
    }
  }, [isFetching, data, isSuccess]);

  if (isFetching && !isSuccess) {
    return <PageLoader />;
  }

  return (
    <MenuContext.Provider value={{ collapsed, setCollapsed, lastOpenKeys, setLastOpenKeys }}>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={siderStyle}
          width={280}
        >
          <Flex justify="center" align="center" className="!m-4" vertical>
            <Image
              src={Logo}
              alt="Logo"
              width={collapsed ? 50 : 70}
              preview={false}
            />
            {!collapsed && (
              <Typography.Title level={5} className="!text-gray-300 !ml-2 !mt-4 !mb-0">
                {__APP_TITLE__}
              </Typography.Title>
            )}
          </Flex>
          <Sidebar />
        </Sider>
        <Layout>
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
          
          <Content className="m-6 mt-0">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </MenuContext.Provider>
  );
};

export default DefaultLayout;

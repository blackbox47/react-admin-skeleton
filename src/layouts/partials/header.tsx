import { Button, Flex, Input, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined } from '@ant-design/icons';
import ProfileMenu from '@layouts/partials/profile-menu';

const { Header: AuthHeader } = Layout;

const Header = ({
  collapsed,
  setCollapsed
}: {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}) => {
  return (
    <AuthHeader
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 99,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
      }}
      className="!px-6 !py-10"
    >
      <Flex justify="space-between" align="center" className="w-full">
        <Flex gap={10} align="center">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          
          <div className="w-[300px]">
            <Input
              size="large"
              className="!rounded-full"
              placeholder="Search here.."
              prefix={<SearchOutlined />}
            />
          </div>
        </Flex>
        
        <ProfileMenu />
      </Flex>
    </AuthHeader>
  );
};

export default Header;

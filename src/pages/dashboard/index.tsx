import { Typography } from 'antd';
import PageContent from '@layouts/partials/page-content';
import PageHeader from '@layouts/partials/page-header';
import { useAppSelector } from '@/store';

const Dashboard = () => {
  const user = useAppSelector((state) => state.user);
  
  return (
    <>
      <PageHeader
        title="Dashboard"
        subTitle={`Welcome, ${user?.name || 'User'}! - Analytical insights for your system`}
      />
      <PageContent>
        <Typography.Text>Welcome to {__APP_TITLE__}!</Typography.Text>
      </PageContent>
    </>
  );
};

export default Dashboard;

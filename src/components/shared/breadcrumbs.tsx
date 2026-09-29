import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { Breadcrumb, Col, Row } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import routes from '@/routes/routes';

const Breadcrumbs = () => {
  const location = useLocation();
  const breadcrumbs = useBreadcrumbs(routes);
  const match = breadcrumbs[breadcrumbs.length - 1]?.match;
  const route = match?.route;
  
  const title = route?.props?.title ? (typeof route?.props?.title === 'function'
    ? route?.props?.title(match?.params) : route?.props?.title) : __APP_TITLE__;
  
  const breadcrumbItems = breadcrumbs.map(({ match, breadcrumb }) => ({
    key: match.pathname,
    title: match.pathname !== location.pathname ? (
      <Link to={match.pathname}>{breadcrumb}</Link>
    ) : (
      <div>{breadcrumb}</div>
    ),
  }));
  
  useEffect(() => {
    window.document.title = title;
  }, [title]);
  
  return breadcrumbItems && location.pathname !== '/' && (
    <div className="pt-2">
      <Row>
        <Col span={24}>
          <Breadcrumb items={breadcrumbItems} separator={<RightOutlined />} />
        </Col>
      </Row>
    </div>
  );
};

export default Breadcrumbs;

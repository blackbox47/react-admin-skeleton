import { useEffect } from 'react';
import { Card, Col, Form, Input, Row, Select } from 'antd';
import { useRoleOptions } from '@hooks/use-roles';
import { USER_STATUS } from '@utils/constants';
import { prepareOptions } from '@utils/helpers';
import { useAppSelector } from '@/store';

const UserDetails = () => {
  const [form] = Form.useForm();
  const user = useAppSelector((state) => state.user);
  const { roleOptions } = useRoleOptions();
  
  useEffect(() => {
    form.setFieldsValue({
      ...user
    });
  }, [user]);
  
  return (
    <Card title="User Details">
      <Form form={form} layout="vertical">
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="Name" name="name">
              <Input disabled />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Username" name="username">
              <Input disabled />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Email" name="email">
              <Input disabled />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Roles" name="role_ids">
              <Select
                mode="multiple"
                options={roleOptions}
                disabled
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Status" name="status">
              <Select options={prepareOptions(USER_STATUS)} disabled />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default UserDetails;

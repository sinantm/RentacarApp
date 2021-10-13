import { Row, Col } from "reactstrap";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Cars, { CarsPropsTypes } from "Data/Cars";

const { Meta } = Card;

const CarCard = (props: CarsPropsTypes) => {
  return (
    <Col lg="6" xl="3">
      <Card
        style={{ width: 300 }}
        className="mt-3"
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description={props.Macer}
        />
      </Card>
    </Col>
  );
};

export default CarCard;

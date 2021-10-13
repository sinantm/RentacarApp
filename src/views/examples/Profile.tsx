import { faUserAlt, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Input } from "antd";
import { AppUser, UserApi, UserApiFactory, UserDTO } from "api";
import Toastifys from "components/Toastifys";
import useData from "hooks/useData";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import UserHeader from "../../components/Headers/UserHeaders";

const Profile = () => {
  const [form] = Form.useForm();
  const api = UserApiFactory();

  const userId = "4e19f5d1-4431-48e7-acbf-a669fe78ed8b";

  const userGetData = useData<AppUser>(() => api.userUserIdGet(userId), true);

  const initialValues = () => {
    return {
      userName: userGetData.data?.userName,
      phoneNumber: userGetData.data?.phoneNumber,
      email: userGetData.data?.email,
    };
  };

  console.log(`userData`, userGetData.data);
  userGetData.data && form.setFieldsValue(initialValues());

  const putUser = async () => {
    const values: UserDTO = await form.validateFields();
    api.userUserIdPut(userGetData.data?.id!, values).then(() =>
      Toastifys({
        title: `Kullanıcı Başarı İle Güncellendi.`,
        type: "info",
        position: "top-right",
      })
    );
  };

  return (
    <>
      <UserHeader />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <CardHeader className="border-0 pt-8 pt-md-4 pb-0 pb-md-5">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={
                            require("../../assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="description">
                          Eklediği Araç Sayısı
                        </span>
                        <span className="heading">22</span>
                      </div>
                      <div>
                        <span className="description">Kayıt Tarihi</span>
                        <span className="heading">89</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    Jessica Jones
                    <span className="font-weight-light">, 27</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Bucharest, Romania
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    University of Computer Science
                  </div>
                  <hr className="my-4" />
                  <p>
                    Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    Nick Murphy — writes, performs and records all of his own
                    music.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Profil Bilgileri</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button color="success" size="sm" onClick={putUser}>
                      Kaydet
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form
                  form={form}
                  name="Account"
                  layout="vertical"
                  initialValues={{ remember: true }}
                >
                  <Form.Item
                    name={"userName"}
                    label="Kul. Adı"
                    rules={[{ required: true }]}
                  >
                    <Input
                      prefix={
                        <FontAwesomeIcon
                          style={{ marginRight: 5 }}
                          icon={faUserAlt}
                        />
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    name={"email"}
                    label="E-mail"
                    rules={[{ type: "email" }]}
                  >
                    <Input
                      prefix={
                        <FontAwesomeIcon
                          style={{ marginRight: 5 }}
                          icon={faMailBulk}
                        />
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    name={"phoneNumber"}
                    label="Telefon"
                    rules={[{ required: true }]}
                  >
                    <Input
                      prefix={
                        <FontAwesomeIcon
                          style={{ marginRight: 5 }}
                          icon={faUserAlt}
                        />
                      }
                    />
                  </Form.Item>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;

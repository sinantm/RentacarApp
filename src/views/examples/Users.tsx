import { Button, Popconfirm, Table, Tooltip } from "antd";
import { Card, CardHeader, Container, Row, CardBody, Col } from "reactstrap";
import Header from "../../components/Headers/Headers";
import {
  faUserEdit,
  faTrash,
  faUserAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AddUserModal, { AddUserPropType } from "components/AddUserModal";
import { UserApiFactory, AppUser } from "api";
import useData from "hooks/useData";
import Preview from "components/Preview";
import { PreviewUserModal } from "components/PreviewUserModal";
import { AnyType } from "interfaces/type";
import UpdateUserModal, {
  UpdateUserPropType,
} from "components/UpdateUserModal";

const UsersTables = () => {
  const [isPreviewModalVisible, setIsPreviewModalVisible] =
    useState<boolean>(false);

  const api = UserApiFactory();
  const userData = useData<Array<AppUser>>(api.userUsersGet, true);
  const [userPreviewData, setUserPreviewData] = useState<AppUser>();

  const [addUserModalState, setAddUserModalState] = useState<AddUserPropType>({
    visible: false,
    titleModal: "",
  });

  const [updateUserModalState, setUpdateUserModalState] =
    useState<UpdateUserPropType>({
      visible: false,
      titleModal: "",
      userDataState: undefined,
    });

  const handleCancelPreviewModal = () => {
    setIsPreviewModalVisible(false);
  };

  const searchUser = (userid: any) => {
    api.userUserIdGet(userid).then((res) => setUserPreviewData(res.data));
    setIsPreviewModalVisible(true);
  };

  const setData = () => {
    setTimeout(() => userData.execute(), 500);
  };

  const deleteUser = (userId: AnyType) => {
    api.userUserIdDelete(userId);

    setData();
  };

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <Col lg="10">
                    <h3 className="mb-0">Kullanıcılar</h3>
                  </Col>
                  <Col lg="2" style={{ textAlign: "right" }}>
                    <AddUserModal
                      userModalStates={addUserModalState}
                      setData={setData}
                      onCancel={() =>
                        setAddUserModalState({
                          visible: false,
                          titleModal: "Kullanıcı Ekle",
                        })
                      }
                    />
                    <UpdateUserModal
                      userModalStates={updateUserModalState}
                      setData={setData}
                      onCancel={() =>
                        setUpdateUserModalState({
                          visible: false,
                          userDataState: undefined,
                          titleModal: "Kullanıcı Güncelle",
                        })
                      }
                    />
                    <Button
                      style={{ marginRight: 10 }}
                      onClick={userData.execute}
                      type="primary"
                      shape="round"
                      icon={
                        <FontAwesomeIcon
                          style={{ marginRight: 5 }}
                          color="#72ff21"
                          icon={faSearch}
                        />
                      }
                      size="middle"
                    >
                      Yenile
                    </Button>
                    <Button
                      onClick={() =>
                        setAddUserModalState({
                          visible: true,
                          titleModal: "Yeni Kullanıcı Ekle",
                        })
                      }
                      type="primary"
                      shape="round"
                      icon={
                        <FontAwesomeIcon
                          style={{ marginRight: 5 }}
                          color="#72ff21"
                          icon={faUserAlt}
                        />
                      }
                      size="middle"
                    >
                      Ekle
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <PreviewUserModal
                  visible={isPreviewModalVisible}
                  data={userPreviewData!}
                  closeModal={handleCancelPreviewModal}
                />
                <Table
                  loading={userData.loading}
                  columns={[
                    {
                      title: "",
                      key: "search",
                      width: 65,
                      render: (text, record) => {
                        return (
                          <Preview onClick={() => searchUser(record.id)} />
                        );
                      },
                    },
                    {
                      title: "Ad",
                      key: "userName",
                      dataIndex: "userName",
                    },
                    {
                      title: "E-mail",
                      key: "email",
                      dataIndex: "email",
                    },
                    {
                      title: "Telefon",
                      key: "phoneNumber",
                      dataIndex: "phoneNumber",
                    },
                    {
                      title: "İşelemler",
                      key: "proses",
                      align: "right",
                      width: 100,
                      render: (text, record) => {
                        return (
                          <>
                            <Tooltip placement="top" title={"Düzenle"}>
                              <Button
                                type="link"
                                shape="circle"
                                onClick={() =>
                                  setUpdateUserModalState({
                                    visible: true,
                                    userDataState: record,
                                    titleModal: "Kaydı Güncelle",
                                  })
                                }
                                icon={
                                  <FontAwesomeIcon
                                    color="orange"
                                    icon={faUserEdit}
                                  />
                                }
                                size="small"
                              />
                            </Tooltip>
                            {" | "}
                            <Tooltip placement="top" title={"Sil"}>
                              <Popconfirm
                                title="Kayıt Silinecek Devam Edilsin Mi?"
                                onConfirm={() => deleteUser(record.id)}
                                okText="Evet"
                                cancelText="Hayır"
                              >
                                <Button
                                  type="link"
                                  shape="circle"
                                  icon={
                                    <FontAwesomeIcon
                                      icon={faTrash}
                                      color="red"
                                    />
                                  }
                                  size="small"
                                />
                              </Popconfirm>
                            </Tooltip>
                          </>
                        );
                      },
                    },
                  ]}
                  dataSource={userData.data}
                  rowKey={"id"}
                />
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default UsersTables;

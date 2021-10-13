import {
  faPlus,
  faUserAlt,
  faMailBulk,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, Form, Input, Modal, Radio, Select } from "antd";
import {
  UserApiFactory,
  UserDTO,
  AppUser,
  AuthenticationApiFactory,
  RegisterDTO,
} from "api";
import { useEffect } from "react";
import Toastifys from "./Toastifys";

export interface AddUserPropType {
  titleModal: string;
  visible: boolean;
}

const AddUserModal = ({
  userModalStates: { visible, titleModal /*userDataState: usersDataState*/ },
  onCancel,
  setData,
}: {
  userModalStates: AddUserPropType;
  onCancel: () => void;
  setData: () => void;
}) => {
  //UPDATE
  //const api = UserApiFactory();
  const apiAuth = AuthenticationApiFactory();

  const [form] = Form.useForm();

  const postUser = async () => {
    const values: RegisterDTO = await form.validateFields();
    apiAuth.authenticationRegisterPost(values).then((res) =>
      Toastifys({
        title: `Kullanıcı Başarı İle Eklendi.`,
        type: "success",
        position: "top-right",
      })
    );
    // onCancel();
    // form.resetFields();
    // setData();
  };

  //UPDATE
  // const putUser = async () => {
  //   const values: UserDTO = await form.validateFields();
  //   api
  //     .userUserIdPut(usersDataState?.id!, values)
  //     .then((res) =>
  //       Toastifys({
  //         title: `Kullanıcı Başarı İle Güncellendi.`,
  //         type: "info",
  //         position: "top-right",
  //       })
  //     );
  //   onCancel();
  //   form.resetFields();
  //   setData();
  // };

  const submitForm = async () => {
    try {
      postUser();

      onCancel();
      form.resetFields();
      setData();
    } catch (errorInfo) {
      Toastifys({ title: "Hata", type: "error", position: "top-right" });
      console.log(`error:`, errorInfo);
    }
  };

  //UPDATE
  // const initialValues = () => {
  //   return {
  //     UserName: usersDataState?.userName,
  //     PhoneNumber: usersDataState?.phoneNumber,
  //     Email: usersDataState?.email,
  //     Password: usersDataState?.password,
  //   };
  // };

  // useEffect(() => {
  //   if (visible) {
  //     usersDataState !== undefined
  //       ? form.setFieldsValue(initialValues())
  //       : form.resetFields();
  //   }
  // }, [visible]);

  return (
    <Modal
      title={
        <span>
          <FontAwesomeIcon icon={faPlus} /> {titleModal}
        </span>
      }
      visible={visible}
      onOk={submitForm}
      onCancel={onCancel}
      afterClose={() => {
        onCancel();
        form.resetFields();
      }}
    >
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 18 }}
        name="User"
        //onFinish={onFinish}
      >
        <Form.Item
          name={"userName"}
          label="Kul. Adı"
          rules={[{ required: true }]}
        >
          <Input
            prefix={
              <FontAwesomeIcon style={{ marginRight: 5 }} icon={faUserAlt} />
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
              <FontAwesomeIcon style={{ marginRight: 5 }} icon={faUserAlt} />
            }
          />
        </Form.Item>
        <Form.Item name={"email"} label="E-mail" rules={[{ type: "email" }]}>
          <Input
            prefix={
              <FontAwesomeIcon style={{ marginRight: 5 }} icon={faMailBulk} />
            }
          />
        </Form.Item>
        <Form.Item
          name={"password"}
          label="Parola"
          rules={[{ required: true, message: "Parola zorunlu alandır!" }]}
        >
          <Input.Password
            prefix={
              <FontAwesomeIcon style={{ marginRight: 5 }} icon={faLock} />
            }
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddUserModal;

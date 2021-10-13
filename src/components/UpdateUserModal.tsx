import {
  faPlus,
  faUserAlt,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Input, Modal } from "antd";
import { UserApiFactory, UserDTO, AppUser } from "api";
import { useEffect } from "react";
import Toastifys from "./Toastifys";

export interface UpdateUserPropType {
  titleModal: string;
  visible: boolean;
  userDataState?: AppUser;
}

const UpdateUserModal = ({
  userModalStates: { visible, titleModal, userDataState },
  onCancel,
  setData,
}: {
  userModalStates: UpdateUserPropType;
  onCancel: () => void;
  setData: () => void;
}) => {
  const api = UserApiFactory();

  const [form] = Form.useForm();

  const putUser = async () => {
    const values: UserDTO = await form.validateFields();
    api.userUserIdPut(userDataState?.id!, values).then((res) =>
      Toastifys({
        title: `Kullanıcı Başarı İle Güncellendi.`,
        type: "info",
        position: "top-right",
      })
    );
  };

  const submitForm = async () => {
    try {
      putUser();

      onCancel();
      form.resetFields();
      setData();
    } catch (errorInfo) {
      Toastifys({ title: "Hata", type: "error", position: "top-right" });
      console.log(`error:`, errorInfo);
    }
  };

  //INITIANALVALUES GELMİYOR KONTROL EDİLECEK
  const initialValues = () => {
    return {
      userName: userDataState?.userName,
      phoneNumber: userDataState?.phoneNumber,
      email: userDataState?.email,
    };
  };

  useEffect(() => {
    if (visible) {
      userDataState !== undefined
        ? form.setFieldsValue(initialValues())
        : form.resetFields();
    }
  }, [visible]);

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
      </Form>
    </Modal>
  );
};

export default UpdateUserModal;

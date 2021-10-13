import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Descriptions } from "antd";
import Modal from "antd/lib/modal/Modal";
import { AppUser } from "api";
import React, { memo } from "react";
import CarIsAddStatus from "./CarIsAddStatus";
import Close from "./CloseButton";
import IsAccountStatus from "./IsAccountStatus";

export interface PropType {
  closeModal: () => void;
  visible: boolean;
  data?: AppUser;
}

export const PreviewUserModal = memo(
  ({ closeModal, visible, data }: PropType) => {
    return (
      <Modal
        centered
        title={
          <span>
            <FontAwesomeIcon icon={faHistory} /> {"Kullanıcı Detayı"}
          </span>
        }
        width={500}
        onCancel={closeModal}
        visible={visible}
        footer={[<Close key="close-button" onClick={closeModal} />]}
      >
        <Descriptions column={1} size="small" title="Kullanıcı" bordered>
          <Descriptions.Item label="İd">
            {data ? data!.id : null}
          </Descriptions.Item>
          <Descriptions.Item label="Ad">
            {data ? data!.userName : null}
          </Descriptions.Item>
          <Descriptions.Item label="E-mail">
            {data ? data!.email : null}
          </Descriptions.Item>
          <Descriptions.Item label="Telefon">
            {data ? data!.phoneNumber : null}
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    );
  }
);

import { Badge } from "antd";

export enum IsStatus {
  Aktif = 1,
  Pasif = 2,
  Silinmis = 3,
}

export interface PropsTypes {
  isStatus: IsStatus;
}

const text = (isStatus: IsStatus) => {
  switch (isStatus) {
    case 1:
      return "Aktif";
    case 2:
      return "Pasif";
    case 3:
      return "Silinmiş";
    default:
      return "Bilinmiyor..!";
  }
};

const color = (isStatus: IsStatus) => {
  switch (isStatus) {
    case 1:
      return "success";
    case 2:
      return "warning";
    case 3:
      return "error";
    default:
      return "error";
  }
};

export const IsAccountStatus = ({
  isAccountStatus,
}: {
  isAccountStatus: IsStatus;
}) => {
  const variant = color(isAccountStatus);
  const title = text(isAccountStatus);
  return <Badge status={variant} text={title} />;
};

export default IsAccountStatus;

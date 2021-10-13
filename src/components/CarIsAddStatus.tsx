import { Tag } from "antd";

export interface PropsTypes {
  carIsAdd: boolean;
}

const text = (carIsAdd: boolean) => {
  switch (carIsAdd) {
    case true:
      return "Evet";
    case false:
      return "Hayır";
    default:
      return "Bilinmiyor..!";
  }
};

const color = (carIsAdd: boolean) => {
  switch (carIsAdd) {
    case true:
      return "success";
    case false:
      return "error";
    default:
      return "warning";
  }
};

export const CarIsAddStatus = ({ status }: { status: boolean }) => {
  const variant = color(status);
  const title = text(status);
  return (
    <Tag color={variant} key={"1"}>
      {title.toUpperCase()}
    </Tag>
  );
};

export default CarIsAddStatus;

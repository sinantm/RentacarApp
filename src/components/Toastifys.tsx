import { toast, TypeOptions, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface PropsType {
  title?: string;
  type?: TypeOptions;
  position?: ToastPosition;
}

toast.configure();

const Toastifys = ({ title, type, position }: PropsType) =>
  toast(title, {
    type: type,
    position: position,
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export default Toastifys;

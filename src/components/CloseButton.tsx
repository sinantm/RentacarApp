import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import { Button } from "reactstrap";

export interface ButtonProps {
  size?: "sm" | "md";
  onlyIcon?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export const Close = ({
  disabled,
  onClick,
  size = "sm",
  onlyIcon,
}: ButtonProps) => {
  return (
    <Button
      disabled={disabled}
      size={size}
      onClick={onClick}
      color={"danger"}
      className="btn-labeled"
    >
      <FontAwesomeIcon
        icon={faTimes}
        className={classnames({ "btn-label": !onlyIcon })}
      />
      {!onlyIcon && <span>{"Kapat"}</span>}
    </Button>
  );
};

export default Close;

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "antd";
import OnClickProps from "interfaces/OnClickProps";
export const Preview = ({
  onClick,
  title = "Görüntüle",
}: OnClickProps & { title?: string }) => {
  return (
    <Tooltip trigger="hover" placement="bottom" title={title}>
      <FontAwesomeIcon
        icon={faSearch}
        className={`fa-lg`}
        style={{ cursor: "pointer" }}
        onClick={onClick}
      />
    </Tooltip>
  );
};

export default Preview;

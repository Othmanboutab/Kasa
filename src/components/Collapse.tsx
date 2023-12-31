import { ReactNode, useState } from "react";
import "../styles/component/collapse.scss";

interface Props {
  title: string;
  children: ReactNode;
  className: string;
}
const Collapse = ({ title, children, className }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`collapse-container ${className}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <span>
          {isCollapsed ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )}
        </span>
      </div>
      {!isCollapsed && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;

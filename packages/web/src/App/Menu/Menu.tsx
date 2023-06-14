import { FunctionComponent, ReactNode } from "react";
import styles from "./Menu.module.scss";
import classnames from "classnames/bind";
import { NavLink } from "react-router-dom";

const cx = classnames.bind(styles);

interface MenuItemProps {
  selected?: boolean;
  to: string;
  children: ReactNode;
  onClick?: React.MouseEventHandler;
}

const MenuItem: FunctionComponent<MenuItemProps> = ({
  selected,
  to,
  children,
  onClick,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cx("menu-item", {
          "menu-item--selected": isActive,
        })
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};

interface MenuProps {
  children: ReactNode;
}

const Menu: FunctionComponent<MenuProps> = ({ children }) => {
  return (
    <div className={cx("container")}>
      <div className={cx("content")}>{children}</div>
      <div className={cx("menu")}>
        <MenuItem to="/">List</MenuItem>
        <div className={cx("separator")} />
        <MenuItem to="/new">New</MenuItem>
      </div>
    </div>
  );
};

export default Menu;

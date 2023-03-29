import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
// NavLink hỗ trợ làm active
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

// trong react css k hỗ trợ class vd-vd, nên cần classNames để work
const cx = classNames.bind(styles);
function MenuItem({ title, to, icon, activeIcon }) {
  return (
    // do navlink có cơ chế trùng với href đang để '/' trùng với path hiện tại
    // dùng 1 hàm trả về cái class nên dùng isActive của NavLink
    // sẽ có 1 class default là menu-item, class là class động
    <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('active-icon')}>{activeIcon}</span>
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  // node:  có thể render dc
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node.isRequired,
};
export default MenuItem;

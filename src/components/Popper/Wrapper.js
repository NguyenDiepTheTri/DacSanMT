import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);
// children: thay đổi
// nó sẽ có thêm 1 cái className là .menu-popper
function Wrapper({ children, className }) {
  return <div className={cx('wrapper', className)}>{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
export default Wrapper;

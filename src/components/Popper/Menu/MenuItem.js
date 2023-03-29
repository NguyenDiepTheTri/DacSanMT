import PropTypes from 'prop-types';
// tận dụng đã viết ở ButtonTiktok
import Button from '~/components/Button';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
  // menu-item là class mặc định,class còn lại trong {} tùy theo logic có thể có or k
  const classes = cx('menu-item', {
    separater: data.separate,
  });
  return (
    //   truy xuất các key của mảng MENU_ITEM
    <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}
MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
export default MenuItem;

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggetedAccounts.module.scss';
import ProductItem from './ProductItem';

const cx = classNames.bind(styles);
function SuggetedAccounts({ label }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <ProductItem />
      <ProductItem />
      <ProductItem />

      <p className={cx('more-btn')}>Hiển thị thêm</p>
    </div>
  );
}

SuggetedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};
export default SuggetedAccounts;

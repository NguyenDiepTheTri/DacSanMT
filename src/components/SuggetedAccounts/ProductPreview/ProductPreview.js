import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCandyCane } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './ProductPreview.module.scss';

const cx = classNames.bind(styles);
function ProductPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img className={cx('avatar')} src="https://i.imgur.com/xgvqeYJ.jpg" alt="" />
        <div>
          <Button medium className={cx('follow-btn')}>
            <FontAwesomeIcon icon={faCartShopping} title="Mua ngay" className={cx('cart')} />
          </Button>
        </div>
      </div>

      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>Bánh ít lá gai</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCandyCane} />
        </p>
        <p className={cx('name')}>100.000 đ</p>

        <p className={cx('analytic')}>
          <strong className={cx('value')}>43% </strong>
          <span className={cx('label')}>Giảm giá</span>
          <strong className={cx('value')}>100 </strong>
          <span className={cx('label')}>Đã bán</span>
        </p>
      </div>
    </div>
  );
}
export default ProductPreview;

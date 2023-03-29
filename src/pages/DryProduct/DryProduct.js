import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './DryProduct.module.scss';
import Button from '~/components/Button';
import ProductItem from './ProductItem';

const cx = classNames.bind(styles);
function DryProduct() {
  return (
    <div className={cx('grid-column-10')}>
      {/* Sắp xếp */}
      <div className={cx('home-filter')}>
        <span className={cx('home-filter-label')}>Sắp xếp theo:</span>
        <Button medium>Phổ biến</Button>
        <Button medium primary>
          Mới nhất
        </Button>
        <Button medium>Bán chạy</Button>
        <div className={cx('select-input')}>
          <span className={cx('select-input-label')}>Giá</span>
          <FontAwesomeIcon className={cx('select-input-icon')} icon={faAngleDown} />
          {/* <i class="select-input__icon fas fa-angle-down"></i> */}

          <ul className={cx('select-input-list')}>
            <li className={cx('select-input-item')}>
              <Link className={cx('select-input-link')}>Giá: Thấp đến Cao</Link>
            </li>
            <li className={cx('select-input-item')}>
              <Link href="" className={cx('select-input-link')}>
                Giá: Cao đến Thấp
              </Link>
            </li>
          </ul>
        </div>

        <div className={cx('home-filter-page')}>
          <span className={cx('home-filter-page-num')}>
            <span className={cx('home-filter-page-current')}>1</span>/14
          </span>
          <div className={cx('home-filter-page-control')}>
            <Link
              className={cx('home-filter-page-btn', 'home-link-disabled')}
              onClick={(event) => event.preventDefault()}
            >
              <FontAwesomeIcon className={cx('home-filter-page-icon')} icon={faAngleLeft} />
            </Link>
            <Link href="" className={cx('home-filter-page-btn')}>
              <FontAwesomeIcon icon={faAngleRight} className={cx('home-filter-page-icon')} />
            </Link>
          </div>
        </div>
      </div>
      {/* Product */}
      <ProductItem></ProductItem>

      {/* Pagination */}
      <ul className={cx('pagination', 'home-product__pagination')}>
        <li className={cx('pagination-item')}>
          <Link href="" className={cx('pagination-item__link')}>
            <FontAwesomeIcon icon={faAnglesLeft} className={cx('pagination-item__icon')} />
          </Link>
        </li>

        <li className={cx('pagination-item', 'pagination-item--active')}>
          <Link href="" className={cx('pagination-item__link')}>
            1
          </Link>
        </li>
        <li className={cx('pagination-item')}>
          <Link href="" className={cx('pagination-item__link')}>
            2
          </Link>
        </li>
        <li className={cx('pagination-item')}>
          <Link href="" className={cx('pagination-item__link')}>
            3
          </Link>
        </li>
        <li className={cx('pagination-item')}>
          <Link href="" className={cx('pagination-item__link')}>
            4
          </Link>
        </li>
        <li className={cx('pagination-item')}>
          <Link href="" className={cx('pagination-item__link')}>
            5
          </Link>
        </li>
        <li className={cx('pagination-item')}>
          <Link href="" className={cx('pagination-item__link')}>
            ...
          </Link>
        </li>
        <li className={cx('pagination-item')}>
          <Link href="" className={cx('pagination-item__link')}>
            14
          </Link>
        </li>

        <li className={cx('pagination-item')}>
          <Link href="" className={cx('pagination-item__link')}>
            <FontAwesomeIcon icon={faAnglesRight} className={cx('pagination-item__icon')} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default DryProduct;

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCheck, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

import styles from './Product.module.scss';
import config from '~/config';
const cx = classNames.bind(styles);

function Product() {
  return (
    <div className={cx('home-product')}>
      <div className={cx('grid-row')}>
        <div className={cx('grid-column-2-5', 's-col-full-product')}>
          <div className={cx('home-product-item')}>
            <Link to={config.routest.productDetail}>
              <img
                className={cx('home-product-item-img', 'product-image-mobile')}
                src="https://i.imgur.com/vmntSbB.jpg"
                alt=""
              />
            </Link>
            <h4 className={cx('home-product-item-name')}>Bánh dẻo</h4>
            <div className={cx('home-product-item-price')}>
              <span className={cx('home-product-item-price-old')}>1.200.000đ</span>
              <span className={cx('home-product-item-price-current')}>999.000đ</span>
            </div>
            <div className={cx('home-product-item-action')}>
              <span className={cx('home-product-item-like', 'home-product-item-like--liked')}>
                <FontAwesomeIcon className={cx('home-product-item-like-icon-empty')} icon={faHeart} />
                <FontAwesomeIcon className={cx('home-product-item-like-icon-fill')} icon={faHeart} />
              </span>
              <div className={cx('home-product-item-rating')}>
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className={cx('home-product-item-sold')}>88 đã bán</span>
            </div>
            <div className={cx('home-product-item__origin')}>
              <span className={cx('home-product-item__brand')}>Whoo</span>
              <button className={cx('action-btn')}>
                <FontAwesomeIcon icon={faCartShopping} style={{ color: '#1aff1a' }} title="Add to Cart" />
              </button>
            </div>
            <div className={cx('home-product-item__favourite')}>
              <FontAwesomeIcon className={cx('home-product-item__favourite-check')} icon={faCheck} />
              <span>Yêu thích</span>
            </div>
            <div className={cx('home-product-item__sale-off')}>
              <span className={cx('home-product-item__sale-off-percent')}>43%</span>
              <span className={cx('home-product-item__sale-off-label')}>GIẢM</span>
            </div>
          </div>
        </div>

        <div className={cx('grid-column-2-5', 's-col-full-product')}>
          <div className={cx('home-product-item')}>
            <Link to={config.routest.productDetail}>
              <img
                className={cx('home-product-item-img', 'product-image-mobile')}
                src="https://i.imgur.com/xgvqeYJ.jpg"
                alt=""
              />
            </Link>
            <h4 className={cx('home-product-item-name')}>Bánh ít</h4>
            <div className={cx('home-product-item-price')}>
              <span className={cx('home-product-item-price-old')}>1.200.000đ</span>
              <span className={cx('home-product-item-price-current')}>999.000đ</span>
            </div>
            <div className={cx('home-product-item-action')}>
              <span className={cx('home-product-item-like', 'home-product-item-like--liked')}>
                <FontAwesomeIcon className={cx('home-product-item-like-icon-empty')} icon={faHeart} />
                <FontAwesomeIcon className={cx('home-product-item-like-icon-fill')} icon={faHeart} />
              </span>
              <div className={cx('home-product-item-rating')}>
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className={cx('home-product-item-sold')}>100 đã bán</span>
            </div>
            <div className={cx('home-product-item__origin')}>
              <span className={cx('home-product-item__brand')}>Whoo</span>
              <button className={cx('action-btn')}>
                <FontAwesomeIcon icon={faCartShopping} style={{ color: '#1aff1a' }} title="Add to Cart" />
              </button>
            </div>
            <div className={cx('home-product-item__favourite')}>
              <FontAwesomeIcon className={cx('home-product-item__favourite-check')} icon={faCheck} />
              <span>Yêu thích</span>
            </div>
            <div className={cx('home-product-item__sale-off')}>
              <span className={cx('home-product-item__sale-off-percent')}>43%</span>
              <span className={cx('home-product-item__sale-off-label')}>GIẢM</span>
            </div>
          </div>
        </div>

        <div className={cx('grid-column-2-5', 's-col-full-product')}>
          <div className={cx('home-product-item')}>
            <Link to={config.routest.productDetail}>
              <img
                className={cx('home-product-item-img', 'product-image-mobile')}
                src="https://i.imgur.com/Qtq77vE.jpg"
                alt=""
              />
            </Link>
            <h4 className={cx('home-product-item-name')}>Bánh dừa</h4>
            <div className={cx('home-product-item-price')}>
              <span className={cx('home-product-item-price-old')}>1.200.000đ</span>
              <span className={cx('home-product-item-price-current')}>999.000đ</span>
            </div>
            <div className={cx('home-product-item-action')}>
              <span className={cx('home-product-item-like', 'home-product-item-like--liked')}>
                <FontAwesomeIcon className={cx('home-product-item-like-icon-empty')} icon={faHeart} />
                <FontAwesomeIcon className={cx('home-product-item-like-icon-fill')} icon={faHeart} />
              </span>
              <div className={cx('home-product-item-rating')}>
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className={cx('home-product-item-sold')}>88 đã bán</span>
            </div>
            <div className={cx('home-product-item__origin')}>
              <span className={cx('home-product-item__brand')}>Whoo</span>
              <button className={cx('action-btn')}>
                <FontAwesomeIcon icon={faCartShopping} style={{ color: '#1aff1a' }} title="Add to Cart" />
              </button>
            </div>
            <div className={cx('home-product-item__favourite')}>
              <FontAwesomeIcon className={cx('home-product-item__favourite-check')} icon={faCheck} />
              <span>Yêu thích</span>
            </div>
            <div className={cx('home-product-item__sale-off')}>
              <span className={cx('home-product-item__sale-off-percent')}>43%</span>
              <span className={cx('home-product-item__sale-off-label')}>GIẢM</span>
            </div>
          </div>
        </div>

        <div className={cx('grid-column-2-5', 's-col-full-product')}>
          <div className={cx('home-product-item')}>
            <Link to={config.routest.productDetail}>
              <img
                className={cx('home-product-item-img', 'product-image-mobile')}
                src="https://i.imgur.com/go3TuYt.jpg"
                alt=""
              />
            </Link>
            <h4 className={cx('home-product-item-name')}>Bánh rế</h4>
            <div className={cx('home-product-item-price')}>
              <span className={cx('home-product-item-price-old')}>1.200.000đ</span>
              <span className={cx('home-product-item-price-current')}>999.000đ</span>
            </div>
            <div className={cx('home-product-item-action')}>
              <span className={cx('home-product-item-like', 'home-product-item-like--liked')}>
                <FontAwesomeIcon className={cx('home-product-item-like-icon-empty')} icon={faHeart} />
                <FontAwesomeIcon className={cx('home-product-item-like-icon-fill')} icon={faHeart} />
              </span>
              <div className={cx('home-product-item-rating')}>
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className={cx('home-product-item-sold')}>88 đã bán</span>
            </div>
            <div className={cx('home-product-item__origin')}>
              <span className={cx('home-product-item__brand')}>Whoo</span>
              <button className={cx('action-btn')}>
                <FontAwesomeIcon icon={faCartShopping} style={{ color: '#1aff1a' }} title="Add to Cart" />
              </button>
            </div>
            <div className={cx('home-product-item__favourite')}>
              <FontAwesomeIcon className={cx('home-product-item__favourite-check')} icon={faCheck} />
              <span>Yêu thích</span>
            </div>
            <div className={cx('home-product-item__sale-off')}>
              <span className={cx('home-product-item__sale-off-percent')}>43%</span>
              <span className={cx('home-product-item__sale-off-label')}>GIẢM</span>
            </div>
          </div>
        </div>

        <div className={cx('grid-column-2-5', 's-col-full-product')}>
          <div className={cx('home-product-item')}>
            <Link to={config.routest.productDetail}>
              <img
                className={cx('home-product-item-img', 'product-image-mobile')}
                src="https://i.imgur.com/c5O6bta.jpg"
                alt=""
              />
            </Link>
            <h4 className={cx('home-product-item-name')}>Bánh tráng</h4>
            <div className={cx('home-product-item-price')}>
              <span className={cx('home-product-item-price-old')}>1.200.000đ</span>
              <span className={cx('home-product-item-price-current')}>999.000đ</span>
            </div>
            <div className={cx('home-product-item-action')}>
              <span className={cx('home-product-item-like', 'home-product-item-like--liked')}>
                <FontAwesomeIcon className={cx('home-product-item-like-icon-empty')} icon={faHeart} />
                <FontAwesomeIcon className={cx('home-product-item-like-icon-fill')} icon={faHeart} />
              </span>
              <div className={cx('home-product-item-rating')}>
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className={cx('home-product-item-sold')}>88 đã bán</span>
            </div>
            <div className={cx('home-product-item__origin')}>
              <span className={cx('home-product-item__brand')}>Whoo</span>
              <button className={cx('action-btn')}>
                <FontAwesomeIcon icon={faCartShopping} style={{ color: '#1aff1a' }} title="Add to Cart" />
              </button>
            </div>
            <div className={cx('home-product-item__favourite')}>
              <FontAwesomeIcon className={cx('home-product-item__favourite-check')} icon={faCheck} />
              <span>Yêu thích</span>
            </div>
            <div className={cx('home-product-item__sale-off')}>
              <span className={cx('home-product-item__sale-off-percent')}>43%</span>
              <span className={cx('home-product-item__sale-off-label')}>GIẢM</span>
            </div>
          </div>
        </div>

        <div className={cx('grid-column-2-5', 's-col-full-product')}>
          <div className={cx('home-product-item')}>
            <Link to={config.routest.productDetail}>
              <img
                className={cx('home-product-item-img', 'product-image-mobile')}
                src="https://i.imgur.com/UiTZqoJ.jpg"
                alt=""
              />
            </Link>
            <h4 className={cx('home-product-item-name')}>Bánh cu đơ</h4>
            <div className={cx('home-product-item-price')}>
              <span className={cx('home-product-item-price-old')}>1.200.000đ</span>
              <span className={cx('home-product-item-price-current')}>999.000đ</span>
            </div>
            <div className={cx('home-product-item-action')}>
              <span className={cx('home-product-item-like', 'home-product-item-like--liked')}>
                <FontAwesomeIcon className={cx('home-product-item-like-icon-empty')} icon={faHeart} />
                <FontAwesomeIcon className={cx('home-product-item-like-icon-fill')} icon={faHeart} />
              </span>
              <div className={cx('home-product-item-rating')}>
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className={cx('home-product-item-sold')}>88 đã bán</span>
            </div>
            <div className={cx('home-product-item__origin')}>
              <span className={cx('home-product-item__brand')}>Whoo</span>
              <button className={cx('action-btn')}>
                <FontAwesomeIcon icon={faCartShopping} style={{ color: '#1aff1a' }} title="Add to Cart" />
              </button>
            </div>
            <div className={cx('home-product-item__favourite')}>
              <FontAwesomeIcon className={cx('home-product-item__favourite-check')} icon={faCheck} />
              <span>Yêu thích</span>
            </div>
            <div className={cx('home-product-item__sale-off')}>
              <span className={cx('home-product-item__sale-off-percent')}>43%</span>
              <span className={cx('home-product-item__sale-off-label')}>GIẢM</span>
            </div>
          </div>
        </div>

        <div className={cx('grid-column-2-5', 's-col-full-product')}>
          <div className={cx('home-product-item')}>
            <Link to={config.routest.productDetail}>
              <img
                className={cx('home-product-item-img', 'product-image-mobile')}
                src="https://i.imgur.com/VT21QD1.jpg"
                alt=""
              />
            </Link>
            <h4 className={cx('home-product-item-name')}>Bánh đậu xanh</h4>
            <div className={cx('home-product-item-price')}>
              <span className={cx('home-product-item-price-old')}>1.200.000đ</span>
              <span className={cx('home-product-item-price-current')}>999.000đ</span>
            </div>
            <div className={cx('home-product-item-action')}>
              <span className={cx('home-product-item-like', 'home-product-item-like--liked')}>
                <FontAwesomeIcon className={cx('home-product-item-like-icon-empty')} icon={faHeart} />
                <FontAwesomeIcon className={cx('home-product-item-like-icon-fill')} icon={faHeart} />
              </span>
              <div className={cx('home-product-item-rating')}>
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className={cx('home-product-item-sold')}>88 đã bán</span>
            </div>
            <div className={cx('home-product-item__origin')}>
              <span className={cx('home-product-item__brand')}>Whoo</span>
              <button className={cx('action-btn')}>
                <FontAwesomeIcon icon={faCartShopping} style={{ color: '#1aff1a' }} title="Add to Cart" />
              </button>
            </div>
            <div className={cx('home-product-item__favourite')}>
              <FontAwesomeIcon className={cx('home-product-item__favourite-check')} icon={faCheck} />
              <span>Yêu thích</span>
            </div>
            <div className={cx('home-product-item__sale-off')}>
              <span className={cx('home-product-item__sale-off-percent')}>43%</span>
              <span className={cx('home-product-item__sale-off-label')}>GIẢM</span>
            </div>
          </div>
        </div>

        <div className={cx('grid-column-2-5', 's-col-full-product')}>
          <div className={cx('home-product-item')}>
            <Link to={config.routest.productDetail}>
              <img
                className={cx('home-product-item-img', 'product-image-mobile')}
                src="https://i.imgur.com/vGoZpkl.jpg"
                alt=""
              />
            </Link>
            <h4 className={cx('home-product-item-name')}>Bánh xu xê</h4>
            <div className={cx('home-product-item-price')}>
              <span className={cx('home-product-item-price-old')}>1.200.000đ</span>
              <span className={cx('home-product-item-price-current')}>999.000đ</span>
            </div>
            <div className={cx('home-product-item-action')}>
              <span className={cx('home-product-item-like', 'home-product-item-like--liked')}>
                <FontAwesomeIcon className={cx('home-product-item-like-icon-empty')} icon={faHeart} />
                <FontAwesomeIcon className={cx('home-product-item-like-icon-fill')} icon={faHeart} />
              </span>
              <div className={cx('home-product-item-rating')}>
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} className={cx('home-product-item__star--gold')} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className={cx('home-product-item-sold')}>88 đã bán</span>
            </div>
            <div className={cx('home-product-item__origin')}>
              <span className={cx('home-product-item__brand')}>Whoo</span>
              <button className={cx('action-btn')}>
                <FontAwesomeIcon icon={faCartShopping} style={{ color: '#1aff1a' }} title="Add to Cart" />
              </button>
            </div>
            <div className={cx('home-product-item__favourite')}>
              <FontAwesomeIcon className={cx('home-product-item__favourite-check')} icon={faCheck} />
              <span>Yêu thích</span>
            </div>
            <div className={cx('home-product-item__sale-off')}>
              <span className={cx('home-product-item__sale-off-percent')}>43%</span>
              <span className={cx('home-product-item__sale-off-label')}>GIẢM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCheck, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

import styles from './NemProduct.module.scss';
import config from '~/config';
const cx = classNames.bind(styles);

function ProductItem() {
  return (
    <div className={cx('home-product')}>
      <div className={cx('grid-row')}>
        <div className={cx('grid-column-2-5')}>
          <div className={cx('home-product-item')}>
            <Link to={config.routest.productDetail}>
              <img className={cx('home-product-item-img')} src="https://i.imgur.com/MCCtdYI.jpg" alt="" />
            </Link>
            <h4 className={cx('home-product-item-name')}>Chả bò</h4>
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

        <div className={cx('grid-column-2-5')}>
          <div className={cx('home-product-item')}>
            <Link to={config.routest.productDetail}>
              <img className={cx('home-product-item-img')} src="https://i.imgur.com/8SElN0S.jpg" alt="" />
            </Link>
            <h4 className={cx('home-product-item-name')}>Chả cá Quy Nhơn</h4>
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

        <div className={cx('grid-column-2-5')}>
          <div className={cx('home-product-item')}>
            <Link to={config.routest.productDetail}>
              <img className={cx('home-product-item-img')} src="https://i.imgur.com/02HlCiW.jpg" alt="" />
            </Link>
            <h4 className={cx('home-product-item-name')}>Chả cá thu</h4>
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

        <div className={cx('grid-column-2-5')}>
          <div className={cx('home-product-item')}>
            <Link to={config.routest.productDetail}>
              <img className={cx('home-product-item-img')} src="https://i.imgur.com/4pphBli.jpg" alt="" />
            </Link>
            <h4 className={cx('home-product-item-name')}>Chả cốm</h4>
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

        <div className={cx('grid-column-2-5')}>
          <div className={cx('home-product-item')}>
            <Link to={config.routest.productDetail}>
              <img className={cx('home-product-item-img')} src="https://i.imgur.com/2oRpFQt.jpg" alt="" />
            </Link>
            <h4 className={cx('home-product-item-name')}>Chả giò miền Trung</h4>
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

        <div className={cx('grid-column-2-5')}>
          <div className={cx('home-product-item')}>
            <Link to={config.routest.productDetail}>
              <img className={cx('home-product-item-img')} src="https://i.imgur.com/UfCpWOa.jpg" alt="" />
            </Link>
            <h4 className={cx('home-product-item-name')}>Chả lụa</h4>
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

        <div className={cx('grid-column-2-5')}>
          <div className={cx('home-product-item')}>
            <Link to={config.routest.productDetail}>
              <img className={cx('home-product-item-img')} src="https://i.imgur.com/zyw7a1a.jpg" alt="" />
            </Link>
            <h4 className={cx('home-product-item-name')}>Nem Bình Định</h4>
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

        <div className={cx('grid-column-2-5')}>
          <div className={cx('home-product-item')}>
            <Link to={config.routest.productDetail}>
              <img className={cx('home-product-item-img')} src="https://i.imgur.com/qAntSie.jpg" alt="" />
            </Link>
            <h4 className={cx('home-product-item-name')}>Nem chợ huyện</h4>
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
export default ProductItem;

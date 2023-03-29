import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional css tippy

import styles from './Cart.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Cart() {
  return (
    //   <div>
    //       <Tippy >
    //      </Tippy>
    //   </div>
    // <!-- Cart Layout -->
    <div className={cx('header__cart')}>
      <div className={cx('header__cart-wrap')}>
        <div className={cx('header__cart-list')}>
          <img src="" alt="No cart" className={cx('header__cart-no-cart-img')} />
          <span className={cx('header__cart-list-no-cart-message')}>Chưa có sản phẩm</span>

          <h4 className={cx('header__cart-heading')}>Sản phẩm đã thêm</h4>
          <ul className={cx('header__cart-list-item')}>
            {/* <!-- Cart item --> */}
            <li className={cx('header__cart-item')}>
              <img
                src="https://photo-baomoi.bmcdn.me/w300_r3x2_sm/2023_03_06_194_45214174/e2af142f1162f83ca173.jpg"
                alt=""
                className={cx('header__cart-img')}
              />
              <div className={cx('header__cart-item-info')}>
                <div className={cx('header__cart-item-head')}>
                  <h5 className={cx('header__cart-item-name')}>
                    Bộ kem đặc trị vùng mắt bộ kem đặc trị vùng mắt bộ kem đặc trị vùng mắt bộ kem đặc trị vùng mắt bộ
                    kem đặc trị vùng mắt
                  </h5>
                  <div className={cx('header__cart-item-price-wrap')}>
                    <span className={cx('header__cart-item-price')}>2.000.000</span>
                    <span className={cx('header__cart-item-multiply')}>X</span>
                    <span className={cx('header__cart-item-qnt')}>2</span>
                  </div>
                </div>
                <div className={cx('header__cart-item-body')}>
                  <span className={cx('header__cart-item-description')}>Phân loại: Bạc</span>
                  <span className={cx('header__cart-item-remove')}>Xóa</span>
                </div>
              </div>
            </li>

            <li className={cx('header__cart-item')}>
              <img src="https://i.imgur.com/YD4r9cj.jpg" alt="" className={cx('header__cart-img')} />
              <div className={cx('header__cart-item-info')}>
                <div className={cx('header__cart-item-head')}>
                  <h5 className={cx('header__cart-item-name')}>Bộ kem đặc trị vùng mắt</h5>
                  <div className={cx('header__cart-item-price-wrap')}>
                    <span className={cx('header__cart-item-price')}>2.000.000</span>
                    <span className={cx('header__cart-item-multiply')}>X</span>
                    <span className={cx('header__cart-item-qnt')}>2</span>
                  </div>
                </div>
                <div className={cx('header__cart-item-body')}>
                  <span className={cx('header__cart-item-description')}>Phân loại: Bạc</span>
                  <span className={cx('header__cart-item-remove')}>Xóa</span>
                </div>
              </div>
            </li>

            <li className={cx('header__cart-item')}>
              <img src="./assets/img/no-cart.png" alt="" className={cx('header__cart-img')} />
              <div className={cx('header__cart-item-info')}>
                <div className={cx('header__cart-item-head')}>
                  <h5 className={cx('header__cart-item-name')}>Bộ kem đặc trị vùng mắt</h5>
                  <div className={cx('header__cart-item-price-wrap')}>
                    <span className={cx('header__cart-item-price')}>2.000.000</span>
                    <span className={cx('header__cart-item-multiply')}>X</span>
                    <span className={cx('header__cart-item-qnt')}>2</span>
                  </div>
                </div>
                <div className={cx('header__cart-item-body')}>
                  <span className={cx('header__cart-item-description')}>Phân loại: Bạc</span>
                  <span className={cx('header__cart-item-remove')}>Xóa</span>
                </div>
              </div>
            </li>

            <li className={cx('header__cart-item')}>
              <img src="./assets/img/gg_play.png" alt="" className={cx('header__cart-img')} />
              <div className={cx('header__cart-item-info')}>
                <div className={cx('header__cart-item-head')}>
                  <h5 className={cx('header__cart-item-name')}>Bộ kem đặc trị vùng mắt</h5>
                  <div className={cx('header__cart-item-price-wrap')}>
                    <span className={cx('header__cart-item-price')}>2.000.000</span>
                    <span className={cx('header__cart-item-multiply')}>X</span>
                    <span className={cx('header__cart-item-qnt')}>2</span>
                  </div>
                </div>
                <div className={cx('header__cart-item-body')}>
                  <span className={cx('header__cart-item-description')}>Phân loại: Bạc</span>
                  <span className={cx('header__cart-item-remove')}>Xóa</span>
                </div>
              </div>
            </li>

            <li className={cx('header__cart-item')}>
              <img src="./assets/img/qr_code.png" alt="" className={cx('header__cart-img')} />
              <div className={cx('header__cart-item-info')}>
                <div className={cx('header__cart-item-head')}>
                  <h5 className={cx('header__cart-item-name')}>Bộ kem đặc trị vùng mắt</h5>
                  <div className={cx('header__cart-item-price-wrap')}>
                    <span className={cx('header__cart-item-price')}>2.000.000</span>
                    <span className={cx('header__cart-item-multiply')}>X</span>
                    <span className={cx('header__cart-item-qnt')}>2</span>
                  </div>
                </div>
                <div className={cx('header__cart-item-body')}>
                  <span className={cx('header__cart-item-description')}>Phân loại: Bạc</span>
                  <span className={cx('header__cart-item-remove')}>Xóa</span>
                </div>
              </div>
            </li>

            <li className={cx('header__cart-item')}>
              <img src="./assets/img/no-cart.png" alt="" className={cx('header__cart-img')} />
              <div className={cx('header__cart-item-info')}>
                <div className={cx('header__cart-item-head')}>
                  <h5 className={cx('header__cart-item-name')}>Bộ kem đặc trị vùng mắt</h5>
                  <div className={cx('header__cart-item-price-wrap')}>
                    <span className={cx('header__cart-item-price')}>2.000.000</span>
                    <span className={cx('header__cart-item-multiply')}>X</span>
                    <span className={cx('header__cart-item-qnt')}>2</span>
                  </div>
                </div>
                <div className={cx('header__cart-item-body')}>
                  <span className={cx('header__cart-item-description')}>Phân loại: Bạc</span>
                  <span className={cx('header__cart-item-remove')}>Xóa</span>
                </div>
              </div>
            </li>

            <li className={cx('header__cart-item')}>
              <img src="./assets/img/gg_play.png" alt="" className={cx('header__cart-img')} />
              <div className={cx('header__cart-item-info')}>
                <div className={cx('header__cart-item-head')}>
                  <h5 className={cx('header__cart-item-name')}>Bộ kem đặc trị vùng mắt</h5>
                  <div className={cx('header__cart-item-price-wrap')}>
                    <span className={cx('header__cart-item-price')}>2.000.000</span>
                    <span className={cx('header__cart-item-multiply')}>X</span>
                    <span className={cx('header__cart-item-qnt')}>2</span>
                  </div>
                </div>
                <div className={cx('header__cart-item-body')}>
                  <span className={cx('header__cart-item-description')}>Phân loại: Bạc</span>
                  <span className={cx('header__cart-item-remove')}>Xóa</span>
                </div>
              </div>
            </li>

            <li className={cx('header__cart-item')}>
              <img src="./assets/img/qr_code.png" alt="" className={cx('header__cart-img')} />
              <div className={cx('header__cart-item-info')}>
                <div className={cx('header__cart-item-head')}>
                  <h5 className={cx('header__cart-item-name')}>Bộ kem đặc trị vùng mắt</h5>
                  <div className={cx('header__cart-item-price-wrap')}>
                    <span className={cx('header__cart-item-price')}>2.000.000</span>
                    <span className={cx('header__cart-item-multiply')}>X</span>
                    <span className={cx('header__cart-item-qnt')}>2</span>
                  </div>
                </div>
                <div className={cx('header__cart-item-body')}>
                  <span className={cx('header__cart-item-description')}>Phân loại: Bạc</span>
                  <span className={cx('header__cart-item-remove')}>Xóa</span>
                </div>
              </div>
            </li>

            <li className={cx('header__cart-item')}>
              <img src="./assets/img/no-cart.png" alt="" className={cx('header__cart-img')} />
              <div className={cx('header__cart-item-info')}>
                <div className={cx('header__cart-item-head')}>
                  <h5 className={cx('header__cart-item-name')}>Bộ kem đặc trị vùng mắt</h5>
                  <div className={cx('header__cart-item-price-wrap')}>
                    <span className={cx('header__cart-item-price')}>2.000.000</span>
                    <span className={cx('header__cart-item-multiply')}>X</span>
                    <span className={cx('header__cart-item-qnt')}>2</span>
                  </div>
                </div>
                <div className={cx('header__cart-item-body')}>
                  <span className={cx('header__cart-item-description')}>Phân loại: Bạc</span>
                  <span className={cx('header__cart-item-remove')}>Xóa</span>
                </div>
              </div>
            </li>
          </ul>

          {/* <Link href="#" class="header__cart-view-cart btn btn--primary">
            Xem giỏ hàng
          </Link> */}
          <Button primary className={cx('header__cart-view-cart')}>
            Xem giỏ hàng
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

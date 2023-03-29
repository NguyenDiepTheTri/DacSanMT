import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// images dc import từ assets
import images from '~/assets/images';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
function Footer() {
  return (
    <footer className={cx('footer')}>
      <div className={cx('grid-footer')}>
        <div className={cx('grid-row')}>
          <div className={cx('grid-column-2-4', 's-col-full')}>
            <h3 className={cx('footer-heading')}>Chăm sóc khách hàng</h3>
            <ul className={cx('footer-list')}>
              <li className={cx('footer-item')}>
                <Link href="" className={cx('footer-item__link')}>
                  Trung tâm trợ giúp
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <Link href="" className={cx('footer-item__link')}>
                  ShopMall
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <Link href="" className={cx('footer-item__link')}>
                  Hưỡng dẫn mua hàng
                </Link>
              </li>
            </ul>
          </div>
          <div className={cx('grid-column-2-4', 's-col-full')}>
            <h3 className={cx('footer-heading')}>Giới thiệu</h3>
            <ul className={cx('footer-list')}>
              <li className={cx('footer-item')}>
                <Link href="" className={cx('footer-item__link')}>
                  Giới thiệu
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <Link href="" className={cx('footer-item__link')}>
                  Về chúng tôi
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <Link href="" className={cx('footer-item__link')}>
                  Điều khoản
                </Link>
              </li>
            </ul>
          </div>
          <div className={cx('grid-column-2-4', 's-col-full')}>
            <h3 className={cx('footer-heading')}>Danh mục</h3>
            <ul className={cx('footer-list')}>
              <li className={cx('footer-item')}>
                <Link href="" className={cx('footer-item__link')}>
                  Bánh kẹo
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <Link href="" className={cx('footer-item__link')}>
                  Nem chả
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <Link href="" className={cx('footer-item__link')}>
                  Đồ khô
                </Link>
              </li>
            </ul>
          </div>
          <div className={cx('grid-column-2-4', 's-col-full')}>
            <h3 className={cx('footer-heading')}>Theo dõi</h3>
            <ul className={cx('footer-list')}>
              <li className={cx('footer-item')}>
                <Link href="" className={cx('footer-item__link')}>
                  <FontAwesomeIcon icon={faFacebook} className={cx('footer-item__icon')} />
                  Facebook
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <Link href="" className={cx('footer-item__link')}>
                  <FontAwesomeIcon icon={faInstagram} className={cx('footer-item__icon')} />
                  Instagram
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <Link href="" className={cx('footer-item__link')}>
                  <FontAwesomeIcon icon={faLinkedin} className={cx('footer-item__icon')} />
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>
          <div className={cx('grid-column-2-4', 's-col-full')}>
            <h3 className={cx('footer-heading')}>Vào cửa hàng trên ứng dụng</h3>
            <div className={cx('footer__download')}>
              <img src={images.qr_code} alt="Downdload QR" className={cx('footer__download-qr')} />
              <div className={cx('footer__download-apps')}>
                <Link href="" className={cx('footer__download-app-link')}>
                  <img src={images.gg_play} alt="Google Play" className={cx('footer__download-app-img')} />
                </Link>
                <Link href="" className={cx('footer__download-app-link')}>
                  <img src={images.app_store} alt="App Store" className={cx('footer__download-app-img')} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('footer__bottom')}>
        <div className={cx('grid')}>
          <p className={cx('footer__text')}>© 2023 - Bản quyền thuộc về Công ty @@@</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

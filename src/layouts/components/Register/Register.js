import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

import Button from '~/components/Button';
import styles from './Register.module.scss';

const cx = classNames.bind(styles);
function Register({ closeRegister }) {
  return (
    <div className={cx('modal')} onClick={closeRegister}>
      <div className={cx('modal__overlay')}></div>
      <div
        className={cx('modal__body')}
        // ngăn chặn nổi bọt
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={cx('auth-form')}>
          <div className={cx('auth-form__container')}>
            <div className={cx('auth-form__header')}>
              <h3 className={cx('auth-form__heading')}>Đăng ký</h3>
              {/* <Button className={cx('auth-form__switch-btn')}>Đăng nhập</Button> */}
            </div>

            <div className={cx('auth-form__form')}>
              <div className={cx('auth-form__group')}>
                <input type="text" className={cx('auth-form__input')} placeholder="Nhập Email của bạn" />
              </div>
              <div className={cx('auth-form__group')}>
                <input type="password" className={cx('auth-form__input')} placeholder="Nhập mật khẩu" />
              </div>
              <div className={cx('auth-form__group')}>
                <input type="password" className={cx('auth-form__input')} placeholder="Nhập lại mật khẩu" />
              </div>
            </div>

            <div className={cx('auth-form__aside')}>
              <p className={cx('auth-form__policy-text')}>
                Bằng cách đăng ký bạn đồng ý với Shop về {''}
                <Link href="" className={cx('auth-form__text-link')}>
                  Điều khoản dịch vụ
                </Link>{' '}
                &
                <Link href="" className={cx('auth-form__text-link')}>
                  {' '}
                  Chính sách bảo mật
                </Link>
              </p>
            </div>

            <div className={cx('auth-form__controls')}>
              <Button medium className={cx('auth-form__controls-back')} onClick={closeRegister}>
                TRỞ LẠI
              </Button>
              <Button primary>ĐĂNG KÝ</Button>
            </div>
          </div>

          <div className={cx('auth-form__socials')}>
            <Link href="" className={cx('auth-form__socials--facebook', 'btn', 'btn--size-s')}>
              <FontAwesomeIcon icon={faFacebook} className={cx('auth-form__socials-icon')} />
              <span className={cx('auth-form__socials-title')}>Kết nối với Facebook</span>
            </Link>
            <Link href="" className={cx('auth-form__socials--google', 'btn', 'btn--size-s')}>
              <FontAwesomeIcon icon={faGoogle} />
              <span className={cx('auth-form__socials-title')}>Kết nối với Google</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

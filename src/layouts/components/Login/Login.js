import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

import Button from '~/components/Button';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);
function Login({ closeLogin }) {
  return (
    <div className={cx('modal')} onClick={closeLogin}>
      <div className={cx('modal__overlay')}></div>
      <div
        className={cx('modal__body')}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={cx('auth-form')}>
          <div className={cx('auth-form__container')}>
            <div className={cx('auth-form__header')}>
              <h3 className={cx('auth-form__heading')}>Đăng nhập</h3>
              {/* <Button className={cx('auth-form__switch-btn')}>Đăng ký</Button> */}
            </div>

            <div className={cx('auth-form__form')}>
              <div className={cx('auth-form__group')}>
                <input type="text" className={cx('auth-form__input')} placeholder="Nhập Email của bạn" />
              </div>
              <div className={cx('auth-form__group')}>
                <input type="password" className={cx('auth-form__input')} placeholder="Nhập mật khẩu" />
              </div>
            </div>

            <div className={cx('auth-form__aside')}>
              <div className={cx('auth-form__help')}>
                <Link href="" className={cx('auth-form__help-link', 'auth-form__help-forgot')}>
                  Quên mật khẩu
                </Link>
                <span className={cx('auth-form__help-separate')}></span>
                <Link href="" className={cx('auth-form__help-link')}>
                  Cần trợ giúp?
                </Link>
              </div>
            </div>

            <div className={cx('auth-form__controls')}>
              {/* btn-normal */}
              <Button medium onClick={closeLogin} className={cx('auth-form__controls-back')}>
                TRỞ LẠI
              </Button>
              <Button primary>ĐĂNG NHẬP</Button>
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
export default Login;

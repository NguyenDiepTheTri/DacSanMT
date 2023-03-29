import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// đọc docs về Tippy
import Tippy from '@tippyjs/react'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional css tippy
import { Link } from 'react-router-dom';
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faCloudUpload,
  faMessage,
  faUser,
  faCoins,
  faGear,
  faSignOut,
  faCartShopping,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import {} from '@fortawesome/free-regular-svg-icons';
// routerConfig: có thể tự đặt,
import config from '~/config';
// Button
import Button from '~/components/Button';
// images dc import từ assets
import images from '~/assets/images';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';
import Login from '~/layouts/components/Login';
import Register from '~/layouts/components/Register';
import Cart from '~/layouts/components/Cart';

const cx = classNames.bind(styles);

// tạo mảng các phần tử của nút ... nằm dọc
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    // menu cấp 2 (con)
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback và trợ giúp', to: '/feedback' },
  { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Phím tắt' },
];

function Header() {
  // user đang đã log in
  const currentUser = false;
  // show Login
  const [showLogin, setShowLogin] = useState(false);
  const closeLogin = () => setShowLogin(false);

  // show Regiter
  const [showRegister, setShowRegister] = useState(false);
  const closeRegister = () => setShowRegister(false);

  const [showMobileIcon, setshowMobileIcon] = useState(true);

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        // handle change Language
        console.log(menuItem);
        break;
      default:
    }
  };

  const renderCart = (prop) => {
    return (
      <div {...prop}>
        <Cart />
      </div>
    );
  };
  // menu của user đã login
  const userMenu = [
    { icon: <FontAwesomeIcon icon={faUser} />, title: 'View Profile', to: '/@trii' },
    { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get coins', to: '/coin' },
    { icon: <FontAwesomeIcon icon={faGear} />, title: 'Settings', to: '/settings' },
    // bỏ menu_item sau 3 thèn trên
    ...MENU_ITEMS,
    { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log outs', to: '/logout', separate: true },
  ];

  return (
    // thẻ nào làm thẻ cha thì đặt tên class là wrapper
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        <div className={cx('logo')}>
          {/* cấu hình path config vd: home là '/' */}
          <Link to={config.routest.home} className={cx('logo-link')}>
            <img src={images.logoDS} alt="Tiktok" className={cx('img_header')} />
          </Link>
        </div>

        {/* Search */}
        <Search />

        <div className={cx('mobile')}>
          <Link onClick={() => setshowMobileIcon(!showMobileIcon)}>
            {showMobileIcon ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faTimes} />}
          </Link>
        </div>

        <div className={showMobileIcon ? cx('actions') : cx('actions', 'active')}>
          {/* nếu đang có user thì hiện lên */}
          {currentUser ? (
            // <> </> là fragment
            <>
              {/* trigger khi click vô mới hiện */}
              <div>
                <Tippy delay={[0, 200]} content="Giỏ hàng" placement="bottom" render={renderCart} interactive>
                  <button className={cx('action-btn')}>
                    <FontAwesomeIcon icon={faCartShopping} style={{ color: '#1aff1a' }} />
                    <div className={cx('header__cart-wrap')}>
                      <span className={cx('header__cart-notice')}>0</span>
                    </div>
                  </button>
                </Tippy>
              </div>

              <Tippy delay={[0, 200]} content="Thông báo" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faMessage} style={{ color: '#ff6699' }} />
                </button>
              </Tippy>

              {/* <button className={cx('action-btn')}>
                <FontAwesomeIcon icon={faMessage} />
              </button> */}
            </>
          ) : (
            // nếu mà chưa login thì hiện Upload và Login lên
            <>
              {/* Actions // thẻ button primary là props  */}
              {/* to="/login" href="https://fullstack.edu.vn/" target="_blank" */}
              <Button text onClick={() => setShowRegister(true)}>
                Đăng Ký
              </Button>
              {showRegister && <Register closeRegister={closeRegister} />}

              {/* disabled onClick={() => alert('mmmm')} onMouseUp={() => {}} 
              className={cx('custom-login')} tự
              custom  // rightIcon={<FontAwesomeIcon icon={faSignIn} />}  */}
              <Button primary onClick={() => setShowLogin(true)}>
                Đăng nhập
              </Button>
              {showLogin && <Login closeLogin={closeLogin} />}
              {/* nhận về 1 mảng */}
            </>
          )}

          {/* AVATAR */}
          {/* nếu có user thì hiện userMenu */}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              // nó sẽ forwardRef vào cái Image này và Tippy sẽ nhận dc
              <Image
                src="https://photo-baomoi.bmcdn.me/w300_r3x2_sm/2023_03_06_194_45214174/e2af142f1162f83ca173.jpg"
                className={cx('user-avatar')}
                alt="Nguyen Van A"
                failback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
              />
            ) : (
              //thèn button này là children trong Menu
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;

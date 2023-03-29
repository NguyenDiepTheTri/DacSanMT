import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCandyCane } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
// lấy cái bóng đổ
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './SuggetedAccounts.module.scss';
import ProductPreview from './ProductPreview';

const cx = classNames.bind(styles);
function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <ProductPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    // bọc thẻ div để nó k báo lỗi
    <div>
      <Tippy
        //visible
        interactive
        // trục x,y
        offset={[-20, 0]}
        // hiện sau delay 800, ẩn ngay
        delay={[800, 0]}
        render={renderPreview}
        placement="bottom"
      >
        <div className={cx('account-item')}>
          <img className={cx('avatar')} src="https://i.imgur.com/xgvqeYJ.jpg" alt="Bánh ít" />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>Bánh ít</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCandyCane} />
            </p>
            <p className={cx('name')}>100 đã bán</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}
AccountItem.propTypes = {};
export default AccountItem;

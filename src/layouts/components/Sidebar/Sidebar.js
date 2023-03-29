import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faFish, faCandyCane, faBacon } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
// Menu: default, {MenuItem} :export lẻ
import Menu, { MenuItem } from './Menu';
import SuggetedAccounts from '~/components/SuggetedAccounts';
import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupIcon,
  UserGroupAtiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from '~/components/Icons';
import config from '~/config';

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        {/* <HomeIcon/> :React.createElement()  */}
        {/* MenuItem là children của Menu */}
        <MenuItem
          title="Bánh kẹo"
          to={config.routest.home}
          icon={<FontAwesomeIcon icon={faCandyCane} width="3.2rem" height="3.2rem" />}
          activeIcon={<FontAwesomeIcon icon={faCandyCane} width="3.2rem" height="3.2rem" />}
        />
        <MenuItem
          title="Nem chả"
          to={config.routest.nem_product}
          icon={<FontAwesomeIcon icon={faBacon} width="3.2rem" height="3.2rem" />}
          activeIcon={<FontAwesomeIcon icon={faBacon} width="3.2rem" height="3.2rem" />}
        />
        <MenuItem
          title="Đồ khô"
          to={config.routest.dry_product}
          icon={<FontAwesomeIcon icon={faFish} width="3.2rem" height="3.2rem" />}
          activeIcon={<FontAwesomeIcon icon={faFish} width="3.2rem" height="3.2rem" />}
        />
      </Menu>
      <SuggetedAccounts label="Sản phẩm bán chạy" />
      {/* <SuggetedAccounts label="Following accounts" /> */}
    </aside>
  );
}

export default Sidebar;

import PropTypes from 'prop-types';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    // do dùng react-router-dom bản lasted nên k hỗ trợ @/
    <Link to={`/profile/${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />

      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          {/* khi tick = true (có tick) thì render ra tick xanh */}
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
        </h4>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

// nó sẽ lấy các prop của components để validation
AccountItem.propTypes = {
  // mong muốn data là kiểu object và bắt buộc
  data: PropTypes.object.isRequired,
};
export default AccountItem;

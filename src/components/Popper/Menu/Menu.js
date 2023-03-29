import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless'; // different import path!
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Header from './Header';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFc = () => {};
// mặc định để onChange là function trống
//hideOnClick: ẩn khi click mặc định nó sẽ là true, ở đay set là false
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFc }) {
  // trả về 1 cái mảng có kỉu dữ liệu là object: đại diện dữ liệu của trang hiện tại
  // cho items = data
  const [history, setHistory] = useState([{ data: items }]);
  // Lấy phần tử cuối trong mảng
  const current = history[history.length - 1];
  //console.log(current.title)

  const renderItems = () => {
    //   cái ngoặc của map () => ()là ngoặc tròn
    // current.data = items.map
    return current.data.map((item, index) => {
      // nếu phần tử nào của mảng MENU_ITEMS k có children thì là underfind
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          // dựa vào onClick để biết mk chọn cái nào
          onClick={() => {
            // nếu là Parent
            if (isParent) {
              // các prev cũ, và push cái mới vào
              setHistory((prev) => [...prev, item.children]);
              // menu không có children
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  // reset về trang đầu tiên áp dụng cho menu cấp 2
  // khi nhấn ra ngoài thì quay lại ban đầu
  const handleResetMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  const handleBack = () => {
    // cắt phần tử cuối cùng đi
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  return (
    <Tippy
      // đẻ thèn này lên đầu tiên để nó k chiếm độ ưu tiên (cái ghi đưới cùng thì độ ưu tiên càng cao)
      // {...passProps}
      interactive
      placement="bottom-end"
      hideOnClick={hideOnClick}
      //show:  0, hide: 700 mi li giây
      delay={[0, 700]}
      // 12: chiều ngang, 8:chiều cao
      offset={[12, 8]}
      //nếu mà kết quả tìm kiếm >0 thì mới hiện
      //visible
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {/* nếu mà lớn hơn 1 thì lấy vế sau &&, còn k lớn hơn thì thôi */}
            {history.length > 1 && (
              <Header
                // nó sẽ lấy ra cái title của phần tử cuối trong mảng MENU_ITEMS(ở dây là children)
                // current ở trên
                title={current.title}
                onBack={handleBack}
              />
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      // reset về trang đầu tiên áp dụng cho menu cấp 2
      // khi nhấn ra ngoài thì quay lại ban đầu
      onHide={handleResetMenu}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};
export default Menu;

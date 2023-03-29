import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import { useEffect, useState, useRef } from 'react';

// * as hết mấy thèn dc export vô searchServices
import * as searchServices from '~/services/searchService';
//import 'tippy.js/dist/tippy.css'; // optional
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { UploadIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  // mặc định để là false vì k loading
  const [loading, setLoading] = useState(false);

  //1. '' vì searchValue ban đầu để '' từ lần thứ 2 trở đi thì mới set lại, 2 'h', 3. 'ho'
  // sau 0.5s mà người dùng ngừng gõ thì cái debounced dc update = giá trị mới nhất của searchValue
  const debouncedValue = useDebounce(searchValue, 500);

  // dùng useRef để get ra DOM Element của nó
  const inputRef = useRef();

  useEffect(() => {
    // nếu k có searchValue thì thoát
    if (!debouncedValue.trim()) {
      // cho cái searchResult thành []
      setSearchResult([]);
      return;
    }

    //encodeURIComponent nó sẽ mã hóa để tránh các ký tự gây lú như &, ? ...
    // ?q=${encodeURIComponent(debounced)}&type=less
    // axios dùng  XMLHttpRequests
    const fetchApi = async () => {
      // trước khi gọi api thì set nó = true
      setLoading(true);
      // debounced = với q bên searchServices(chữ mà user nhập vào), thứ 2 là type ='less' nên k cần đưa vô
      const result = await searchServices.search(debouncedValue);
      setSearchResult(result);
      // sau khi gọi api thì set nó = true
      setLoading(false);
    };

    fetchApi();
    // khi debounced(người dùng gõ vào ô tìm kiếm) thì nó sẽ re-render
  }, [debouncedValue]);

  // xử lý xóa
  const handleClear = () => {
    setSearchValue('');
    // khi mà xóa thì set cái kết quả tìm kiếm = mảng rỗng
    setSearchResult([]);
    inputRef.current.focus();
  };

  // xử lý onChange của input search
  const handleChange = (e) => {
    const searchValue = e.target.value;
    // nếu searchValue k bắt đầu = space or bắt dc khoảng trắng
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  const handleSubmit = () => {};
  //   xử lý ẩn tìm kiếm
  const handleHideResult = () => {
    //   sai dk nên sẽ k hiện
    setShowResult(false);
  };

  return (
    // Search  Tippy content="Tìm kiếm" placement="right"
    // thèn Tippy dùng để làm mấy cái
    // bọc HeadlessTippy = thẻ div để tránh gây lỗi khi kéo lên or xuống
    <div>
      <HeadlessTippy
        // có thể tương tác dc bấm vào dc
        interactive
        // để tránh warning keyboard navigation()
        // nó sẽ append ra bên ngoài body (f12/element để xem)
        // appendTo={() => document.body}
        // nếu mà kết quả tìm kiếm >0 thì mới hiện
        //có cả 2 và đều là true thì mới hiện HeadlessTippy
        //nên nó sẽ đúng với điều kiện searchResult.length > 0 (hoaa)
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {/* vì api trả về thèn result này luôn là 1 object */}
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        //   khi mà click ra bên ngoài thèn HeadlessTippy này
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          {/* spellCheck: bỏ check trính tã */}
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Tìm kiếm sản phẩm"
            spellCheck={false}
            //   e.target.value: để get dc dữ liệu nhập vào input
            onChange={handleChange}
            //   khi focus vô input thì hiện lên
            onFocus={() => setShowResult(true)}
          />
          {/* khi có searchValue (nhập vô ô search) thì mới hiển thị cái button clear */}
          {/* nếu có searchValue (nhập ô search) mà k có loading */}
          {!!searchValue && !loading && (
            // onClick={setSearchValue(''): để xóa, focus lại cái nút input dùng useRef
            <button className={cx('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          {/* nếu có loading thì hiện khúc sau && ra */}
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

          <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;

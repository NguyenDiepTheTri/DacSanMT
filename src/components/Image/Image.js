import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Image.module.scss';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
//console.log(images.noImage);

// ...props lấy các thuộc tính còn lại của nó ra vd ở đây là img thì có className ...
const Image = forwardRef(({ src, alt, className, failback = images.noImage, ...props }, ref) => {
  // _failback chỉ dùng trong this component này, failback thì từ bên ngoài truyền vào
  // đang test failback từ bên ngoài truyền vào nên nếu bỏ failback thì khi k có src của img thì _failback sẽ work
  const [_failback, setFailback] = useState('');

  // nếu mà có lỗi trong ev onError
  const handleError = () => {
    // failback này từ bên ngoài truyền vào
    // có nghĩa nếu ảnh bị lỗi thì lấy failback, còn nếu k lỗi thì lấy src
    setFailback(failback);
  };

  // nếu có failback thì hiện failback nhưng vẫn ưu tiên hiện src nếu src bình thường
  return (
    <img
      // mặc định luôn có classs là wrapper và className tự custom
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={_failback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  failback: PropTypes.string,
};
export default Image;

// khi component Image này dc mount vào Dom thì sẽ có cái ref này
// có thể dùng tinypng để nén ảnh lại

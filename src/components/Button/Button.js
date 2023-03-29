import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function Button({
  to,
  href,
  children,
  onClick,
  primary = false,
  outline = false,
  disabled = false,
  rounded = false,
  // mặc định là text
  text = false,
  small = false,
  medium = false,
  large = false,
  leftIcon,
  rightIcon,
  className,
  ...passProps
}) {
  // mặc định để là thẻ button
  let Comp = 'button';
  // các props nội bộ
  const props = {
    onClick,
    // cho cái target dành cho những prop k biết trước dc
    ...passProps,
  };

  //xóa Event Listener khi btn là disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      // bắt các sự kiện on
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props.onClick;
      }
    });
  }
  //console.log(props);

  //kiểm tra nếu trong trang hay ngoài trang
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  // mặc định luôn luôn có wrapper(ở đây là button)
  const classes = cx('wrapper', {
    // khi có className thì nó sẽ lấy cái giá trị [className] làm key
    [className]: className,
    // inhet object lirtaral, tự có class là primary
    primary,
    outline,
    disabled,
    rounded,
    text,
    small,
    large,
    medium,
  });

  return (
    // ...props: giải các thằng còn lại
    <Comp className={classes} {...props}>
      {/* nếu có leftIcon thì cho nó vô thẻ span */}
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  text: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
export default Button;

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Compi = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  //Remove event listner
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Compi = Link;
  } else if (href) {
    props.href = href;
    Compi = 'a';
  }
  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    text,
    rounded,
    disabled,
    small,
    large,
  });
  return (
    <Compi className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Compi>
  );
}

Button.propTypes = {
  children: PropTypes.node, //là những cái có thể render được
};

export default Button;

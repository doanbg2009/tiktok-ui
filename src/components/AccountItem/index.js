import classNames from 'classnames/bind';
import { createContext } from 'react';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/a73b1ae02dfbe9dc724c35883025791a.jpeg?x-expires=1663578000&x-signature=GzITO%2FyMrZfOBNMGHkyVuFUtzYc%3D"
        alt="hoaa"
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyễn Văn Tấm</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>nguyenvantam</span>
      </div>
    </div>
  );
}

export default AccountItem;

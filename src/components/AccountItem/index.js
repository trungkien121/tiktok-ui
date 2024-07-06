import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/140fc7d5f01e40a37fe761f4da3d856d~c5_300x300.webp?lk3s=a5d48078&nonce=99750&refresh_token=e17371909b66484d63fd71e5c69bd3d1&x-expires=1720083600&x-signature=cueGaNmi0owxZppNu%2Bp5z6la9jM%3D&shp=a5d48078&shcp=c1333099"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyen Van A
                    <span>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </span>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;

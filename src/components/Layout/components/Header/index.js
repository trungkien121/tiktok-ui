import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightToBracket,
    faBookmark,
    faCircleQuestion,
    faEarthAsia,
    faEllipsisV,
    faInbox,
    faKeyboard,
    faLightbulb,
    faMessage,
    faMoon,
    faPlus,
    faSun,
    faUser,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';

import Button from '@/components/Button';
import styles from './Header.module.scss';
import images from '@/assets/images';
import Menu from '@/components/Popper/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import Image from '@/components/Image';
import Search from '../Search';
import { default as routesConfig } from '@/config/routes';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'LIVE Creator Hub',
        to: '/creator',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt 1',
                },
                {
                    type: 'language',
                    code: 'ja',
                    title: 'Japan',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark more',
    },
];

function Header() {
    const currentUser = true;

    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log(menuItem.type);
                break;
            case 'languageadf':
                console.log(menuItem.type);
                break;
            case 'languagafade':
                console.log(menuItem.type);
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Favorites',
            to: '/favorites',
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Get Coins',
            to: '/creator',
        },
        {
            icon: <FontAwesomeIcon icon={faVideo} />,
            title: 'LIVE Studio',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faLightbulb} />,
            title: 'LIVE Creator Hub',
            to: '/creator',
        },
        {
            icon: <FontAwesomeIcon icon={faSun} />,
            title: 'Settings',
            to: '/settings',
        },
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
        {
            icon: <FontAwesomeIcon icon={faMoon} />,
            title: 'Dark more',
        },
        {
            icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
            title: 'Log out',
            to: '/logout',
            setparate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routesConfig.home} className={cx('link-logo')}>
                        <img src={images.logo} alt="tiktok" />
                    </Link>
                </div>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button to={'/upload'} text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>

                            <div className={cx('acction-btn')}>
                                <Tippy delay={[0, 100]} placement="bottom" content="Messages">
                                    <button className={cx('acction-btn-icon')}>
                                        <FontAwesomeIcon icon={faMessage} />
                                    </button>
                                </Tippy>

                                <Tippy delay={[0, 100]} placement="bottom" content="Inbox">
                                    <button className={cx('acction-btn-icon')}>
                                        <FontAwesomeIcon icon={faInbox} />
                                    </button>
                                </Tippy>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button to={'/upload'} text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faArrowRightToBracket} />}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://files.fullstack.edu.vn/f8-tiktok/users/5920/66261d1932d6b.jpg "
                                alt="nguyen van a"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

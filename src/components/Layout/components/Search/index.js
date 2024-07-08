import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import * as searchServices from '@/apiServices/searchServices';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import AccountItem from '@/components/AccountItem';

import styles from './Search.module.scss';
import { SearchIcon } from '@/components/Icons';
import { useDebounce } from '@/hooks';

const cx = classNames.bind(styles);
function Search() {
    const inputRef = useRef(null);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounce.trim()) {
            // chuỗi rỗng hoặc cách không tìm kiếm
            setSearchResult([]);
            return;
        }

        //   ${encodeURIComponent(debounce)} : để xử ý dữ liệu nhập vào

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debounce);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounce]);

    const handleCleaar = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (searchValue.startsWith(' ')) {
            return;
        }
        setSearchValue(searchValue);
    };

    return (
        //Using a wrapper <div> or <span> tag around the reference element solves
        //this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h3 className={cx('search-title')}>Accounts</h3>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        onFocus={() => setShowResult(true)}
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear-btn')} onClick={handleCleaar}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <span className={cx('span')}></span>
                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;

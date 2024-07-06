import classNames from 'classnames';
import { forwardRef } from 'react';
import { useState } from 'react';

import styles from './Image.module.scss';

import images from '@/assets/images';

const Image = forwardRef(({ src, alt, className, fallback: custofallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(custofallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            ref={ref}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;

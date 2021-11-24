import type {FC, RefObject} from 'react';
import React, {useEffect, useRef, useState} from 'react';
import styles from './dropdown.module.scss';
import {Close} from '../../assets/images/icons';
import {Button} from '../button';
import classNames from 'classnames';

interface IPropsDropdown {
  buttonTitle: string;
  title?: string;
  visibleHeader?: string;
}

const useDetectOutsideClick = (el: RefObject<HTMLElement>, initialState: boolean) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e: any) => {
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };

  }, [isActive, el]);

  return [isActive, setIsActive] as const;
};

const Dropdown: FC<IPropsDropdown> = ({buttonTitle, title, visibleHeader = true, children}) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className={styles.root}>
      <Button isBgTransparent={true} isArrowDown={true} onClick={onClick}>{buttonTitle}</Button>
      <div className={classNames(styles.dropdown, {[styles.active]: isActive})} ref={dropdownRef}>
        {visibleHeader &&
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <button className={styles.close} onClick={onClick}><Close/></button>
        </div>
        }
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export {Dropdown};
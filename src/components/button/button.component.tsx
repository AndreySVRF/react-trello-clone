import type {FC} from 'react';
import React from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';
import {ArrowDown} from '../../assets/images/icons';

interface IPropsButton {
  className?: string;
  isBgTransparent?: boolean;
  isArrowDown?: boolean;
  onClick?: () => void;
}

const Button: FC<IPropsButton> = ({className, isBgTransparent, isArrowDown, onClick, children}) => (
  <div className={classNames(styles.button, className, {[styles.bgTransparent]: isBgTransparent})} onClick={onClick}>
    {children}
    {isArrowDown && <ArrowDown className={styles.arrowDown}/>}
  </div>
);


export {Button};
import type {FC, ReactNode} from 'react';
import React from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';
import {ArrowDown} from '../../assets/images/icons';

interface IPropsButton {
  className?: string;
  isBgTransparent?: boolean;
  isArrowDown?: boolean;
  children: string | ReactNode;
}

const Button: FC<IPropsButton> = ({className, isBgTransparent, isArrowDown, children}) => (
  <div className={classNames(styles.button, className, {[styles.bgTransparent]: isBgTransparent})}>
    {children}
    {isArrowDown && <ArrowDown className={styles.arrowDown}/>}
  </div>
);


export {Button};
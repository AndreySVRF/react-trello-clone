import type {FC} from 'react';
import React from 'react';
import styles from './dropdown-zone.module.scss';

const DropdownZone: FC = ({children}) => (
  <div className={styles.dropdownZone}>
    {children}
  </div>
);

export {DropdownZone};
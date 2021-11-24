import React from 'react';
import styles from './header.module.scss';
import {Button} from '../button';
import {Bell, Close, Info, Loupe} from '../../assets/images/icons';
import avatar from '../../assets/images/avatar-1.jpg';
import {Dropdown} from '../dropdown';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.headerLeft}>
      <a href="/" className={styles.logo}>
        <div className={styles.logoImg}/>
      </a>
      <div className={styles.topNav}>
        <div className={styles.navGroup}>
          <Dropdown title="Заголовок" buttonTitle="Workspace">
            lpl
          </Dropdown>
          <Dropdown title="Заголовок" buttonTitle="Recent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            accusantium dicta ducimus earum eius error facilis hic labore magnam magni minus nemo, numquam obcaecati
            perferendis rem repellat reprehenderit ut vitae?</Dropdown>

          <Button isBgTransparent={true} isArrowDown={true}>Starred</Button>
          <Button isBgTransparent={true} isArrowDown={true}>Templates</Button>
        </div>
        <div className={styles.navGroup}>
          <Button className={styles.buttonCreate}>Create</Button>
        </div>
      </div>
    </div>
    <div className={styles.headerRight}>
      <div className={styles.search}>
        <input type="text" placeholder="Search"/>
        <Loupe className={styles.loupe}/>
        <button className={styles.removeSearch}><Close className={styles.close}/></button>
      </div>
      <Button isBgTransparent={true} className={styles.headerRightButton}><Info/></Button>
      <Button isBgTransparent={true} className={styles.headerRightButton}><Bell/></Button>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <img src={avatar} alt="Avatar"/>
        </div>
      </div>
    </div>
  </div>
);

export {Header};

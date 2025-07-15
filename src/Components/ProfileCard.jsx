import React, { Component } from 'react';
import styles from '../styles/ProfileCard.module.css';
import mailIcon from '../assets/icon/facebook.svg';
import waIcon from '../assets/icon/tiktok.svg';
import Anx from '../assets/img/anxx.jpg';

class ProfileCard extends Component {
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.profileWrapper}>
          <img
            src={Anx}
            alt="Profile"
            className={styles.profileImg}
          />
        </div>
        <div className={styles.icons}>
          <img src={mailIcon} alt="facebook" className={styles.iconImg} />
          <img src={waIcon} alt="tiktok" className={styles.iconImg} />
        </div>
      </div>
    );
  }
}

export default ProfileCard;
  
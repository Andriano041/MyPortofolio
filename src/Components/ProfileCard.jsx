import React, { Component } from 'react';
import styles from '../styles/ProfileCard.module.css';
import defaultImg from '../assets/img/anxx.jpg';
import mailIcon from '../assets/icon/facebook.svg';
import waIcon from '../assets/icon/tiktok.svg';

class ProfileCard extends Component {
  render() {
    const profileImage = this.props.image || defaultImg; // kalau tidak ada props, pakai default
    return (
      <div className={styles.card}>
        <div className={styles.profileWrapper}>
          <img src={profileImage} alt="Profile" className={styles.profileImg} />
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

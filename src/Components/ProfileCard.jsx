import React, { Component } from 'react';
import styles from '../styles/ProfileCard.module.css';
import mailIcon from '../assets/icon/Mailicon.svg';
import waIcon from '../assets/icon/wa.svg';
import Anx from '../assets/img/anx.png';

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
          <img src={mailIcon} alt="Mail" className={styles.iconImg} />
          <img src={waIcon} alt="WhatsApp" className={styles.iconImg} />
        </div>
      </div>
    );
  }
}

export default ProfileCard;
  
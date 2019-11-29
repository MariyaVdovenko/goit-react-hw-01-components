import React from 'react';
import T from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers: fl, views: vie, likes: lk },
}) => (
  <div className={styles.Profile}>
    <div className="description">
      <img src={avatar} alt="user avatar" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>{tag}</p>
      <p className={styles.location}>{location}</p>
      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.label}>Followers </span>
          <span className={styles.quantity}>{fl}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Views </span>
          <span className={styles.quantity}>{vie}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Likes </span>
          <span className={styles.quantity}>{lk}</span>
        </li>
      </ul>
    </div>
  </div>
);

Profile.propTypes = {
  user: T.shape({
    avatar: T.string.isRequired,
    name: T.string,
    tag: T.string.isRequired,
    location: T.string,
    stats: T.objectOf(T.number).isRequired,
  }),
};

export default Profile;

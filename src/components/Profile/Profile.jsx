import React from 'react';
import T from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
  const {
    avatar,
    name,
    tag,
    location,
    stats: { followers, views, likes },
  } = user;
  return (
    <div className={styles.Profile}>
      <div className="description">
        <img src={avatar} alt="user avatar" className={styles.avatar} />
        <p className={name}>{user.name}</p>
        <p className={tag}>{user.tag}</p>
        <p className={location}>{user.location}</p>
        <ul className={styles.stats}>
          <li className={styles.statsItem}>
            <span className={styles.label}>Followers </span>
            <span className={styles.quantity}>{followers}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.label}>Views </span>
            <span className={styles.quantity}>{views}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.label}>Likes </span>
            <span className={styles.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

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

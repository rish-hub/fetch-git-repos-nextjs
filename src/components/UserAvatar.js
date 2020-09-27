import React from "react";
import Link from "next/link";
import styles from "./UserAvatar.module.scss";

const UserAvatar = ({ user }) => {
  return (
    <div className={styles.user}>
      <figure className={`${styles.avatar} image`}>
        <img className="is-round" src={user.avatar_url} alt="user" />
      </figure>
      <div className={styles.userLink}>
        <Link href="/profile/[id]" as={`/profile/${user.login}`}>
          <a>{user.login}</a>
        </Link>
      </div>
    </div>
  );
};

export default UserAvatar;

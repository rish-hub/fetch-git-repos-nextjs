import React from "react";
import Link from "next/link";
import styles from "./RepoListItem.module.scss";
import { FaStar, FaCodeBranch } from "react-icons/fa";
import UserAvatar from "./UserAvatar";

const RepoListItem = ({ repo }) => {
  const excerpt = (des) => {
    if (des && des.length > 100) {
      return `${des.slice(0, 100)}...`;
    }
    return des;
  };
  return (
    <div className={`${styles.repoListItem} box`}>
      <div className={styles.repoName}>
        <Link href="/repo/[id]" as={`/repo/${repo.id}`}>
          <a>{repo.name}</a>
        </Link>
      </div>
      <UserAvatar user={repo.owner} />
      <p className={styles.description}>{excerpt(repo.description)}</p>
      <div className={styles.footer}>
        <div className={styles.counters}>
          <div className={styles.counter}>
            <FaStar />
            <span className={styles.span}>{repo.stargazers_count}</span>
          </div>
        </div>
        <div className={styles.counter}>
          <FaCodeBranch />
          <span className={styles.span}>{repo.forks_count}</span>
        </div>
        <div className={styles.language}>
          <span className={styles.span}>{repo.language}</span>
        </div>
      </div>
    </div>
  );
};

export default RepoListItem;

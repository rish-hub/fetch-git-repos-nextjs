import React from "react";
import RepoListItem from "./RepoListItem";
import styles from './RepoList.module.scss'

const RepoList = ({ repos, loading }) => {
  if (loading) return <img className={styles.loader} src="/img/loader.gif" alt="loader" />;

  if (!repos || repos.length === 0) {
    return <spam className={styles.message}>No repositories</spam>;
  }

  return (
    <div className={styles.repoList}>
      {repos.map((repo) => (
        <RepoListItem key={repo.id} repo={repo}></RepoListItem>
      ))}
    </div>
  );
};

export default RepoList;

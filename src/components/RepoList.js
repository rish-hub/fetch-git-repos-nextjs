import React from "react";
import RepoListItem from "./RepoListItem";

const RepoList = ({ repos, loading }) => {
  if (loading) return "Loading...";

  if (!repos || repos.length === 0) {
    return <spam>No repositories</spam>;
  }

  return (
    <div>
      {repos.map((repo) => (
        <RepoListItem key={repo.id} repo={repo}></RepoListItem>
      ))}
    </div>
  );
};

export default RepoList;

import React from "react";
import { getRepo } from "./../../services/githubServices";
import styles from "./repo.module.scss";
import ButtonLink from "./../../components/shared/ButtonLink";
import UserAvatar from "./../../components/UserAvatar";
import Head from "next/head";

const Repo = ({ repo }) => {
  return (
    <div>
      <Head>
        <title>{repo.name}</title>
        <meta property="og:title" content={`Next.js Example | ${repo.name}`} />
        <meta property="og:image" content={`${repo.owner.avatar_url}`} />
      </Head>
      <ButtonLink href="/" text="Back" />
      <div className={styles.header}>
        <span className="span">{repo.name}</span>
      </div>
      <UserAvatar user={repo.owner} />
      <div className={styles.description}>{repo.description}</div>
      <div className={styles.language}>{repo.language}</div>

      <ButtonLink
        href={repo.html_url}
        text="View on Github"
        type="dark"
        target="_blank"
        external
        external
        external
      />
    </div>
  );
};
export const getServerSideProps = async ({ query }) => {
  const res = await getRepo(query.id);
  return {
    props: {
      repo: res.data,
    },
  };
};
export default Repo;

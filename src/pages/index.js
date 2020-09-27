import { useState, useCallback, useEffect } from "react";
import Search from "./../components/Search";
import RepoList from "./../components/RepoList";
import { searchRepos } from "./../services/githubServices";
import styles from  "./../pages/index.module.scss";

export default function Home({ searchTerm, repoList }) {
  const [searchText, setSearchText] = useState(searchTerm);
  const [repos, setRepos] = useState(repoList);
  const [language, setLanguage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSearchTextChange = (text) => {
    setSearchText(text);
    if (text) loadRepos(text, language);
  };
  const onLanguageChange = (language) => {
    setLanguage(language);
    loadRepos(searchText, language);
  };

  const loadRepos = async (searchText, language) => {
    setLoading(true);
    const res = await searchRepos(searchText, language);
    setLoading(false);
    if (res && res.data && res.data.items) setRepos(res.data.items);
  };
  return (
    <div className={styles.container}>
      <img className={styles.log} src="/img/undraw_next_js_8g5m.svg" alt="header" />
      <Search
        searchText={searchText}
        language={language}
        onSearchTextChange={onSearchTextChange}
        onLanguageChange={onLanguageChange}
      />
      <RepoList loading={loading} repos={repos} />
      {/* {loading ? "Loading..." : <div>{JSON.stringify(repos, null, 2)}</div>} */}
    </div>
  );
}
export const getServerSideProps = async () => {
  const searchText = "react";
  const res = await searchRepos(searchText);
  return {
    props: {
      searchTerm: searchText,
      repoList: res.data.items,
    },
  };
};

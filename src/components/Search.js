import React from "react";
import Select from "./shared/Select";
import TextInput from "./shared/TextInput";
import LANGUAGES from "../contants/languages.contant";

const Search = (props) => {
  const { language, searchText, onSearchTextChange, onLanguageChange } = props;

  const languages = [{ value: "", label: "All" }, ...LANGUAGES];
  return (
    <div>
      <TextInput
        label="Repo Search"
        value={searchText}
        onChange={(value) => onSearchTextChange(value)}
      />
      <Select
        label="Language"
        value={language}
        options={languages}
        onChange={(value) => onLanguageChange(value)}
      />
    </div>
  );
};

export default Search;

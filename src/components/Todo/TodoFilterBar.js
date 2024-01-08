// FilterBar.js
import React from "react";
import styled from "styled-components";

import searchIconImage from "./search.png"; // Import the search icon image

const FilterBar = ({ onSearchChange }) => {
  return (
    <FilterWrapper>
      <SearchInput
        type="text"
        placeholder="Search with priority..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <SearchIcon src={searchIconImage} alt="Search" />
    </FilterWrapper>
  );
};

export default FilterBar;

const FilterWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 5px;
  width: 550px; /* Adjust the width based on your design */
  font-size: 16px; /* Adjust the font size based on your design */
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 24px; /* Adjust the right position based on your design */
  transform: translateY(-50%);
  width: 20px; /* Adjust the width based on your icon size */
  height: auto; /* Maintain aspect ratio */
  cursor: pointer;
`;
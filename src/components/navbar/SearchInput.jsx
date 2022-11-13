import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { FiDelete } from "react-icons/fi";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 0px 5px;
  justify-content: center;
  border-radius: 6px;
  width: 25rem;
  @media (max-width: 767px) {
    width: 17rem;
  }
  .icon {
    border-radius: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 25px;
    padding: 3px 5px 3px 1px;
    &:hover {
      background: #dadada;
      cursor: pointer;
    }
  }
`;
const SearchInputdiv = styled.input`
  width: 100%;
  border: none;
  background: #ffffff;
  outline: none;

  &:focus {
    background: white;
  }
`;
const SearchInput = ({ filter, setfilter }) => {
  const [toggle] = useState(true);
  return (
    <>
      <InputWrapper>
        <AiOutlineSearch alt="search-icon" size={"2rem"} />
        <SearchInputdiv
          type="text"
          placeholder="search"
          value={filter.query}
          onChange={(e) => setfilter({ ...filter, query: e.target.value })}
        />
        {toggle ? (
          <FiDelete
            size={"2rem"}
            onClick={() => setfilter({ ...filter, query: "" })}
          />
        ) : null}
      </InputWrapper>
    </>
  );
};

export default SearchInput;

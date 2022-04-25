import { useState } from 'react';
import styled from 'styled-components';
import search from '../../resources/images/Dashboard/search.svg';

export default function SearchBox() {
  const [value, setValue] = useState('');
  return (
    <Wrapper>
      <Search
        placeholder='Search NFT Projects...'
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <img src={search} alt='search' className='icon' />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  & .icon {
    position: absolute;
    left: 54px;
    top: 13px;
  }
`;

const Search = styled.input`
  width: 315px;
  height: 48px;
  margin-left: 31px;
  background-color: #171943;
  background-image: url('../../resources/images/Dashboard/search.svg');
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 67px;
  border-radius: 12px;
  border: none;
  outline: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  /* Branding/Colors/10 */

  color: #7a7ca9;
`;

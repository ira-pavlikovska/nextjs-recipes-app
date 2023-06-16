import React, {useState} from 'react';
import {SearchInput, SearchIcon, StyledTitle, SearchInputWrapper, TooltipWrapper} from "./Header.styles";

export default function Header() {
  return (
    <React.Fragment>
      <div style={{display: 'flex'}}>
        <StyledTitle>
          <h2>
            {/*{user.firstName + "'" +*/}
            {/*  's'}*/}
            Recipes book
          </h2>
        </StyledTitle>
      </div>
    </React.Fragment>

  )
}

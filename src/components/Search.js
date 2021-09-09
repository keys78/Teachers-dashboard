import React from 'react'
import styled from 'styled-components'

const Search = ({setSearchTerm}) => {

    return (
        <div>
           <Input placeholder="Search student..." onChange={event => {setSearchTerm(event.target.value)}}/>
        </div>

    )
}


const Input = styled.input.attrs(props => ({
    type: "search",
    // size: props.size || "1em",
  }))`
    width: 240px;
    padding:12px 0 12px 17px;
    border: 1px solid var(--border);
    border-radius:4px;
    color: var(--neutral-b);

    &:focus {
        outline:none;
    }
  `;

export default Search

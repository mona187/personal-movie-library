import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
background-color:${(props) => props.theme.backgroundColor}`;

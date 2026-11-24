import styled from "styled-components";

type HeadingContainerProps = {
  bg: string;
};

type HeadingProps = {
  color: string;
};

export const HeadingContainer = styled.div<HeadingContainerProps>`
  width: 100%;
  height: 5rem;
  padding-left: 1rem;
  background-color: ${(props) => props.bg};
  border-radius: 1rem;
`;

export const Heading = styled.h4<HeadingProps>`
  font-size: 3rem;
  font-weight: 800;
  color: ${(props) => props.color};
`;

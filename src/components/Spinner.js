import React from "react";
import { css } from "@emotion/core";
import { PacmanLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  padding: 1px;
`;

export const Spinner = () => {
  return <PacmanLoader size={20} color={"#36AAD7"} css={override} />;
};

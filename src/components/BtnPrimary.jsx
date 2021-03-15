import { Button } from "react-bootstrap";
import styled from "styled-components";
import { COLOR_FONT_NORMAL, COLOR_PRIMARY, COLOR_DARK } from "../themes/Theme";

const BtnPrimary = styled(Button)`
  margin-top: 10px;
  background: ${COLOR_FONT_NORMAL};
  border: 1px solid ${COLOR_FONT_NORMAL};

  &:hover,
  &:focus,
  &:target {
    border: 1px solid ${COLOR_FONT_NORMAL};
    background: ${COLOR_PRIMARY};
    outline: none !imporant;
  }

  &:active {
    background: ${COLOR_DARK};
  }
`;

export default BtnPrimary;

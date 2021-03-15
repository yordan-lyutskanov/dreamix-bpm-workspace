import { Col, Container, Form, Row } from "react-bootstrap";
import styled from "styled-components";
import { COLOR_CARD, COLOR_FONT_NORMAL, COLOR_LIGHT } from "../themes/Theme";
import BtnPrimary from "./BtnPrimary";

const SearchContainer = styled(Container)`
  background-color: ${COLOR_CARD};
  padding: 10px;
  border: 0px solid;
  border: 1px solid ${COLOR_LIGHT};
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;

const StyledRow = styled(Row)`
  color: ${COLOR_FONT_NORMAL};
  margin: 10px;
`;

const StyledInput = styled(Form.Control)``;

function SearchCard() {
  return (
    <SearchContainer fluid>
      <StyledRow>
        <Col>
          <StyledInput size="lg" type="text" />
          <BtnPrimary variant="dark" size="lg" block>
            Search
          </BtnPrimary>
        </Col>
      </StyledRow>
    </SearchContainer>
  );
}

export default SearchCard;

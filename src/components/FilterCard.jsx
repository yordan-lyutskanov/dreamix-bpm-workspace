import { Col, Container, Form, Row } from "react-bootstrap";
import styled from "styled-components";
import { COLOR_CARD, COLOR_FONT_NORMAL, COLOR_LIGHT } from "../themes/Theme";

const FilterContainer = styled(Container)`
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

function FilterCard() {
  return (
    <FilterContainer fluid>
      <StyledRow>
        <Col>
          <h5>Filter:</h5>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col sm="auto">
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            <Form.Check type="checkbox" label="Check me out" />
            <Form.Check type="checkbox" label="Check me out" />
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </Col>
      </StyledRow>
    </FilterContainer>
  );
}

export default FilterCard;

import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { COLOR_CARD, COLOR_FONT_NORMAL, COLOR_LIGHT } from "../themes/Theme";

const InfoContainer = styled(Container)`
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

const TitleRow = styled(Row)`
  color: ${COLOR_FONT_NORMAL};
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 20px;
`;

function InfoCard(props) {
  return (
    <InfoContainer fluid>
      <TitleRow>
        <Col>
          <h5>Welcome, {props.user}</h5>
        </Col>
      </TitleRow>
      <StyledRow>
        <Col>You have the following tasks:</Col>
      </StyledRow>
      <StyledRow>
        <Col>New:</Col>
        <Col sm="auto">13</Col>
      </StyledRow>
      <StyledRow>
        <Col>Assigned:</Col>
        <Col sm="auto">13</Col>
      </StyledRow>
      <StyledRow>
        <Col>Due Today:</Col>
        <Col sm="auto">13</Col>
      </StyledRow>
    </InfoContainer>
  );
}

export default InfoCard;

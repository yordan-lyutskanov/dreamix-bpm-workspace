import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Cookies from "universal-cookie";
import FilterCard from "../components/FilterCard";
import InfoCard from "../components/InfoCard";
import SearchCard from "../components/SearchCard";
import TaskList from "../components/TaskList";
import {
  COLOR_FONT_NORMAL,
  COLOR_FONT_LIGHT,
  COLOR_PRIMARY,
} from "../themes/Theme";
import { callGetAllTasks } from "../api/BPMApi";

const PageContainer = styled(Container)`
  width: 100%;
  height: 100%;
  padding: 0px;
`;

const HeadingRow = styled(Row)`
  border-bottom: 2px solid ${COLOR_PRIMARY};
  text-align: left;
  margin: 17px 0px;
  color: ${COLOR_FONT_NORMAL};
`;

const TasklistCol = styled(Col)`
  padding: 8px 20px 0px 20px !important;
`;

const SidebarCol = styled(Col)`
  background-image: url("background.png");
  padding: 90px 20px 0px 20px !important;
  border-right: 1px solid ${COLOR_FONT_LIGHT};
  border-bottom: 1px solid ${COLOR_FONT_LIGHT};
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 10px;
`;

const FullHeightRow = styled(Row)`
  height: 100%;
`;

const NotLoggedInContainer = styled.div`
  text-align: center;
  color: ${COLOR_FONT_NORMAL};
`;

const StyledLink = styled.a`
  color: ${COLOR_PRIMARY};
`;

function Workspace() {
  const user = new Cookies().get("user");
  const [tasks, setTasks] = useState([]);

  useEffect(
    () =>
      callGetAllTasks()
        .then((res) => res.json())
        .then((data) => setTasks(data)),
    []
  );

  return (
    <PageContainer fluid>
      <FullHeightRow noGutters="true">
        <SidebarCol sm={0} lg={3}>
          {
            <StickyContainer>
              <InfoCard user={user} />
              <SearchCard />
              <FilterCard />
            </StickyContainer>
          }
        </SidebarCol>
        <TasklistCol sm={12} lg={9}>
          <HeadingRow>
            <Col>
              <h1>Workspace</h1>
            </Col>
          </HeadingRow>
          {user ? (
            <TaskList tasks={tasks} />
          ) : (
            <NotLoggedInContainer>
              <h3>
                <StyledLink href="/login">Log in</StyledLink> to see your tasks.
              </h3>
            </NotLoggedInContainer>
          )}
        </TasklistCol>
      </FullHeightRow>
    </PageContainer>
  );
}

export default Workspace;

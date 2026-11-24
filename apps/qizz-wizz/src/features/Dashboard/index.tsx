import React from "react";
import { DashboardContainer } from "./styledComponent";
import { Heading, HeadingContainer } from "../../styles";

function Dashboard() {
  return (
    <React.Fragment>
      <DashboardContainer>
        <HeadingContainer bg="black">
          <Heading color="white">Dashboard</Heading>
        </HeadingContainer>
      </DashboardContainer>
    </React.Fragment>
  );
}

export default Dashboard;

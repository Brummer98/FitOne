// Chart js
import { Doughnut } from "react-chartjs-2";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "chart.js/auto";

// Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Eaten", "Left"],
  datasets: [
    {
      label: "# of Votes",
      data: [66, 33],
      backgroundColor: ["#2A6892", "#989898"],
      borderColor: ["#eee", "#eee"],
      borderWidth: 4,
    },
  ],
  options: {
    title: {
      display: true,
      text: "Chart.js Doughnut Chart",
    },
  },
};

function ChartsContainer() {
  return (
    <>
      <Container className="containerCharts" fluid>
        <Row>
          <Col></Col>
          <Col className="colChart">
            <h3>Carbs</h3>
            <Doughnut className="dcMain" data={data} />
          </Col>
          <Col></Col>
          <Col></Col>
          <Col className="colChart">
            <h3>Protein</h3>
            <Doughnut className="dcMain" data={data} />
          </Col>
          <Col></Col>
          <Col></Col>
          <Col className="colChart">
            <h3>Fat</h3>
            <Doughnut className="dcMain" data={data} />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default ChartsContainer;

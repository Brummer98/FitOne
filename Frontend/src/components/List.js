// React import
import React from "react";

// Bootstrap imports
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
      repos.map((repo) => {
        return (
            <ul>
                <li key={repo.id}>{repo.name}</li>
            </ul>
        );
      })
  );
};
export default List;

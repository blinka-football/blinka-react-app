import React from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";

const GameSelection = ({ onSelectLevel, onStartGame, disabled }) => {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={12} md={6}>
          <div className="game-selection text-center">
            <h2 className="game-body">LET'S BEGIN</h2>
            <h3 className="game-description">
              SELECT A LEVEL BELOW
            </h3>
            <Form.Group controlId='levelSelect' id="level-selector" className="mb-3 d-flex justify-content-center">
              <Form.Select
                onChange={onSelectLevel}
                className="custom-select"
                style={{ marginLeft: "0px" }} // Apply inline style here
              >
                <option value="">Select a level</option>
                <option value="6" style={{ textAlign: "left" }}>Level 1</option>
                <option value="5" style={{ textAlign: "left" }}>Level 2</option>
                <option value="4" style={{ textAlign: "left" }}>Level 3</option>
                <option value="3" style={{ textAlign: "left" }}>Level 4</option>
                <option value="2" style={{ textAlign: "left" }}>Level 5</option>
                <option value="1" style={{ textAlign: "left" }}>Level AI</option>
              </Form.Select>
            </Form.Group>
            <Button
              className="startBtn"
              variant="primary"
              disabled={disabled}
              onClick={onStartGame}
            >
              <span className="start-btn-text">START GAME ⚽</span>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GameSelection;

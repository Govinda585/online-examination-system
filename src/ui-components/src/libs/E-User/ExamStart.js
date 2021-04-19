import React from "react";
import { Card } from "react-bootstrap";
import Countdown from "react-countdown";

const ExamStart = () => {
  const Completionist = () => {
    window.alert("Time Off");
  };
  return (
    <>
      <h6>ONLINE EXAM PAPER</h6>
      <div
        style={{
          fontSize: "70px",
          border: "1px solid gray",
          height: "100px",
          width: "360px",
          margin: "10px auto",
        }}
      >
        <Countdown date={Date.now() + 300000}>
          <Completionist />
        </Countdown>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Card style={{ width: "38rem" }}>
          <Card.Title>Exam Question</Card.Title>
          <Card.Text>
            <div>
              <form style={{ display: "flex", justifyContent: "space-around" }}>
                <p>
                  <input type="radio" name="answer" />
                  <label>Answer 1</label>
                </p>
                <p>
                  <input type="radio" name="answer" />
                  <label>Answer 2</label>
                </p>
                <p>
                  <input type="radio" name="answer" />
                  <label>Answer 3</label>
                </p>
                <p>
                  <input type="radio" name="answer" />
                  <label>Answer 4</label>
                </p>
                <div style={{ textAlign: "center" }}>
                  <input type="submit" value="submit" />
                </div>
              </form>
            </div>
          </Card.Text>
        </Card>
        <Card style={{ width: "38rem" }}>
          <Card.Title>Exam Question</Card.Title>
          <Card.Text>
            <div>
              <form style={{ display: "flex", justifyContent: "space-around" }}>
                <p>
                  <input type="radio" name="answer" />
                  <label>Answer 1</label>
                </p>
                <p>
                  <input type="radio" name="answer" />
                  <label>Answer 2</label>
                </p>
                <p>
                  <input type="radio" name="answer" />
                  <label>Answer 3</label>
                </p>
                <p>
                  <input type="radio" name="answer" />
                  <label>Answer 4</label>
                </p>
                <div style={{ textAlign: "center" }}>
                  <input type="submit" value="submit" />
                </div>
              </form>
            </div>
          </Card.Text>
        </Card>
        <Card style={{ width: "38rem" }}>
          <Card.Title>Exam Question</Card.Title>
          <Card.Text>
            <div>
              <form style={{ display: "flex", justifyContent: "space-around" }}>
                <p>
                  <input type="radio" name="answer" />
                  <label>Answer 1</label>
                </p>
                <p>
                  <input type="radio" name="answer" />
                  <label>Answer 2</label>
                </p>
                <p>
                  <input type="radio" name="answer" />
                  <label>Answer 3</label>
                </p>
                <p>
                  <input type="radio" name="answer" />
                  <label>Answer 4</label>
                </p>
                <div style={{ textAlign: "center" }}>
                  <input type="submit" value="submit" />
                </div>
              </form>
            </div>
          </Card.Text>
        </Card>
        <Card style={{ width: "38rem" }}>
          <Card.Title>Exam Question</Card.Title>
          <Card.Text>
            <div>
              <form style={{ display: "flex", justifyContent: "space-around" }}>
                <p>
                  <input type="radio" name="answer" />
                  <label>Answer 1</label>
                </p>
                <p>
                  <input type="radio" name="answer" />
                  <label>Answer 2</label>
                </p>
                <p>
                  <input type="radio" name="answer" />
                  <label>Answer 3</label>
                </p>
                <p>
                  <input type="radio" name="answer" />
                  <label>Answer 4</label>
                </p>
                <div style={{ textAlign: "center" }}>
                  <input type="submit" value="submit" />
                </div>
              </form>
            </div>
          </Card.Text>
        </Card>
      </div>
    </>
  );
};

export default ExamStart;

import react, { useState } from "react";

function App() {
  const [field, setField] = useState("");
  const [condition, setCondition] = useState("");
  const [criteria, setCriteria] = useState("");

  const fields = [
    "Theme",
    "Sub-theme",
    "Reason",
    "Language",
    "Source",
    "Rating",
    "Time Period",
    "Customer ID",
  ];
  const conditions = [
    "Equals",
    "Does not equal",
    "Like",
    "Not Like",
    "Is Empty",
    "Is",
    "Is not",
  ];
  const criterias = ["Offers", "Performance", "Platform", "Product Feedback"];

  const handleChange = (e) => {
    if (e.target.name == "Field") setField(e.target.value);
    if (e.target.name == "Condition") setCondition(e.target.value);
    if (e.target.name == "Criteria") setCriteria(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = [
    //   { field: field },
    //   { conditon: condition },
    //   { criteria: criteria },
    // ];
    // const query = [];
    // for (let d in data) {
    //   query.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
    //   return query.join("&");
    // }
    // alert(query + "query generated");
    console.log("queryClicked");
  };
  

  return (
    <>
      <div className="home-container">
        <h1 className="navbar">Query App</h1>
        {/* <h1>Field : {field}</h1>
        <h1>Condition : {condition}</h1>
        <h1>Criteria : {criteria}</h1> */}
{/* <Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container> */}
        <form>
          <div className="dropdown-container">
            <Row>
            <div className="dropdown">
              
              <select name="Field" id="field" onChange={handleChange}>
                <option value="">Select Field</option>
                {fields.map((val) => (
                  <option value={val}>{val}</option>
                ))}
              </select>
            </div>
            </Row>
            <Row>
            <div className="dropdown">
              <select name="Condition" id="condition" onChange={handleChange}>
                <option value="">Select Conditon</option>
                {conditions.map((val) => (
                  <option value={val}>{val}</option>
                ))}
              </select>
            </div>
            </Row>
            <Row>
            <div className="dropdown">
              <select name="Criteria" id="criteria" onChange={handleChange}>
                <option value="">Select Criteria</option>
                {criterias.map((val) => (
                  <option value={val}>{val}</option>
                ))}
              </select>
            </div>
            </Row>
          </div>
          <button onClick={handleSubmit}>Generate Query</button>
        </form>
      </div>
    </>
  );
}

export default App;

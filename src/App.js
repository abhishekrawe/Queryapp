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
    if (e.target.name === "Field") setField(e.target.value);
    if (e.target.name === "Condition") setCondition(e.target.value);
    if (e.target.name === "Criteria") setCriteria(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let query = new URLSearchParams();
    query.append("field", field);
    query.append("condition", condition);
    query.append("criteria", criteria);

    console.log(query.toString());
  };

  return (
    <>
      <div className="home-container">
        <h1 style={{ color: "white" }} className="navbar">
          Create tag and query
          <form>
          <label className="label">
            Build your Query
            <input className="input-type" type="text" name="name" />
          </label>
          {/* <input type="submit" value="Submit" /> */}
        </form>
        </h1>
        
        {/* <h1>Field : {field}</h1>
        <h1>Condition : {condition}</h1>
        <h1>Criteria : {criteria}</h1> */}

        <form>
          <div className="dropdown-container">
            <div className="dropdown-1">
              <select
                className="dropdown-select"
                name="Field"
                id="field"
                onChange={handleChange}
              >
                <option className="dropdown-option" value="">
                  Select Field
                </option>
                {fields.map((val) => (
                  <option value={val}>{val}</option>
                ))}
              </select>
            </div>
            <div className="dropdown-2">
              <select
                className="dropdown-select"
                name="Condition"
                id="condition"
                onChange={handleChange}
              >
                <option className="dropdown-option" value="">
                  Select Conditon
                </option>
                {conditions.map((val) => (
                  <option value={val}>{val}</option>
                ))}
              </select>
            </div>
            <div className="dropdown-3">
              <select
                className="dropdown-select"
                name="Criteria"
                id="criteria"
                onChange={handleChange}
              >
                <option className="dropdown-option" value="">
                  Select Criteria
                </option>
                {criterias.map((val) => (
                  <option value={val}>{val}</option>
                ))}
              </select>
            </div>
          </div>
          <button onClick={handleSubmit}>Generate Query</button>
        </form>
      </div>
    </>
  );
}

export default App;

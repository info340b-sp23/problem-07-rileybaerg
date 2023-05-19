import React, { useState } from 'react'; //import React Component

export default function TeamSelectForm(props) {

  //Your work goes here
  const [selectedTeam, setSelectedTeam] = useState('');
  const [isRunnerUp, setIsRunnerUp] = useState(false);

  const handleChangeTeam = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleChangeIsRunnerUp = (event) => {
    setIsRunnerUp(event.target.checked);
  };

  const handleClickSubmit = () => {
    props.applyFilterCallback(selectedTeam, isRunnerUp);
  };

  const optionElems = props.teamOptions.map((teamName) => {
    return <option key={teamName} value={teamName}>{teamName}</option>
  })

  return (
    <div className="row align-items-center mb-3">
      <div className="col-auto">
        <select
          id="teamSelect"
          className="form-select"
          value={selectedTeam}
          onChange={handleChangeTeam}
        >
          <option value="">Show all teams</option>
          {optionElems}
        </select>
      </div>
      <div className="col-auto">
        <div className="form-check">
          <input
            id="runnerupCheckbox"
            type="checkbox"
            className="form-check-input"
            checked={isRunnerUp}
            onChange={handleChangeIsRunnerUp}
          />
          <label htmlFor="runnerupCheckbox" className="form-check-label">Include runner-up</label>
        </div>
      </div>
      <div className="col-auto">
        <button
          id="submitButton"
          type="submit"
          className="btn btn-warning"
          onClick={handleClickSubmit}
        >Apply Filter</button>
      </div>
    </div>
  );
}
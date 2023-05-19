import React, { useState } from 'react'; //import React Component
import GameDataTable from './GameDataTable';
import TeamSelectForm from './TeamSelectForm';

function App(props) {

  //Your work goes here
  const [filterCriteria, setFilterCriteria] = useState({
    teamName: '',
    includeRunnerUp: false,
  });

  const applyFilter = (teamName, includeRunnerUp) => {
    setFilterCriteria({
      teamName: teamName,
      includeRunnerUp: includeRunnerUp,
    });
  };

  const displayedData = props.gameData.filter((game) => {
    if (filterCriteria.teamName === '') {
      return true;
    }
    if (game.winner === filterCriteria.teamName) {
      return true;
    }
    if (filterCriteria.includeRunnerUp && game.runner_up === filterCriteria.teamName) {
      return true;
    }
    return false;
  });

  //get sorted list of unique teamNames. reduce array of objects into array of strings,
  //convert to Set to get uniques, spread back into array, and sort
  const uniqueTeamNames = [...new Set(props.gameData.reduce((all, current) => {
    return all.concat([current.winner, current.runner_up]);
  }, []))].sort();

  return (
    <div className="container">
      <header className="mb-3">
        <h1>FIFA World Cup Finals</h1>
      </header>

      <main>
        <TeamSelectForm teamOptions={uniqueTeamNames} applyFilterCallback={applyFilter} />
        <GameDataTable data={displayedData} />
      </main>

      <footer>
        <small>Data from <a href="https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_finals">Wikipedia</a>.</small>
      </footer>
    </div>
  );
}

export default App;

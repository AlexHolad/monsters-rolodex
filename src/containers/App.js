import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CardList } from "../components/card-list/card-list.component";
import { SearchBox } from "../components/search-box/search-box.component";
import "./App.css";

import { requestRobots, setSearchField } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

const App = (props) => {
  const {
    searchField,
    onSearchChange,
    robots,
    onRequestRobots,
    isPending,
  } = props;

  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  const filteredMonsters = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return isPending ? (
    <h1>Loading...</h1>
  ) : (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder="search monsters"
        onSearchChange={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

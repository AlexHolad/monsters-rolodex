import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onsearch, selectSearchField } from "../features/search/searchSlice";
import { fetchMonsters, selectMonsters } from "../features/fetch/fetchSlice";

import { CardList } from "../components/card-list/card-list.component";
import { SearchBox } from "../components/search-box/search-box.component";
import "./App.css";




const App = (props) => {
  const searchField = useSelector(selectSearchField)
  const dispatch = useDispatch()

  const monsters = useSelector(selectMonsters)

  const monsterStatus = useSelector(state => state.monsters.status)
  const error = useSelector(state => state.monsters.error)

  useEffect(() => {
    if (monsterStatus === 'idle') {
      dispatch(fetchMonsters())
    }
  }, [dispatch, monsterStatus]);

  let content

  if (monsterStatus === 'loading') {
    content = <h1>Loading...</h1>
  } else if (monsterStatus === 'succeeded') {
    // Sort posts in reverse chronological order by datetime string
    const filteredMonsters = monsters.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

    content = <CardList monsters={filteredMonsters} />
  } else if (monsterStatus === 'failed') {
    content = <div>{error}</div>
  }


  const onSearchChange = (e) => {
    dispatch(onsearch(e.target.value))
  }

  

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder="search monsters"
        onSearchChange={onSearchChange}
      />
      {content}
    </div>
  );
};

export default App;

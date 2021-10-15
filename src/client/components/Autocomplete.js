import React from "react";
import { useHistory } from "react-router-dom";
export default function Autocomplete({ meals }) {
  const [searchItem, setSearchItem] = React.useState("");
  const [suggestFoods, setSuggestFoods] = React.useState([]);
  const [resfound, setResfound] = React.useState(true);
  const history = useHistory();

  const handleChange = (e) => {
    const searchValue = e.target.value;
    let suggestionFoods = [];
    if (searchValue.length > 0) {
      suggestionFoods = meals
        .map((food) => food.title)
        .filter((e) => e.includes(searchValue));
      setResfound(suggestionFoods.length !== 0 ? true : false);
    }
    setSuggestFoods(suggestionFoods);
    setSearchItem(searchValue);
  };
  const suggestedText = (value) => {
    setSearchItem(value);
    setSuggestFoods([]);
  };

  const handleSearch = (title) => {
    const searchMeal = meals.filter((meal) => meal.title === title);
    history.push(`/meals/${searchMeal[0].id}`);
  };
  const getsuggestedFoods = () => {
    if (suggestFoods.length === 0 && searchItem !== "" && !resfound) {
      return <p>Search content not found</p>;
    }
    return (
      <ul>
        {suggestFoods.map((item, index) => {
          return (
            <div key={index}>
              <li
                onClick={() => suggestedText(item)}
                className="input-autocomplete"
              >
                {item}
              </li>
              {/* {index !== suggestFoods.length - 1 && (
                <hr className="input-autocomplete" />
              )} */}
            </div>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="autoComplete">
      <div className="searchDiv">
        <div>
          <input
            className="input-autocomplete"
            type="searchItem"
            placeholder="search food..."
            value={searchItem}
            onChange={handleChange}
          />
        </div>
        {getsuggestedFoods()}
        <div className="warp">
          <button type="submit" onClick={() => handleSearch(searchItem)}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

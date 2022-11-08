import React, {useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";


const items = [
  {
    title: "what is react?",
    content: "React is a front end javascript framework",
  },
  {
    title: "why use react?",
    content: "React is a favourite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "you use react by creating components",
  },
];

const options = [
    {
        label: 'The Color Red',
        value: 'red',
        type: 'color'
    },
    {
        label: 'The Color Green',
        value: 'green',
        type: 'color'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue',
        type:'color'
    }
];

const App = () => {
  const [selected,setSelected]= useState(options[0]);
  return (
    <div>
      <Header />
      <hr/>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
        label="Select a color"
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
export default App;
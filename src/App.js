// import "./App.css";
// import Hello from "./component/Hello";
// import Welcome from "./component/Welcome";
// import styles from "./App.module.css";

// function App() {
//   return (
//     <div className="App">
//       <h3>props : properties</h3>
//       <Hello age={10} />
//       <Hello age={20} />
//       <Hello age={30}  />
//     </div>
//   );
// }

import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateDay from "./component/CreateDay";
import CreateWord from "./component/CreateWord";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />}></Route>
          <Route path="/day/:day" element={<Day />}></Route>
          <Route path="/create_word" element={<CreateWord />}></Route>
          <Route path="/create_day" element={<CreateDay />}></Route>
          <Route path="*" element={<EmptyPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

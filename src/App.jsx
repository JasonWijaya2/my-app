// filepath: 
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Countdown from "./routes/Countdown/Countdown";
import FilterableProductTable from "./routes/FilterableProductTable/FilterableProductTable";
import { Counter, SimplePage, ContextDemo, Form, SimpleConditionalRendering, ListRendering, LiftingStateUp, CallbackChildren, Todo } from "./routes";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SimplePage />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/context" element={<ContextDemo />} />
        <Route path="/form" element={<Form />} />
        <Route path="/thinking" element={<FilterableProductTable />} />
        <Route path="/conditional-rendering" element={<SimpleConditionalRendering />} />
        <Route path="/list-rendering" element={<ListRendering />} />
        <Route path="/lifting-state-up" element={<LiftingStateUp />} />
        <Route path="/callback-children" element={<CallbackChildren />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
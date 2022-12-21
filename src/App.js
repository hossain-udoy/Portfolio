import "./App.css";
import { useContext } from "react";
import { themeContext } from "./Context";
import { RouterProvider } from "react-router-dom";
import Route from "./Routes/Route";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <RouterProvider router={Route}></RouterProvider>
    </div>
  );
}

export default App;

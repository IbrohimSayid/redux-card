import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import UserForm from "./Components/UserForm";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App bg-gray-100 min-h-screen pt-8">
        <UserForm />
      </div>
    </Provider>
  );
};

export default App;

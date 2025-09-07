import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./screens/Home/Home"; 
import NotFound from "./screens/Notfound/Notfound";
function App() {
  return (
 <Switch>
      {/* Ruta raíz */}
      <Route path="/" exact={true} component={Home} />

     
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;

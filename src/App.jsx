import React from "react";
import { Box, Container } from "react-bulma-components";

const App = () => {
  return (
    <Container>
      <Box className="container box">
        <h1>nav bar here</h1>
      </Box>
      <div className="container content is-large">
        <h1 className="title">Muhammad Saad Khan Niazi</h1>
        <p className="subtitle">NodeJs Developer | 3D modeler | Video Editor</p>
      </div>
    </Container>
  );
};

export default App;

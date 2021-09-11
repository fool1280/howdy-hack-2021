import React from "react";
import Button from "@material-ui/core/Button";

const App = () => {
    return (
        <div
            style={{
                display: "flex",
                margin: "auto",
                width: 400,
                flexWrap: "wrap",
                justifyContent: "center",
            }}
        >
            <Button variant="contained" color="Secondary">
                Secondary Button
            </Button>
        </div>
    );
};

export default App;

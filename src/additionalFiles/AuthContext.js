import React from "react";

const AuthContext = React.createContext({
    position: undefined,
    setPosition: undefined
});

export default AuthContext;
import React from 'react';
import ReactDOM from 'react-dom/client';
//import Admin from './Admin';
//import ManageClassRoom from './ManageClassRoom';
import Controller from './Controller';
import ManageUsers from './ManageUsers';
import App from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Controller></Controller>
        {/* <Admin></Admin> */}
        {/* <ManageClassRoom></ManageClassRoom> */}
        {/* <Login></Login> */}
    </>
    
);

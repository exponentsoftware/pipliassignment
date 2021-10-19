import React, { useState } from 'react';
import LoginUI from './Login';

function Login() {
    const [view, setView] = useState(false);

    const handleType = () => setShow(!view);

    return <LoginUI handleType={handleType} view={view}/>
}

export default Login;

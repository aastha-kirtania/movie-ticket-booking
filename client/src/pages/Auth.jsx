import React, { useState } from 'react';

const Auth = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [formData, setFormData] = useState({ email: '', password: '', name: '' });

    const switchModeHandler = () => {
        setIsLoginMode((prevMode) => !prevMode);
    };

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (isLoginMode) {
            // handle login
            console.log('Logging in with:', formData);
        } else {
            // handle signup
            console.log('Signing up with:', formData);
        }
        // Clear form
        setFormData({ email: '', password: '', name: '' });
    };

    return (
        <div>
            <h2>{isLoginMode ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={submitHandler}>
                <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={inputChangeHandler}
                    placeholder="Email"
                    required
                />
                <input 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={inputChangeHandler}
                    placeholder="Password"
                    required
                />
                {!isLoginMode && (
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={inputChangeHandler}
                        placeholder="Name"
                        required
                    />
                )}
                <button type="submit">{isLoginMode ? 'Login' : 'Sign Up'}</button>
            </form>
            <button onClick={switchModeHandler}>Switch to {isLoginMode ? 'Sign Up' : 'Login'}</button>
        </div>
    );
};

export default Auth;
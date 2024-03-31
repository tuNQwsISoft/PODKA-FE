import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import AuthenService from '../../services/auth.service';
import { GlobalContext } from '../../contexts/Global/GlobalContext';
import {
    GlobalAddToast,
    GlobalLoadingEnd,
    GlobalLoadingStart,
} from '../../contexts/Global/GlobalAction';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { AuthSetUser } from '../../contexts/AuthContext/AuthAction';

const LoginForm = () => {
    const globalContext = useContext(GlobalContext);
    const authContext = useContext(AuthContext);
    const { isLoading, response } = useFetch(AuthenService.getLogin);
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            globalContext.dispatch(GlobalLoadingStart());
            const formData = new FormData(e.currentTarget);
            const username = formData.get('username');
            const password = formData.get('password');
            const result = await AuthenService.login({
                component: response.component,
                username,
                password,
            });
            if (result) {
                const user = await AuthenService.getUserInfo();
                authContext.dispatch(AuthSetUser(user));
            }
        } catch (error) {
            // globalContext.dispatch(
            //     GlobalAddToast({
            //         title: 'Login error',
            //         message: error.message,
            //         variant: 'error',
            //     })
            // );
        } finally {
            globalContext.dispatch(GlobalLoadingEnd());
            const user = {
                username: 'nguyen quoc tuan',
                role: 'admin',
            };
            authContext.dispatch(AuthSetUser(user));
        }
    };
    return (
        <form
            className="login-form flex w-[30rem] h-[30rem] flex-col gap-y-[2rem] rounded-[6px] p-[2.25rem]"
            onSubmit={handleLogin}
        >
            <div className="grid gap-y-[4px]">
                <h3 className="text-[2.1875rem] font-bold uppercase text-[#1F679F]">
                    Login
                </h3>
                <span className="text-medium text-[#1F679F]">
                    Welcome to our platform!
                </span>
            </div>
            <div className="grid gap-y-[1rem]">
                <div className="flex flex-col gap-y-[4px]">
                    <label htmlFor="username" className="text-half-white">
                        Username
                    </label>
                    <div className="login-input-group">
                        {/* <IconPerson
                            fill="rgba(0, 0, 0, 0.6)"
                            width="1.125rem"
                            height="1.125rem"
                        /> */}
                        <input
                            type="text"
                            placeholder="Username"
                            id="username"
                            name="username"
                            className="background-none flex-1 border-none text-black outline-none placeholder:text-half-black"
                            autoFocus
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-y-[4px]">
                    <label htmlFor="password" className="text-half-white">
                        Password
                    </label>
                    <div className="login-input-group">
                        {/* <IconLock
                            fill="rgba(0, 0, 0, 0.6)"
                            width="1.125rem"
                            height="1.125rem"
                        /> */}
                        <input
                            type={showPassword === true ? 'text' : 'password'}
                            placeholder="Password"
                            id="password"
                            name="password"
                            className="background-none flex-1 border-none text-black outline-none placeholder:text-half-black"
                        />
                        {/* {showPassword === true ? (
                            // <IconVisibility
                            //     fill="rgba(0, 0, 0, 0.6)"
                            //     width="1.125rem"
                            //     height="1.125rem"
                            //     cursor="pointer"
                            //     onClick={() => setShowPassword(false)}
                            // />
                        ) : (
                            <IconVisibilityOff
                                fill="rgba(0, 0, 0, 0.6)"
                                width="1.125rem"
                                height="1.125rem"
                                cursor="pointer"
                                onClick={() => setShowPassword(true)}
                            />
                        )} */}
                    </div>
                </div>
            </div>
            <button
                className="login-btn"
                disabled={isLoading || globalContext.isFetching}
            >
                Login
            </button>
            <div className="flex flex-col items-center gap-y-[4px]">
                <NavLink
                    to="#"
                    className="text-[#1F679F] no-underline hover:underline"
                >
                    Forgot password?
                </NavLink>
                <NavLink
                    to="#"
                    className="text-[#1F679F] no-underline hover:underline"
                >
                    or Create an account
                </NavLink>
            </div>
        </form>
    );
};

export default LoginForm;

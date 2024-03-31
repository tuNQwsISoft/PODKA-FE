import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";
import { GlobalLoadingEnd, GlobalLoadingStart } from "./GlobalAction";

/**
 * @typedef {{
 *  type: "error" | "warning" | "info",
 *  header: string,
 *  confirmMessage: string,
 *  message: string,
 *  show: boolean,
 *  onCancel: () => void,
 *  onConfirm: () => void
 * }} Popup
 */

/**
 * @typedef {{
 *  title: string,
 *  path: string,
 *  level: number
 * }} Path
 */

/**
 * @typedef {{
 *  isFetching: boolean,
 *  fetchAPI: () => Promise<void>,
 *  dispatch: () => void,
 *  popup: Popup,
 *  paths: Array<Path>,
 *  masterData: object
 * }} GlobalState
 */

/**
 * @type {GlobalState}
 */
const INIT_STATE = {
    isFetching: false,
    fetchAPI: async () => {},
    dispatch: () => {},
    popup: {
        type: "",
        header: "",
        confirmMessage: "",
        message: "",
        show: false,
        onCancel: () => {},
        onConfirm: () => {},
    },
    toastList: [],
    paths: [{ title: "Home", path: "/home", level: 1 }],
    masterData: {},
};

export const GlobalContext = createContext(INIT_STATE);

const GlobalContextProvider = ({ children }) => {
    const fetchAPI = async (serviceCallback) => {
        try {
            dispatch(GlobalLoadingStart());
            const data = await serviceCallback();
            return data;
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(GlobalLoadingEnd());
        }
    };
    const [state, dispatch] = useReducer(GlobalReducer, INIT_STATE);
    return (
        <GlobalContext.Provider
            value={{
                isFetching: state.isFetching,
                dispatch,
                fetchAPI,
                popup: state.popup,
                toastList: state.toastList,
                paths: state.paths,
                masterData: state.masterData,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;

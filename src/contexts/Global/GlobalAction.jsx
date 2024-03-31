export const GlobalActionType = {
    fetchStart: "FETCH_START",
    fetchEnd: "FETCH_END",
    setPopup: "SET_POPUP",
    setPath: "SET_PATH",
    // setToastList: "SET_TOAST_LIST",
    addToast: "ADD_TOAST",
    removeToast: "REMOVE_TOAST",
    setMasterData: "SET_MASTER_DATA",
};
export const GlobalLoadingStart = () => ({
    type: GlobalActionType.fetchStart,
});
export const GlobalLoadingEnd = () => ({
    type: GlobalActionType.fetchEnd,
});

/**
 *
 * @param {{
 * type: "error" | "info" | "warning",
 * header: string,
 * confirmMessage: string,
 * message: string,
 * show: boolean,
 * onConfirm?: React.MouseEventHandler<HTMLButtonElement>,
 *  onCancel?: React.MouseEventHandler<HTMLButtonElement>
 * }} popup
 * @returns
 */
export const GlobalSetPopup = (popup) => ({
    type: GlobalActionType.setPopup,
    payload: popup,
});

/**
 * @typedef {{
 *  title: string,
 *  path: string,
 *  level: number
 * }} Path
 */

/**
 *
 * @param {Array<Path>} paths
 * @returns
 */
export const GlobalSetPath = (paths) => ({
    type: GlobalActionType.setPath,
    payload: paths,
});

// export const GlobalSetToast = (toastList) => ({
//     type: GlobalActionType.setToastList,
//     payload: toastList,
// });

export const GlobalRemoveToast = (toastId) => ({
    type: GlobalActionType.removeToast,
    payload: toastId,
});

/**
 * @typedef {{
 *  title: string,
 *  message: string,
 *  variant: "error" | "success" | "info" | "warning"
 * }} Toast
 */

/**
 *
 * @param {Toast} toast
 * @returns
 */
export const GlobalAddToast = (toast) => ({
    type: GlobalActionType.addToast,
    payload: toast,
});

export const GlobalSetMasterData = (masterData) => ({
    type: GlobalActionType.setMasterData,
    payload: masterData,
});

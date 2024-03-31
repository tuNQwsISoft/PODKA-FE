import { GlobalActionType } from "./GlobalAction";

export default function GlobalReducer(state, action) {
    switch (action.type) {
        case GlobalActionType.fetchStart:
            return {
                ...state,
                isFetching: true,
            };
        case GlobalActionType.fetchEnd:
            return {
                ...state,
                isFetching: false,
            };
        case GlobalActionType.setPopup:
            return {
                ...state,
                popup: action.payload,
            };
        // case GlobalActionType.setToastList:
        //     return {
        //         ...state,
        //         toastList: action.payload,
        //     };
        case GlobalActionType.removeToast:
            return {
                ...state,
                toastList: state.toastList.filter(
                    (toast) => toast.id !== action.payload,
                ),
            };
        case GlobalActionType.addToast:
            return {
                ...state,
                toastList: state.toastList.concat({
                    id: Date.now(),
                    ...action.payload,
                }),
            };
        case GlobalActionType.setPath:
            return {
                ...state,
                paths: action.payload,
            };
        case GlobalActionType.setMasterData:
            return {
                ...state,
                masterData: action.payload,
            };
        default:
            return state;
    }
}

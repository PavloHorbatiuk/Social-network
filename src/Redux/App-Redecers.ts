import {getUserData} from "./Auth-reducer";
import {AppRootStateType, AppThunk} from "./redax-store";


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCES";

export type appType = typeof initialState;
export const initialState = {
    initiallized: false
};

const appReduecer = (state: appType = initialState, action: AppActionType): typeof initialState => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initiallized: true
            };
        default:
            return state;
    }
};

export const initializedSuccessAC = () => {
    return {
        type: INITIALIZED_SUCCESS,
    } as const;
};
export const initializeAppThunk = (): AppThunk => {
    return (dispatch, getState: () => AppRootStateType) => {
        let promise = dispatch(getUserData());
        debugger
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccessAC())
            })
    }
}


type AppActionType = ReturnType<typeof initializedSuccessAC>


export default appReduecer;

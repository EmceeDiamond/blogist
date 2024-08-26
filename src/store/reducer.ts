import * as actions from "./actionsTypes"
import AddStoreUsers from "./Initial"

export const InitialUsers: any[] = AddStoreUsers();

export default function reducer (state: any[] = InitialUsers, action: any){
    switch(action.type){
        case actions.USERS_DELETE:
            return state.filter((user) => Number(action.payload.user_id) !== Number(user.id));
        case actions.USERS_LIKE:
            const updateState = [...state];
            const indexElement = updateState.findIndex((user) => Number(user.id) === Number(action.payload.user_id))
            updateState[indexElement].like = true;
            return updateState;
        default:
            return state;
    }
}
import * as actions from "./actionsTypes"

export const deleteUsers = (user_id:any) => ({
    type: actions.USERS_DELETE,
    payload: {user_id}
});
export const likeUsers = (user_id:any) => ({
    type: actions.USERS_LIKE,
    payload: {user_id}
});
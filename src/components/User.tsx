import { FC } from "react"
import { Users } from "../types"
import { useDispatch } from "react-redux"
import * as actions from "../store/actions"
import { useNavigate } from "react-router-dom"

const User: FC<{user: Users}> = ({user}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    return(
        <div className="ighh" >
            <div onClick={() => navigate(`/user/${user.id}`)}>
                <img src={user.avatar_url} className="customers-img"/>
                <div>
                    <b>Account name:</b>
                    <h2>{user.login}</h2>
                </div>
            </div>
            <div>
                <button className={user.like ? "heart_active" :"heart"} onClick={() => dispatch(actions.likeUsers(user.id))}/>
                <button className="btn_Del" onClick={() => dispatch(actions.deleteUsers(user.id))}/>
            </div>
        </div>
    )
}

export default User
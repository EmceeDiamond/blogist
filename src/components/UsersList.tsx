import {Users} from "../types";
import User from "./User";
import "./User.css"
import { FC } from "react";

const UsersList: FC<{users: Users[], status:any}> = ({users, status}) => {

    return(
        <div className="grid">
            {users?.map((item) => {
                if (status === item.like === true)
                    return <User user={item}/>
                if (status === false)
                    return <User user={item}/>
            })}
        </div>
    )
}

export default UsersList;
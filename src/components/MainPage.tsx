import UsersList from "./UsersList";
import { FC, useState } from "react";
import { Users } from "../types";

const MainPage: FC<{users: Users[]}> = ({users}) => {
    const [dataStatus, setDataStatus] = useState(false);

    return(
        <div>
            <h1>Blogist</h1>
            <button onClick={() => setDataStatus(!dataStatus)}>{dataStatus ? "Likes" : "All"}</button>
            <UsersList users={users} status={dataStatus}/>
        </div>
        
    )
}

export default MainPage;
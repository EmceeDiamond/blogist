import { FC, useEffect, useState } from "react"
import { Users } from "../types"
import { useNavigate, useParams } from "react-router-dom"

const UserInformation: FC<{users: Users[]}> = ({users}) => {
    const [user, setUser] = useState<Users>();
    const {id} = useParams()
    const filterUser:any = users.filter((user) => user.id === Number(id))
    const navigate = useNavigate();

    useEffect(() => {
        filterUser.map((user:any) => 
            setUser(user)
        )
    })

    return(
        <div className="back-inf">
            <button onClick={() => navigate('/')}>Back</button>
            <div className="box">
                <div >
                    <img className="img-inf" src={user?.avatar_url}/>
                </div>
                <div className="txt-inf">
                    <b>Account name:</b>
                    <h2>{user?.login}</h2>
                    <b>Like the mark:</b>
                    <h2>{user?.like ? "Yes" : "No"}</h2>
                    <b>Administrator status:</b>
                    <h2>{user?.site_admin  ? "Yes" : "No"}</h2>
                    <b>Followers:</b>
                    <h2>{user?.followers_url}</h2>
                    <b>Following:</b>
                    <h2>{user?.following_url}</h2>
                </div>
            </div>
        </div>
        
        
    )

} 

export default UserInformation;
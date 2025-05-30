import { useEffect, useState } from "react";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    const filterUser = (user, searchParamRaw) => {
        const searchParam = searchParamRaw.toLowerCase()
        return user.name.toLowerCase().includes(searchParam) || user.email.toLowerCase().includes(searchParam)|| user.company.name.toLowerCase().includes(searchParam)
    }

    const handleInputChange = (event) => {
        const searchParam = event.target.value
        const filteredUsers = users.filter((user) => filterUser(user, searchParam))
        setFilteredUsers(filteredUsers)
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setFilteredUsers(data);
            });
    }, []);

    return (
        <div>
            <h2>UserList</h2>
            <input type="search" placeholder="Busqueda" onChange={handleInputChange}/>
            {filteredUsers.map((user) => {
                return (
                    <p key={user.id}>
                        {user.name} - {user.email} - {user.company.name}
                    </p>
                );
            })}
        </div>
    );
};

export default UserList;

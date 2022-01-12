import React, { useState } from 'react';

const users = [
    {name: 'omkesh', age: 28},
    {name: 'sumeet', age: 27},
    {name: 'dhawal', age: 29},
];
const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string; age: number} | undefined>();
    const onClick = () => {
        const userFound = users.find((user) => {
            return user.name === name;
        });
        setUser(userFound);
    };
    return (
        <div>
            User search
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Find Users</button>
            <div>{user && user.name}</div>
            <div>{user?.age}</div>
        </div>
    );
};

export default UserSearch;

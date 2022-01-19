import React, { useEffect, useRef, useState } from 'react';

const users = [
    {name: 'omkesh', age: 28},
    {name: 'sumeet', age: 27},
    {name: 'dhawal', age: 29},
];
const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string; age: number} | undefined>();
    useEffect(() => {
        inputRef.current?.focus();
    });

    const onClick = () => {
        const userFound = users.find((user) => {
            return user.name === name;
        });
        setUser(userFound);
    };
    return (
        <div>
            User search
            <input
                ref={inputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={onClick}>Find Users</button>
            <div>{user && user.name}</div>
            <div>{user?.age}</div>
        </div>
        <dispatchEvent></dispatchEvent>
    );
};

export default UserSearch;

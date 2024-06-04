import React, { useState } from "react";

function HookName() {
    const initialState = { firstname: "", lastname: "" };
    const [name, setName] = useState(initialState);

    return (
        <div>
            <input
                type="text"
                value={name.firstname}
                onChange={(e) => setName({ ...name, firstname: e.target.value })}
            />
            <input
                type="text"
                value={name.lastname}
                onChange={(e) => setName({ ...name, lastname: e.target.value })}
            />
            <p>First name-{name.firstname} Second Name-{name.lastname}</p>
        </div>
    );
}

export default HookName
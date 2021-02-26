import React, { Component, useEffect, useState } from "react";

function Counter(){
    const [count, SetCount] = useState(0)

    return (
        <button onClick={() => SetCount(count + 1)}>{count}</button>
    );
}

export default Counter
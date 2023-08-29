import React from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { useState } from "react";

function Like() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const like = count === 0 ? "block" : "hidden";
    const unlike = count === 1 ? "block" : "hidden";

    return (
        <div className="h-[50vh] grid justify-items-center content-center">
            <p>{count}</p>
            <BiLike onClick={increment} className={`${like}`} />
            <BiSolidLike onClick={decrement} className={`${unlike}`} />
        </div>
    );
}

export default Like;

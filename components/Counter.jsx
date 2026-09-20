import { useState } from "react";

import Header from "./Header";

function Counter() {

    const [count, setCount] = useState(0);

    return (

        <div className="max-w-6xl mx-auto p-6">

            <Header />

            <br />

            <h1 className="text-3xl font-bold mb-6 text-center">Counter: {count}</h1>

            <div className="flex justify-center space-x-4">

                <button className="border p-2  rounded"

                    onClick={() => setCount(count + 1)}>Increment</button>

                <button className="border p-2  rounded"

                    onClick={() => setCount(count - 1)}>Decrement</button>

            </div>

        </div>

    )

}

export default Counter;
import React from "react";
import Boxes from "./components/Boxes";

export default function App(){

    const [squares , setSquares] = React.useState(Boxes);

    const squareElements = squares.map(square => (
        <div className="box" key={square.id}></div>
    )

    )

return(
<main>
    <h1>Boxes will go here</h1>
</main>
)

}






"use client";

export default function MyButton () {

    const click = () => {
        alert("hi")
      }
    return(
        <div className="p-1 bg-lime-700">
         <button  onClick={click}>Component</button>
        </div>
    )
}
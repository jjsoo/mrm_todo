import React from "react";

const List = (props:{myName:string,age?:number,games?:string[]}) => {
    return <div>
        <div>Welcome to my ToDo list {props.myName} </div>
    </div>
}

export default List;
import React from "react";

const TodoItems = (props) => {
    const {items, deleteItems} = props;
    const ListItems = items.length ?
        (items.map(item => {
        return(
        <div key={item.id}>
            <span> {item.name}</span>
            <span> {item.age}</span>
            <span onClick={() => deleteItems(item.id)}> &times; </span>
        </div>
        )
    })):
    (<p>
        there is no items to show
    </p>)

    return (
        <div className="ListItems">
            <div>
                <span>Name</span>
                <span>Age</span>
                <span>Action</span>
            </div>
            {ListItems}
        </div>
    )
}
export default TodoItems;
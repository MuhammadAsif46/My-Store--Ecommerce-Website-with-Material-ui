import Item from "../items/Item";

function List (){
    const arr = ["Item 1", "Item 2","Item 3"];
    const items = arr.map((item, index) => {
        return <Item key={"no-"+ index } title= {item} />
    })
    return(
        <div>
            My react App from list:
            {items}
        </div> 
    )
}

export default List;
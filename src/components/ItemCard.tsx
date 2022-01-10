import {Link} from "react-router-dom";
import {addItemsFunc, decreaseItemsFunc, IItem, removeItemsFunc} from "../models/ShoppingItems";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faExchangeAlt, faTrash} from "@fortawesome/free-solid-svg-icons";

interface ItemCardProps {
    item: IItem
    add: addItemsFunc
    remove: removeItemsFunc
    decrease: decreaseItemsFunc
}

export default function ItemCard(props: ItemCardProps) {
    const {item, add, remove, decrease} = props
    const name = `${item[0]}`
    const count = `${item[1]}`
    return (
        <div className={"Item"}>
            <h2>{name}</h2>
            <div className={"ItemActions"}>
                <div className='quantity'>
                <button className={"arrow"} value={"Remove"}>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={() => {
                        decrease(item)
                    }}/>
                </button>
                <span> {count} </span>
                <button className={"arrow"} value={"Add"}>
                    <FontAwesomeIcon icon={faChevronRight} onClick={() => {
                        add(item)
                    }}/>
                </button>
                </div>
                <Link to={`/change/${item[0]}`}>
                    <button className={"change"}>
                        <FontAwesomeIcon icon={faExchangeAlt}/>
                        {/*<p>Change</p>*/}
                    </button>
                </Link>
                <button className={"trash"}>
                    <FontAwesomeIcon icon={faTrash} onClick={() => {
                        remove(item)
                    }}/>
                </button>
            </div>
        </div>
    );
}
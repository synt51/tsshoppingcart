import {addListsFunc, IList, removeListsFunc} from "../models/ShoppingLists";

import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExchangeAlt, faTrash} from "@fortawesome/free-solid-svg-icons";


export interface ListCardProps {
    list: IList
    remove: removeListsFunc
}

export default function ListCard(props: ListCardProps){
    const {list, remove} = props
    const name = `${list[0]}`

    return (
        <div className={"List"}>
             <h2>{name}</h2>
            <div className={"ListActions"}>
                <Link to={`/change/${list[0]}`}>
                    <button className={"change"}>
                        <FontAwesomeIcon icon={faExchangeAlt}/>
                    </button>
                </Link>
                <button className={"trash"}>
                    <FontAwesomeIcon icon={faTrash} onClick={() => {
                        remove(list)
                    }}/>
                </button>
            </div>
        </div>
    )
}
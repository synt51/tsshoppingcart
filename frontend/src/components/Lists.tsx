import {IList, ListsProps, removeListsFunc} from "../models/ShoppingLists";
import ListCard from "./ListCard";


const mapListToCards: (list: IList,  index: number, remove: removeListsFunc) => JSX.Element =
    (list, index, remove,) => {
    return <ListCard list={list} key={index} remove={remove}/>
    }

export default function Lists(props: ListsProps){
    // return (
    //     <>
    //         {Object.entries(props.lists!)
    //             .map((list, index) => mapListToCards(list, index, props.remove))
    //         }
    //     </>
    // )
}
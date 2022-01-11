import ItemCard from "./ItemCard";
import {addItemsFunc, IItem, ItemsProps, removeItemsFunc, decreaseItemsFunc} from "../models/ShoppingItems";

const mapItemToCards: (item: IItem, index: number, add: addItemsFunc, remove: removeItemsFunc, decrease: decreaseItemsFunc) => JSX.Element =
    (item, index, add, remove, decrease) => {
        return <ItemCard item={item} key={index} add={add} remove={remove} decrease={decrease}/>
    }

export default function Items(props: ItemsProps) {
    return (
        <>
            {Object.entries(props.items!)
                .map((item, index) => mapItemToCards(item, index, props.add, props.remove, props.decrease))
            }
        </>
    )
}
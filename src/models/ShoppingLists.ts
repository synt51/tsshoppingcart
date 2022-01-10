import {IItems} from "./ShoppingItems";
import {FormEvent} from "react";

export type IList = [string]
export type ILists = [n: string]
export type addListsFunc = (event: FormEvent<HTMLFormElement> | IList) => void
export type removeListsFunc = (list: IList) => void

export interface ListsProps {
    lists: ILists,
    add: addListsFunc,
    remove: removeListsFunc
}
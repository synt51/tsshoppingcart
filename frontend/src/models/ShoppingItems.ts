import {FormEvent} from "react";

export type IItem = [string, number]
export type IItems = { [n: string]: number }
export type addItemsFunc = (event: FormEvent<HTMLFormElement> | IItem) => void
export type removeItemsFunc = (item: IItem) => void
export type decreaseItemsFunc = (item: IItem) => void

export interface ItemsProps {
    items: IItems,
    add: addItemsFunc,
    remove: removeItemsFunc,
    decrease: decreaseItemsFunc
}


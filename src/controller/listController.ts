import {ILists} from "../models/ShoppingLists";
import {IItems} from "../models/ShoppingItems";


export interface IListController{
    getLists: () => ILists,
    addList: (newList: string) => ILists,
    removeList: (listName: string) => ILists,
    changeList: (oldName: string, newName: string) => ILists,
    getListItems: (list: string) => IItems,
    setListItems: (list: string, items: IItems) => IItems
}

//export default function listController(): { //IListController
    // const STORAGE_KEY: string = 'ts_shopping_cart'
    // const re: RegExp = new RegExp(/\s/g)
    // let lists: ILists = JSON.parse(localStorage.getItem(STORAGE_KEY)!) || {}
    //
    // const setLists = (value: ILists) => {
    //     lists = value
    //     localStorage.setItem(STORAGE_KEY, JSON.stringify(lists))
    // }
    //
    // const isValidListName = (value: string): boolean => {
    //     return !!(value && !re.test(value))
    // }
    //
    // return {
    //
    //     // getLists: () => ({...lists}),
    //     //
    //     // getListItems: (list: string) => ({...lists[list]}),
    //     //
    //     // setListItems: (list: string, items: IItems) => {
    //     //     const temp = {...lists}
    //     //     temp[list] = items
    //     //     setList(temp)
    //     //     return {...lists[list]}
    //     // },
    //     //
    //     // addList: (newList): ILists => {
    //     //     if (isValidListName(newList)){
    //     //         const temp: ILists = {...lists}
    //     //         temp[newList] = ((temp[newList] ? temp[newList] : 0))
    //     //         setList(temp)
    //     //     }
    //     //     return {...lists}
    //     // },
    //     //
    //     // removeList: (list: string): ILists => {
    //     //     const temp: ILists = {...lists}
    //     //     if(confirm('Are sure you want to delete this list?')) {
    //     //         delete temp[list]
    //     //     }
    //     //     setLists(temp)
    //     //     return {...lists}
    //     // },
    //     //
    //     // changeList: (oldName: string, newName: string): ILists => {
    //     //     if (isValidListName(newName) && !(newName === oldName)) {
    //     //         const temp: ILists = {...lists}
    //     //         temp[newName] = temp[oldName]
    //     //         delete temp[oldName]
    //     //         setLists(temp)
    //     //     }
    //     //     return {...lists}
    //     // }
    //
    // }

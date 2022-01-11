import {IItems} from "../models/ShoppingItems";

export interface IHomeController {
    getItems: () => IItems,
    addItem: (newItem: string, quantity: number) => IItems,
    removeItem: (item: string) => IItems,
    decreaseItem: (item: string) => IItems,
    changeItem: (oldName: string, newName: string) => IItems,
    //removeList: () => IItems
}

export default function homeController(): IHomeController {
    const STORAGE_KEY: string = 'ts_shopping_cart'
    const re: RegExp = new RegExp(/\s/g)
    let items: IItems = JSON.parse(localStorage.getItem(STORAGE_KEY)!) || {}

    const setItems = (value: IItems) => {
        items = value
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }

    const isValidName = (value: string): boolean => {
        return !!(value && !re.test(value))
    }

    return {
        getItems: (): IItems => ({...items}),
        addItem: (newItem, quantity): IItems => {
            if (isValidName(newItem)) {
                const temp: IItems = {...items}
                temp[newItem] = ((temp[newItem] ? temp[newItem] : 0) + parseInt(String(quantity)))
                setItems(temp)
            }
            return {...items}
        },

        removeItem: (item: string): IItems => {
            const temp: IItems = {...items}
            temp[item] >= 0 || temp[item] <= 0 ? delete temp[item] : temp[item]--
            setItems(temp)
            return {...items}
        },

        decreaseItem: (item: string): IItems => {
            const temp: IItems = {...items}
            temp[item] <= 1 ? delete temp[item] : temp[item]--
            setItems(temp)
            return {...items}
        },

        changeItem: (oldName: string, newName: string): IItems => {
            if (isValidName(newName) && !(newName === oldName)) {
                const temp: IItems = {...items}
                temp[newName] = temp[oldName]
                delete temp[oldName]
                setItems(temp)
            }
            return {...items}
        },

    };
}
import Items from "../components/Items";
import React, {ChangeEvent, FormEvent, useState} from "react";
import '../App.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {IHomeController} from "../controller/homeController";
import {IItem, IItems} from "../models/ShoppingItems";
import {TextField} from "@mui/material";



interface IInput {
    textInput: {value: string}
    quantityInput: {value: string}
}

export default function Home(props: { controller: IHomeController }) {
    const {controller} = props
    const [items, setItems] = useState<IItems>(controller.getItems())
    const [quantityStatus, setQuantityStatus] = useState<number>(1)

    // : React.FormEventHandler<HTMLFormElement>
    const addItem = (event: FormEvent<HTMLFormElement> | IItem) => {
        if (Array.isArray(event)) {
            setItems(controller.addItem(event[0], 1))
        } else {
            event.preventDefault()
            console.log(event)
            const form = event.currentTarget
            const formElements = form.elements as typeof form.elements & IInput
            const textInputValue: string = formElements.textInput.value

            setItems(controller.addItem(textInputValue, quantityStatus))
            // @ts-ignore
            event.currentTarget.elements.textInput.value = ""
        }
    }

    const decreaseItem = (item: IItem) => {
        setItems(controller.decreaseItem(item[0]))
    }

    const removeItem = (item: IItem) => {

        setItems(controller.removeItem(item[0]))
    }

    function removeAll(){
            // noch überarbeiten mit useState
        localStorage.clear();
        window.location.reload();
    }

    const handleQuantity = (event: ChangeEvent) => {
        event.preventDefault()
        const re = /^[0-9]+$/g
        // @ts-ignore
        setQuantityStatus(re.test(event.target.value) ? event.target.value : quantityStatus)
    }

    return (
        <div className={"App-header"}>
            <h1>Shopping List</h1>
            <div className={"AddItemBox"}>
                <form onSubmit={addItem}>
                    <TextField className={"AddItemQuantity"} label={"QTY"}  type={"number"} inputProps={{ style: { textAlign: 'center' }}}
                               size= 'small' margin= 'none' onChange={handleQuantity} value={quantityStatus} id={"outlined-number"} InputLabelProps={{
                        shrink: true,
                    }}/>
                    <input className={"AddItemText"} type={"textarea"} placeholder={"Add an item..."} maxLength={15} id={"textInput"}/>
                    <button  type={"submit"}/>
                    <FontAwesomeIcon icon={faPlus}/>
                </form>
            </div>
            <div className={"DeleteList"}>
                <p> Delete everything?</p>
                <button className={"trash"}>
                    <FontAwesomeIcon icon={faTrash} onClick={() => {
                        removeAll()
                    }}/>
                </button>
            </div>
            <div className={"Outer"}>
                <div className={"Inner"}>
                    <Items items={items} add={addItem} remove={removeItem} decrease={decreaseItem} />
                </div>
            </div>
        </div>
    )
}
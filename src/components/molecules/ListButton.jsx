import {React, useEffect, useState} from "react";
import "../../style/ListButton.css"

import { string, bool, object } from "prop-types";
import ListText from "./atoms/ListText";
import ListIcon from "./atoms/ListIcon";



function ListButton(props) {
    // Background of the button
    var background = "#FFFFF";
    // useEffect(() => {background = props.selected ? "#161618" : "#0A0A0A";}, [props.selected])
    
    // const isSelected = () => {
    //     props.setSelected(true)
    //     console.log(props.selected)
    //     //props.isSelected(props.allProps)
        
    // }
    return (
        //if disabled : don't show the item, if divider : show a line divider below the item
        <>
        
        {!props.disabled && <div className="buttonItem" style= {{alignItems: props.alignItems, backgroundColor: background}}>
                {props.buttonContent.icon != null && <ListIcon icon={props.buttonContent.icon}/>}
                <ListText text={props.buttonContent.text}/>
            </div>}
        {props.divider && <hr style= {{ color: "#00000"}}/>}
        </>
    )
}
ListButton.propTypes = {
    //Content of the button : id, text and icon
    buttonContent: {
        id: string,
        text: string,
        icon: object
    },

    //Other Props, most are unused
    alignItems: string,
    autoFocus: bool,
    disabled: bool,
    disableGutters: bool,
    divider: bool,
    focusVisibleClassName: string,
    selected: bool
} 

ListButton.defaultProps= {
    alignItems: "center",
    autoFocus: false,
    disabled: false,
    disableGutters: false,
    divider: false,
    selected: false
}

export default ListButton;
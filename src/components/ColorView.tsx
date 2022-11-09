import React from "react"
import { View } from "react-native"

type ColorViewProps = {
    /* The color of the View */
    color: string,

    /* The style of the View */
    style?: any,

    /* Children components */
    children?: any,
}

const ColorView = (props: ColorViewProps) => {

    const {
        color,
        style: customStyles,
        ...rest
    } = props

    const style = [customStyles, { backgroundColor: color }]

    return <View style={style} {...rest} />
}

export default ColorView;
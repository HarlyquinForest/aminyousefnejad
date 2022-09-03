import { prefix } from './prefix'
export const getValue = (item, fallback) => {
    var value = fallback
    try {
        if (item == undefined) throw new Error('Value undefined')
        value = item
    } catch (e) {
        console.error(e)
    }
    return value
}
export const getImage = image => {
    var img = prefix + '/images/placeholder.png'
    try {
        if (image == undefined) throw new Error('Value undefined')
        img = image
    } catch (e) {
        console.error(e)
    }
    return img
}

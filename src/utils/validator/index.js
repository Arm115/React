export const required = value => {
    if (value) {
        return undefined
    } else {
        return 'Обязательное поле'
    }
}

export const requiredDisable = value => {
    if(value && value.length < 0){
        return false
    }else{
        return true
    }
}


export const maxLength = (maxLength) => (value) => { // yet not work
    if(value && value.length > maxLength){
        return `Максимальное колчиество символов ${maxLength}`
    }else{
        return undefined
    }
}

export const minLength = (minLength) => (value) => { // work
    if(value && value.length < minLength){
        return `Минимальное колчиество символов ${minLength}`
    }else{
        return undefined
    }
}
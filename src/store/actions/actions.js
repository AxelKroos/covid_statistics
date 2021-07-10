export function initialCountries(value) {
    return {
        type: 'INITIAL_COUNTRIES',
        value
    }
}

export function currentValueInInput(value) {
    return {
        type: 'CURRENT_VALUE_IN_INPUT',
        value
    }
}

export function checkInput() {
    return {
        type: 'CHECK_INPUT'
    }
}

export function changeInput(value) {
    return {
        type: 'CHANGE_INPUT',
        value
    }
}

export function touchAlphabet(value) {
    return {
        type: 'TOUCH_ALPHABET',
        value
    }
}

export function currentCountry(value) {
    return {
        type: 'CURRENT_COUNTRY',
        value
    }
}

export function search() {
    return {
        type: 'SEARCH'
    }
}

export function initialActualCountry(value) {
    return {
        type: 'INITIAL_ACTUAL_COUNTRY',
        value
    }
}

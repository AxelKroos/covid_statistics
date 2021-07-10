import {
    INITIAL_COUNTRIES,
    CURRENT_VALUE_IN_INPUT,
    CHECK_INPUT,
    CHANGE_INPUT,
    TOUCH_ALPHABET,
    CURRENT_COUNTRY,
    SEARCH,
    INITIAL_ACTUAL_COUNTRY
} from "../actions/actionsTypes";

const initialState = {
    countries: [],
    alphabet: [],
    currentValue: 'Введите страну',
    requiredCountries: [],
    onSearch: false,
    onResult: false,
    activeCountry: '',
    selectedCountry: '',
    infoActualCountry: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INITIAL_COUNTRIES:

            let arr = action.value.map(elem => {
                return elem[0]
            })
            const res = Array.from(new Set(arr));

            /*Формируем первые буквы стран для быстрого поиска исходя из имеющихся данных*/
            return {
                ...state,
                countries: action.value,
                alphabet: res
            }
        case CURRENT_VALUE_IN_INPUT:
            return {
                ...state,
                currentValue: action.value
            }
        case CHECK_INPUT:
            return {
                ...state,
                currentValue: ''
            }
        case CHANGE_INPUT:
            return {
                ...state,
                currentValue: action.value
            }
        case TOUCH_ALPHABET:
            let array = [...state.countries]
            const result = array.filter(word => word.startsWith(action.value));
            return {
                ...state,
                requiredCountries: result
            }
        case CURRENT_COUNTRY:
            return {
                ...state,
                currentValue: action.value
            }
        case SEARCH:
            /*Проверяем холостое нажатие на лупу*/
            const country = state.currentValue
            return country !== 'Введите страну' ? {
                ...state,
                onResult: true,
                selectedCountry: country
            } : state
        case INITIAL_ACTUAL_COUNTRY:
            return {
                ...state,
                onSearch: true,
                onResult: false,
                infoActualCountry: action.value
            }
        default:
            return state
    }
}
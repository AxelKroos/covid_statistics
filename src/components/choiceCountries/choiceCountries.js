import classes from './choiceCountries.module.css'

function ChoiceCountries(props) {

    const alphabet = props.alphabet.map(elem => {
        return <li onClick={(event => props.touchAlphabet(event.target.innerHTML))}>{elem}</li>
    })

    const requiredCountries = props.requiredCountries.map(country => {
        return <p onClick={event => props.currentCountry(event.target.innerHTML)}>{country}</p>
    })

    return <div className={classes.choiceCountries}>
        <p className={classes.title}>Статистика по COVID-19</p>
        <p>Поиск по стране</p>
        <div className={classes.search}>
            <div className={classes.inputSearch}>
                <input type="text" value={props.currentValue} onClick={props.checkInput}
                       onChange={(event => props.changeInput(event.target.value))}/>
                <div className={classes.icon} onClick={props.search}>&#128269;</div>
            </div>
            <div className={classes.alphabet}>
                <div className={classes.requiredCountries}>{requiredCountries}</div>
                <ul>{alphabet}</ul>
            </div>
        </div>
    </div>
}

export default ChoiceCountries
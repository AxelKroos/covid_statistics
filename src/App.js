import React from 'react'
import {connect} from "react-redux";
import {
    initialCountries,
    currentValueInInput,
    checkInput,
    changeInput,
    touchAlphabet,
    currentCountry,
    search,
    initialActualCountry
} from "./store/actions/actions";
import './App.css';
import ChoiceCountries from "./components/choiceCountries/choiceCountries";
import InfoAboutTheCountry from "./components/infoAboutTheCountry/infoAboutTheCountry";

class App extends React.Component {

    componentDidMount() {
        const gettingData = async () => {
            const request = await fetch("https://covid-193.p.rapidapi.com/countries", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "bfa7f41db6mshd3bafc9175566bep1f4bb2jsn3dbccd16c13c",
                    "x-rapidapi-host": "covid-193.p.rapidapi.com"
                }
            })
            const json = await request.json()
            this.props.initialCountries(json.response)
        }
        gettingData()
    }

    render() {

        const gettingData = async () => {
            const request = await fetch(`https://covid-193.p.rapidapi.com/statistics?country=${this.props.selectedCountry}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "bfa7f41db6mshd3bafc9175566bep1f4bb2jsn3dbccd16c13c",
                    "x-rapidapi-host": "covid-193.p.rapidapi.com"
                }
            })

            const json = await request.json()
            const obj = json.response[0]

            this.props.initialActualCountry(obj)
        }

        {this.props.onResult ? gettingData() : console.log()}

        return <div className="App">

            <ChoiceCountries search={this.props.search}
                             alphabet={this.props.alphabet}
                             checkInput={this.props.checkInput}
                             changeInput={this.props.changeInput}
                             currentValue={this.props.currentValue}
                             touchAlphabet={this.props.touchAlphabet}
                             currentCountry={this.props.currentCountry}
                             requiredCountries={this.props.requiredCountries}
                             currentValueInInput={this.props.currentValueInInput}/>

            {this.props.onSearch ? <InfoAboutTheCountry search={this.props.search}
                                                        gettingData={this.props.gettingData}
                                                        selectedCountry={this.props.selectedCountry}
                                                        infoActualCountry={this.props.infoActualCountry}/> : null}

        </div>
    }
}

function mapStateToProps(state) {
    return {
        alphabet: state.reducer.alphabet,
        onSearch: state.reducer.onSearch,
        onResult: state.reducer.onResult,
        countries: state.reducer.countries,
        currentValue: state.reducer.currentValue,
        activeCountry: state.reducer.activeCountry,
        selectedCountry: state.reducer.selectedCountry,
        requiredCountries: state.reducer.requiredCountries,
        infoActualCountry: state.reducer.infoActualCountry
    }
}

function mapDispatchToProps(dispatch) {
    return {
        initialCountries: (value) => {
            dispatch(initialCountries(value))
        },
        currentValueInInput: (value) => {
            dispatch(currentValueInInput(value))
        },
        checkInput: () => {
            dispatch(checkInput())
        },
        changeInput: (value) => {
            dispatch(changeInput(value))
        },
        touchAlphabet: (value) => {
            dispatch(touchAlphabet(value))
        },
        currentCountry: (value) => {
            dispatch(currentCountry(value))
        },
        search: () => {
            dispatch(search())
        },
        initialActualCountry: (value) => {
            dispatch(initialActualCountry(value))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

import classes from './infoAboutTheCountry.module.css'

function InfoAboutTheCountry(props) {

    const obj = props.infoActualCountry

    const formula = (a, b) => {
        return (a / b * 1000000).toFixed()
    }

    const sickPeople = formula(obj.cases.total, obj.population)
    const deaths = formula(obj.deaths.total, obj.population)
    const tests = formula(obj.tests.total, obj.population)

    return <div className={classes.infoAboutTheCountry}>
        <p className={classes.title}>Статистика по COVID-19</p>
        <p className={classes.countryName}>{obj.country}</p>
        <div className={classes.preInfo}>
            <p>Континент: <span>{obj.continent}</span></p>
            <p>Популяция: <span>{obj.population}</span></p>
        </div>
        <div className={classes.info}>
            <div>
                <p className={classes.bold}>Заболевшие: <span>{obj.cases.total}</span>
                    <p className={classes.gray}>{sickPeople}/1 млн. населения</p>
                </p>
                <p>Новые случаи за сутки: <span style={{color: 'red'}}>{obj.cases.new}</span></p>
                <p>Болеют в активной стадии: <span>{obj.cases.active}</span></p>
                <p>Критическое состояние: <span>{obj.cases.critical}</span></p>
                <p>Выздоровели: <span>{obj.cases.recovered}</span></p>
            </div>
            <div>
                <p className={classes.bold}>Умерли: <span>{obj.deaths.total}</span>
                    <p className={classes.gray}>{deaths}/1 млн. населения</p>
                </p>
                <p>Новые случаи за сутки: <span style={{color: 'red'}}>{obj.deaths.new}</span></p>
            </div>
            <div>
                <p className={classes.bold}>Сдали тест: <span>{obj.tests.total}</span>
                    <p className={classes.gray}>{tests}/1 млн. населения</p>
                </p>
            </div>
        </div>
    </div>
}

export default InfoAboutTheCountry
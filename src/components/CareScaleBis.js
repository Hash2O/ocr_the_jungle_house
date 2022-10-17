function CareScale({ scaleValue, careType }) {

    const range = [1, 2, 3]

    //Déclaration déstructurée, avec op ternaire
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? 
                <span key={rangeElem.toString()}> {scaleType} </span> : null
            )}
        </div>
    )
}

export default CareScale
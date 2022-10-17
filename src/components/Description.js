import '../styles/Description.css'

function Description() {
    const description = 'Faites de votre intérieur un nouvel écosystème !';
    return (
        <div className="lmj-description">
            <h2>{ description.toUpperCase() }</h2>
        </div>
    )
}

export default Description
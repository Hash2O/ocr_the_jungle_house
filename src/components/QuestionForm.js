function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}

function QuestionForm() {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>C'est à vous : </label>
                <input type='text' name='my_input' defaultValue='Tapez votre texte' />
                <button type='submit'>Valider</button>
            </form>
        </div>
    )

}


export default QuestionForm

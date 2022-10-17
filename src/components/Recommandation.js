import '../styles/Recommandation.css'

function Recommandation() {
    const currentMonth = new Date().getMonth()

    console.log('Mois actuel (de 0 à 11) : ' + currentMonth)

    switch (currentMonth) {
        case (0):
            return <div className="lmj-reco">Janvier : </div>
            break;
        case (1):
            return <div className="lmj-reco">Février : </div>
            break;
        case (2):
            return <div className="lmj-reco">Mars : le printemps arrive !</div>
            break;
        case (3):
            return <div className="lmj-reco">Avril : Le rempotage est possible !</div>
            break;
        case (4):
            return <div className="lmj-reco">Mai :</div>
            break;
        case (5):
            return <div className="lmj-reco">Juin : L'été arrive !</div>
            break;
        case (6):
            return <div className="lmj-reco">Juillet : Arrosez plutôt le soir ou le matin très tôt</div>
            break;
        case (7):
            return <div className="lmj-reco">Août : privilégiez le goutte à goutte pour l'arrosage</div>
            break;
        case (8):
            return <div className="lmj-reco">Septembre : l'automne approche !</div>
            break;
        case (9):
            return <div className="lmj-reco">Octobre :</div>
            break;
        case (10):
            return <div className="lmj-reco">Novembre : </div>
            break;
        case (11):
            return <div className="lmj-reco">Décembre : </div>
            break;

    }


    //Autre test / condition possible 
    const isSpring = currentMonth >= 2 && currentMonth <= 5

    if (!isSpring) {
        return <div className="lmj-reco">Ce n'est pas le moment de rempoter</div>
    }
    return <div className="lmj-reco">C'est le printemps, vous pouvez rempoter !</div>
}

export default Recommandation
import '../styles/Banner.css'

//La prop children est renseignée en imbriquant les enfants dans le composant parent
//Ici, dans App.js, les composants enfants img et h1 sont insérés dans le composant Banner
function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
}


//NB : children est utile qand un composant ne connait pas ses enfants à l'avance

//Autre façon d'écrire la fonction (renommée BannerBis ici)
function BannerBis(props) {
    const children = props.children
	return <div className='lmj-banner'>{children}</div>
}

export default Banner
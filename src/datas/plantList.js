import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import succulent from '../assets/succulent.jpg'
import cactus from '../assets/cactus.jpg'
import calathea from '../assets/calathea.jpg'
import mint from '../assets/mint.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		cover: monstera,
		id: '1ed',
        isBestSale: true,
		isSpecialOffer : true,
		light : 2,
		price : 8.00,
		water : 3
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		cover: lyrata,
		id: '2ab',
		isBestSale: true,
		isSpecialOffer : false,
		light : 3,
		price : 10.00,
		water : 2
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		cover: pothos,
		id: '3sd',
		isBestSale: false,
		isSpecialOffer : true,
		light : 1,
		price : 18.00,
		water : 2
	},
	{
		name: 'cactus',
		category: 'classique',
		cover: cactus,
		id: '4kk',
		isBestSale: false,
		isSpecialOffer : false,
		light : 2,
		price : 11.00,
		water : 2
	},
	{
		name: 'olivier',
		category: 'extérieur',
		cover: olivier,
		id: '5pl',
		isBestSale: true,
		isSpecialOffer : false,
		light : 3,
		price : 18.00,
		water : 1
	},
	{
		name: 'calathea',
		category: 'extérieur',
		cover: calathea,
		id: '6uo',
		isBestSale: true,
		isSpecialOffer : false,
		light : 2,
		price : 9.00,
		water :3
	},
	{
		name: 'basilique',
		category: 'extérieur',
		cover: basil,
		id: '7ie',
		isBestSale: false,
		isSpecialOffer : true,
		light : 2,
		price : 9.00,
		water : 2
	},
	{
		name: 'mint',
		category: 'plante grasse',
		cover: mint,
		id: '8fp',
		isBestSale: false,
		isSpecialOffer : true,
		light : 2,
		price : 13.75,
		water : 1
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		cover: succulent,
		id: '9vn',
		isBestSale: true,
		isSpecialOffer : false,
		light : 2,
		price : 14.00,
		water : 2
	}
]
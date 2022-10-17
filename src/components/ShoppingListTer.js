import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'


function ShoppingList() {
    //Tableau des catégories, données récupérées à parti de la liste des plantes
    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    )
    return (
        <div>
            <label>Catégorie : </label>
            <select>
                {categories.map((cat) => (
                    <option key={cat}>{cat}</option>
                ))}
            </select>
            <ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
        </div>
    )
}

//Infos supplémentaires possibles : 
//{plant.price} € <span> / </span>
//{plant.isBestSale && <span>🔥</span>}

//Autre condition possible, par exemple : 
//{plant.isBestSale && plant.category === 'classique' && <span> {plant.category} : 🔥 </span>} 

export default ShoppingList
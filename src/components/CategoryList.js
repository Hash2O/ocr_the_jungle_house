import { plantList } from '../datas/plantList'

function CategoryList() {
    return (
        <div>
            <label>Catégorie : </label>
            <select>
                {plantList.map((plant) => (
                    <option key={plant.id}>
                        {plant.category}
                    </option>
                ))}
            </select>
        </div>

    )
}

export default CategoryList


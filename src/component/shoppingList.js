import React from "react";
import {plantList} from './plantList';




function ShoppingList() {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    return(
        <div>
           <ul>
				{categories.map((cat) => (
					<li key={cat}> <p>Il y'a des plantes de types :</p>{cat}</li>
				))}
			</ul>
			
            <ul>
				{plantList.map((plant) => (
					<li key={plant.id }>{plant.name} {plant.isBestSale ? <span>🧨</span> : <span>🧊</span>}</li>
				))}
			</ul>
        </div>
    )
};

export default ShoppingList;
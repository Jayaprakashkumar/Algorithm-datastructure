// <-- EXPAND to see the data classes
class Meal {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }
}


function getUniqueMealCount(meals) {
    // TODO: Complete Me
    let result = [[meals[0], 0]];
    console.log(result[0][0])

    for (let i = 1; i < meals.length; i++) {
        let exist = true;
        let uniqueMeal = [];
        for (let meal of result) {
            for (let ing of meal[0].ingridents) {
                if (meals[i].ingridents.indexOf(ing) === -1) {
                    exist = false;
                    break;
                }else{
                    exist = true;
                }

            }
            if (exist) {
                meal[1] += 1;
                uniqueMeal = [];
                break;
            } else {
                uniqueMeal=[meals[i]];
            }
        }

        if (uniqueMeal.length) {
            result.push([...uniqueMeal, 0]);
        }



    }
    let count = 0;
    for (let res of result) {
        if (res[1] > 0) count++;
    }
    return count;
}






let json = [
    {
        name: "A burger",
        ingridents: ["Lettuce", "Tomato", "Onion", "Patty"]
    },
    {
        name: "B burger",
        ingridents: ["Cheese", "Tomato", "Lettuce", "Patty"]
    },
    {
        name: "C burger",
        ingridents: ["Lettuce", "Tomato", "Onion", "Patty"]
    },
    {
        name: "D burger",
        ingridents: ["Lettuce", "Tomato", "Cheese", "Patty"]
    }

]

console.log(getUniqueMealCount(json))
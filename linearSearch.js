const fruits = ["Apple", "Banana", "Lichi", "Mango", "Jackfruit"];
const desiredFruit = "Lichi";

const findDesiredFruit = (fruits, desiredFruit) => {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === desiredFruit) {
            return `Desired fruit found at index ${i}`;
        }
    }
    return "Desired fruit not found";
};

findDesiredFruit(fruits, desiredFruit);
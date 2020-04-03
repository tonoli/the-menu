// Burger object
//
// { type: 'TYPE', item: 'ITEM' }
//
// Golden rules of a burger
//
// 1 - Bun on top and bottom
// 2 - Use the same type of bun
// 3 - The cheese should always be above the beef
// 4 - The lettuce should always be below a bun
// 5 - Never stack two buns on top of another
// 6 - Never use the same ingredient on top of another
//
// Optional rule
//
// 1 - Vegetarian (contains no beef or bacon)
//

import { TYPES, INGREDIENTS, DARK_BUNS, CLASSIC_BUNS} from '../constants/burger'


const topAndBottomIsBun = (burger) => {
  let hasTopBun = false;
  let hasDownBun = false;
  const downElement = burger[0];
  const topElement = burger[burger.length - 1];

  if (topElement.type === TYPES.BUN &&
    (topElement.item === CLASSIC_BUNS.CLASSIC_BUN_TOP
    || topElement.item ===  DARK_BUNS.DARK_BUN_TOP)) {
    hasTopBun = true;
  }

  if (downElement.type === TYPES.BUN &&
    (downElement.item === CLASSIC_BUNS.CLASSIC_BUN_BOTTOM
      || downElement.item ===  DARK_BUNS.DARK_BUN_BOTTOM)) {
    hasDownBun = true;
  }

  if (hasTopBun && hasDownBun) {
    return true;
  }
  return false;
}

const sameTypeOfBun = (burger) => {
  let typeOfBun = null;

  for (let i = 0; i < burger.length; i++) {
    if (burger[i].type === TYPES.BUN) {
      if (!typeOfBun) {
        if (burger[i].item === CLASSIC_BUNS.CLASSIC_BUN_BOTTOM
          || burger[i].item === CLASSIC_BUNS.CLASSIC_BUN_TOP) {
          typeOfBun = 'classic'
        } else {
          typeOfBun = 'dark'
        }
      }
      else {
        if (typeOfBun === 'classic'
        && (burger[i].item === CLASSIC_BUNS.DARK_BUN_BOTTOM
          || burger[i].item === CLASSIC_BUNS.DARK_BUN_TOP)) {
          return false;
        }
        else if (typeOfBun === 'dark'
          && (burger[i].item === CLASSIC_BUNS.CLASSIC_BUN_BOTTOM
            || burger[i].item === CLASSIC_BUNS.CLASSIC_BUN_TOP)) {
          return false;
        }
      }
    }
  }
  return true;
};

const cheeseRule = (burger) => {
  for (let i = 0; i < burger.length; i++) {
    if (burger[i].type === TYPES.INGREDIENT && burger[i].item ===  INGREDIENTS.CHEESE) {
      if (i === 0)
        return false;
      let previousElement = burger[i - 1];
      if (previousElement.item !== INGREDIENTS.BEEF ) {
        return false;
      }
    }
  }
  return true;
}

const lettuceRule = (burger) => {
  for (let i = 0; i < burger.length - 1; i++) {
    if (burger[i].type === TYPES.INGREDIENT && burger[i].item ===  INGREDIENTS.LETTUCE) {
      let nextElement = burger[i + 1];
      if (nextElement.type !== TYPES.BUN ) {
        return false;
      }
    }
  }
  return true;
}

const bunDispositionRule = (burger) => {
  for (let i = 0; i < burger.length; i++) {
    if (i !== 0 && burger[i].type === TYPES.BUN) {
      let previousElement = burger[i - 1];
      if (previousElement.type === TYPES.BUN) {
        return false;
      }
    }
  }
  return true;
}

const ingredientDispositionRule = (burger) => {
  for (let i = 1; i < burger.length; i++) {
    if (burger[i].type === TYPES.INGREDIENT) {
      let previousElement = burger[i - 1];
      if (previousElement.type === TYPES.INGREDIENT
          && previousElement.item === burger[i].item) {
        return false;
      }
    }
  }
  return true;
}

const vegetarianRule = (burger) => {
  for (let i = 0; i < burger.length; i++) {
    if (burger[i].type === TYPES.INGREDIENT &&
      (burger[i].item === INGREDIENTS.BEEF || burger[i].item === INGREDIENTS.BACON)) {
      return false;
    }
  }
  return true;
}

export const isBurgerValid = (burger, vegetarian = false) => {

  if (burger.length < 3)
    return false;

  let hasVegetarian = true;
  if (vegetarian) {
    hasVegetarian = vegetarianRule(burger);
  }
  const hasTopDown = topAndBottomIsBun(burger);
  const hasSameBunType = sameTypeOfBun(burger);
  const hasCheeseRule =  vegetarian ? true : cheeseRule(burger);
  const hasLettuceRule = lettuceRule(burger);
  const hasBunDispositionRule = bunDispositionRule(burger);
  const hasIngredientDispositionRule = ingredientDispositionRule(burger);

  return hasTopDown
    && hasSameBunType
    && hasCheeseRule
    && hasLettuceRule
    && hasBunDispositionRule
    && hasIngredientDispositionRule
    && hasVegetarian
    ;
}

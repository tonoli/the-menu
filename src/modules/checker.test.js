import { isBurgerValid } from './checker'
import { TYPES, CLASSIC_BUNS, ITEMS } from '../constants/burger'

describe('isBurgerValid', () => {
  it('Valid burger', () => {
    const burger = [
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_BOTTOM },
      { type: TYPES.INGREDIENT, item: ITEMS.TOMATOES },
      { type: TYPES.INGREDIENT, item: ITEMS.BEEF },
      { type: TYPES.INGREDIENT, item: ITEMS.CHEESE },
      { type: TYPES.INGREDIENT, item: ITEMS.LETTUCE },
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_TOP }
    ]

    expect(isBurgerValid(burger)).toBe(true)
  })
  it('Valid vegi burger', () => {
    const burger = [
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_BOTTOM },
      { type: TYPES.INGREDIENT, item: ITEMS.TOMATOES },
      { type: TYPES.INGREDIENT, item: ITEMS.CHEESE },
      { type: TYPES.INGREDIENT, item: ITEMS.LETTUCE },
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_TOP }
    ]
    expect(isBurgerValid(burger, true)).toBe(true)
  })
  it('Not valid burger, cause no bread', () => {
    const burger = [
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_BOTTOM },
      { type: TYPES.INGREDIENT, item: ITEMS.TOMATOES },
      { type: TYPES.INGREDIENT, item: ITEMS.CHEESE },
      { type: TYPES.INGREDIENT, item: ITEMS.BEEF },
      { type: TYPES.INGREDIENT, item: ITEMS.LETTUCE },
    ]

    expect(isBurgerValid(burger)).toBe(false)
  })
  it('Not valid burger, cause different type of bred', () => {
    const burger = [
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_BOTTOM },
      { type: TYPES.INGREDIENT, item: ITEMS.TOMATOES },
      { type: TYPES.INGREDIENT, item: ITEMS.CHEESE },
      { type: TYPES.INGREDIENT, item: ITEMS.BEEF },
      { type: TYPES.INGREDIENT, item: ITEMS.LETTUCE },
      { type: TYPES.BUN, item: CLASSIC_BUNS.DARK_BUN_TOP }
    ]
    expect(isBurgerValid(burger)).toBe(false)
  })
  it('Not valid burger, cause cheese rule', () => {
    const burger = [
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_BOTTOM },
      { type: TYPES.INGREDIENT, item: ITEMS.CHEESE },
      { type: TYPES.INGREDIENT, item: ITEMS.TOMATOES },
      { type: TYPES.INGREDIENT, item: ITEMS.BEEF },
      { type: TYPES.INGREDIENT, item: ITEMS.LETTUCE },
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_TOP }
    ]
    expect(isBurgerValid(burger)).toBe(false)
  })
  it('Not valid burger, cause letuce rule', () => {
    const burger = [
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_BOTTOM },
      { type: TYPES.INGREDIENT, item: ITEMS.LETTUCE },
      { type: TYPES.INGREDIENT, item: ITEMS.BEEF },
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_TOP }
    ]
    expect(isBurgerValid(burger)).toBe(false)
  })
  it('Not valid burger, cause bun disposition rule', () => {
    const burger = [
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_BOTTOM },
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_BOTTOM },
      { type: TYPES.INGREDIENT, item: ITEMS.BEEF },
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_TOP }
    ]
    expect(isBurgerValid(burger)).toBe(false)
  })
  it('Not valid burger, cause ingredient disposition rule', () => {
    const burger = [
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_BOTTOM },
      { type: TYPES.INGREDIENT, item: ITEMS.BEEF },
      { type: TYPES.INGREDIENT, item: ITEMS.BEEF },
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_TOP }
    ]
    expect(isBurgerValid(burger)).toBe(false)
  })
  it('Not valid burger, cause vegetarian rule', () => {
    const burger = [
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_BOTTOM },
      { type: TYPES.INGREDIENT, item: ITEMS.BEEF },
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_TOP }
    ]
    expect(isBurgerValid(burger, true)).toBe(false)
  })

  it('Not valid burger, nothing on it', () => {
    const burger = [
    ]
    expect(isBurgerValid(burger)).toBe(false)
  })
})




import React, { useContext } from 'react'
import styled from 'styled-components'

import { COLORS } from '../constants/colors'
import { StateContext } from '../App'

import { Title3 } from './Title'
import CheckIcon from './CheckIcon'

import {
  topAndBottomIsBun,
  bunDispositionRule,
  cheeseRule,
  ingredientDispositionRule,
  lettuceRule,
  sameTypeOfBun,
  vegetarianRule
} from '../modules/checker'

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-grow: 1;
  width: 33%;
  padding: 0 20px;
`

const List = styled.ul`
  list-style: none;
  margin-top: 0;
  padding-left: 10px;
`

const ListItem = styled.li`
  display: flex;
  color: ${COLORS.GREY_DARKEST};
  font-weight: 500;
  margin-bottom: 0.85rem;
`

const OnTableBlock = styled.div`
  padding: 5px;
  font-size: 24px;
  color: ${COLORS.WHITE};
  background: ${COLORS.GREEN_LIGHT};
`

const RulesList = () => {
  const { userBurger } = useContext(StateContext)

  return (
    <Container>
      <Title3>Golden rules of a burger</Title3>
      <List>
        <ListItem>
          <CheckIcon checked={topAndBottomIsBun(userBurger)} />
          Bun on top and bottom
        </ListItem>
        <ListItem>
          <CheckIcon checked={sameTypeOfBun(userBurger)} />
          Use the same type of bun
        </ListItem>
        <ListItem>
          <CheckIcon checked={cheeseRule(userBurger)} />
          The cheese should always be above the beef
        </ListItem>
        <ListItem>
          <CheckIcon checked={lettuceRule(userBurger)} />
          The lettuce should always be below a bun
        </ListItem>
        <ListItem>
          <CheckIcon checked={bunDispositionRule(userBurger)} />
          Never stack two buns on top of another
        </ListItem>
        <ListItem>
          <CheckIcon checked={ingredientDispositionRule(userBurger)} />
          Never use the same ingredient on top of another
        </ListItem>
      </List>

      <Title3>Optional rule</Title3>
      <List>
        <ListItem>
          <CheckIcon checked={vegetarianRule(userBurger)} />
          Vegetarian (contains no beef or bacon)
        </ListItem>
      </List>
    </Container>
  )
}

export default RulesList

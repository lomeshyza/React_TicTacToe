/* import { appReducer} from "./reducer"

export const createStore = (reducer) => {

	let state
	const subscribers=[]
	return {
		dispatch: (action) => {
			state = reducer(state, action)
			subscribers.forEach(sub=>sub())
		},
		subscribe: (listener) => subscribers.push(listener),
		getState: () => state,
	}
}
export const store = createStore(appReducer)
store.dispatch({}) */
import { createStore } from 'redux'
import {appReducer} from './reducer'
export const store = createStore(appReducer)


import * as TodoActionCreators from './todo'
import * as UsersActionCreators from './user'

export default {
    ...TodoActionCreators,
    ...UsersActionCreators
}
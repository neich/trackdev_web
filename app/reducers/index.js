import { combineReducers } from 'redux'
import adminPanelUsers from './adminPanelUsers'
import courses from './courses'
import authedUser from './authedUser'
import error from './error'
import sprints from './sprints'


export default combineReducers({
    adminPanelUsers,
    authedUser,
    courses,
    sprints,
    error
})

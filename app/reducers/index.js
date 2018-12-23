import { combineReducers } from 'redux'
import adminPanelUsers from './adminPanelUsers'
import courses from './courses'
import authedUser from './authedUser'
import error from './error'
import selectedCourse from './selectedCourse'


export default combineReducers({
    adminPanelUsers,
    courses,
    selectedCourse,
    authedUser,
    error
})

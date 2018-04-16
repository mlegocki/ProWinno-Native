import axios from 'axios';

const GET_PROJECTS = 'GET_PROJECTS'

const getProjects = projects => ({ type: GET_PROJECTS, action: projects })

export const updateProjectList = () => {
  dispatch => {
    return axios.get('/api/projects')
      .then(res =>
        dispatch(getProjects(res.data)))
      .catch(console.error)
  }
}

export default function (state = [], action) {
  switch (action.type) {
    case GET_PROJECTS:
      return action.projects
    default:
      return state;
  }
}
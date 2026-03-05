import api from './api'

export const login = async (username, password) => {

    const response = await api.post('/login', {
        username,
        password
    })
    const token = response.data.token;
    const user = response.data.user;
        
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user));

    return response.data
}
export const logout = () => {
    localStorage.removeItem('token')
}
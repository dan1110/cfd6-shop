import axios from 'axios';

const mapApi = {
	getMap() {
		return axios.get('https://5e85e22044467600161c69bd.mockapi.io/api/task/students');
	},
};

export default mapApi;

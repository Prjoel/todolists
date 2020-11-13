import TODOLISTS_API from '/client/js/config/var.js';
import { 
  getAPI,
  postAPI,
  putAPI,
  patchAPI,
  deleteAPI
} from './customFetch.js';

const requestLists = {
  get: async function (id) {
    try {
      let data = await getAPI(TODOLISTS_API.API_URL + TODOLISTS_API.LISTS_ENDPOINT + `/${id}`)
      console.log('data :>> ', data);
      return data;
    } catch (error) {
      console.log('error :>> ', error);
    }
  },

  getAll: async function () {
    try {
      let data = await getAPI(TODOLISTS_API.API_URL + TODOLISTS_API.LISTS_ENDPOINT)
      console.log('data :>> ', data);
      return data;
    } catch (error) {
      console.log('error :>> ', error);
    }
  },
/*
  put: async function (id, data) {
    try {
      let response = await putAPI(TODOLISTS_API.API_URL + TODOLISTS_API.LISTS_ENDPOINT + `/${id}`, data)
      console.log('data :>> ', response);
    } catch (error) {
      console.log('error :>> ', error);
    }
  },   */
  
  delete: async function (id) {
    try {
      let data = await deleteAPI(TODOLISTS_API.API_URL + TODOLISTS_API.LISTS_ENDPOINT + `/${id}`)
      console.log('data :>> ', data);
    } catch (error) {
      console.log('error :>> ', error);
    }
  },

  post: async function () {
    let addListInput = document.querySelector('#add-list-input');
    let listName = addListInput.value.trim();
      if(listName === '') {
          alert('Give it a name!')
          return 0
      }
    let data = {
      listName: listName
    }
    try {
      let response = await postAPI(TODOLISTS_API.API_URL + TODOLISTS_API.LISTS_ENDPOINT, data);
      console.log(response)
    } catch(error) {
      console.log(error)
    }
    
    addListInput.value = '';
   
    return 0;
  }
}


export default requestLists;
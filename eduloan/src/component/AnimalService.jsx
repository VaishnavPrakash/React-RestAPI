import axios from "axios";

const api_url = "http://localhost:8080/";

class AnimalService {
  getAllAnimals() {
    return axios.get(api_url + "get");
  }
  getAnimalById(id) {
    return axios.get(api_url + "get/" + id);
  }

  addAnimal(animal) {
    const response = axios.post(api_url + "add", animal);
    return response;
  }

  deleteById(id) {
    return axios.delete(api_url + "delete/" + id);
  }

  updateAnimal(id, animal) {
    
    return axios.put(api_url + "update/" + id, animal);
  }
}

const jr = new AnimalService();
export default jr;

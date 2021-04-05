import axios from "axios";

const URL_REST_API = "http://localhost:8080/addexam";
class Service {
  postExam() {
    axios.post(URL_REST_API);
  }
}
export default new Service();

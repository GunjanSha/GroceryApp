import axios from 'axios';
const USER_API_BASE_URL = "http://localhost:8085/grocery";

class UserService {
    login(email,password){
        console.log("get Valid User only");
        return axios.get(USER_API_BASE_URL + '/' + email +'/'+password);
    }
    
    registrationForm(user){
        console.log("create customer account");
         let a = axios.post(USER_API_BASE_URL+'/register',  user);
         console.log(a);
         return a
        }
}
export default new UserService()
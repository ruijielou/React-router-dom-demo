// import { observable, action, computed, reaction } from "mobx";

// let timerData = observable({
//   commonApi: 0
// });
// setInterval(() => {
//   console.log(timerData.commonApi)
//   timerData.commonApi++;
// }, 1000);

// class LoginStore {


//   // @observable commonApi = 0;
//   // @observable
//   // user = {
//   //   username: "",
//   //   password: ""
//   // };



//   @action
//   getCommonApi() {
//     // LoginStore.commonApi = commonApi
//     let _this = this;
//     fetch("http://earth.ebistrategy.com/Home/Configuration")
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         _this.commonApi = data;
//         // console.log(data);
//         // sessionStorage.setItem("commonApi", JSON.stringify(data));
//       });
//   }

//   @action
//   sendRequest() {
//     // this.toJS()
//     fetch("http://earth.ebistrategy.com/Home/Configuration")
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         this.commonApi = data;
//         // console.log(data);
//         // sessionStorage.setItem("commonApi", JSON.stringify(data));
//       });
//   }
// }

// export default new LoginStore();

// // export default loginStore;

// // import {observable} from 'mobx';
// // // import { ALL_TODOS } from '../constants';

// // class ViewStore {
// // 	@observable todos = null;
// // 	// @observable todoFilter= ALL_TODOS;
// // }
// // const loginStore = new ViewStore()



// // export default loginStore
import {observable} from 'mobx';

class ViewStore {

  @observable todoBeingEdited = null;
  
}
const loginStore = new ViewStore()

export default loginStore
import { observable, action, computed, reaction } from "mobx";

class LoginStore {

  @observable commonApi = {};
  @observable
  user = {
    username: "admin",
    password: "123456"
  };
  // constructor() {
  //   this.commonApi = {};
  //   this.user = {}
  // }
  // changeName(first, last) { 
  //   this.firstName = first; 
  //   this.lastName = last; 
  //   }
  @action 
  changeCommonApi (commonApi){
    this.commonApi = commonApi
    console.log(this.commonApi)
  }
 
  // @action async getCommonApi() {
  //   // LoginStore.commonApi = commonApi
  //   let _this = this;
  //   console.log('getcommonapi')
  //    await fetch("http://earth.ebistrategy.com/Home/Configuration")
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log(_this)
  //       _this.commonApi = data;
  //       // _this.addCommonApi(data)
  //     });
  // }

  @action
  sendRequest() {
    // this.toJS()
    fetch("http://earth.ebistrategy.com/Home/Configuration")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.commonApi = data;
        // console.log(data);
        // sessionStorage.setItem("commonApi", JSON.stringify(data));
      });
  }
}

export default new LoginStore();
const store = new Vuex.Store({
  state: {
    count: 0,
    logouterr:false,
    auth:false,
    uid:null
  },
  mutations: {
    increment (state) {
      state.count++
    },
    LogoutErr:function(state){
    	state.logouterr = true
    },
    AUTHSTATE:function(state,payload){
    	state.auth = payload
    },
    CHANGEUID:function(state,payload){
      state.uid = payload
    }
  },
  actions:{
  	initializefirebase:function(context){
		firebase.initializeApp({
			apiKey: "AIzaSyDgj05vQBmtE2PJXu6JLQaCLKJtmSM3n6U",
			authDomain: "posh-a25a5.firebaseapp.com",
			databaseURL: "https://posh-a25a5.firebaseio.com",
			projectId: "posh-a25a5",
			storageBucket: "posh-a25a5.appspot.com",
			messagingSenderId: "671190104755",
			appId: "1:671190104755:web:ba3b13a2aca6c16d"
		})
  	},
  	logouterr:function(context){
  		context.commit("LogoutErr")
  	},
  	authstate:function(context){
  		firebase.auth().onAuthStateChanged((user)=> {
			if (user) {
				context.commit("AUTHSTATE",true)
			}else{
				context.commit("AUTHSTATE",false)
			}
		})
  	},
    updateuid:function(context){
      firebase.auth().onAuthStateChanged( user => {
        if (user) { context.commit("CHANGEUID",user.uid) }
      })
    }
  },
  getters:{
  	getLogouterr:function(state){
  		return state.logouterr
  	},
  	getauth:function(state){
  		return state.auth
  	},
    getuid:function(state){
      return state.uid
    }
  }
})
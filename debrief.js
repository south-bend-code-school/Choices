(function(){

  $(document).ready(initialize);

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC2kM0Brj3kKEdKDpuswlJbGMP8jOpa7EA",
      authDomain: "game-of-life-3a42b.firebaseapp.com",
      databaseURL: "https://game-of-life-3a42b.firebaseio.com",
      projectId: "game-of-life-3a42b",
      storageBucket: "game-of-life-3a42b.appspot.com",
      messagingSenderId: "1056170119390"
    };


  function initialize(){

firebase.initializeApp(config);

  }
  })();

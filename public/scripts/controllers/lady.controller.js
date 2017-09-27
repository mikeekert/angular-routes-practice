myApp.controller('LadyController', function (Handshake) {
    console.log('in lady controller');

    var vm = this;

    Handshake.randomQuality();
    console.log(this.randomQuality);

    

});

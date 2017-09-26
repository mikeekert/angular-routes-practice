myApp.service('Handshake', function ($http) {
    console.log('handshake works');

    var self = this;

    self.randomSkill = {
        rng: Math.floor((Math.random() * 10) + 1)
    };

    self.randomQuality = function() {
        var numbRandom = (Math.floor((Math.random() * 10) + 1));
        self.randomQuality = {random: numbRandom};
    };

    self.incCounter = function () {
        self.countObj.count++;
    };
});
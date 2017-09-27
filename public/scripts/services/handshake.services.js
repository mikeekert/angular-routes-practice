myApp.service('Handshake', function ($http) {
    console.log('handshake works');

    var self = this;

    self.randomSkill = {
        rng: Math.floor((Math.random() * 10) + 1)
    };

    self.randomQuality = function(player) {
        var numbRandom = (Math.floor((Math.random() * 10) + 1));
        player.randomQual = {random: numbRandom};
    };

    self.countObj = { countTotal: 0, countWins: 0};

    self.totalCounter = function () {
        console.log('total +1');
        self.countObj.countTotal++;
    };
    self.winsCounter = function () {
        self.countObj.countWins++;
    };

});
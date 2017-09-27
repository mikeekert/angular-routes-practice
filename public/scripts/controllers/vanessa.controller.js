myApp.controller('VanessaController', function (Handshake) {
        console.log('in lady controller');
        var self = this;
        self.countObj = Handshake.countObj;    
        self.highFive = function() {
            Handshake.totalCounter();
            Handshake.randomQuality(self);
            if (self.randomQual.random >= Handshake.randomSkill.rng) {
                Handshake.winsCounter();
                console.log('total wins', Handshake.countObj.countWins);
                console.log('HIGH FIVE! mystery number:', Handshake.randomSkill.rng, ' vs player skill', self.randomQual.random);
            }  else {
                console.log('MISSED! mystery number:', Handshake.randomSkill.rng, ' vs player skill', self.randomQual.random);
            }   
        };
    });
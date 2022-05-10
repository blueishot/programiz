// JavaScript Objects

const tameImpala = {
    theSlowRush: 'Borderline',
    innerSpeaker: 'Alter ego',
    Lonerism: 'Be Above it'
}

console.log(tameImpala.Lonerism); // dot notation
console.log(tameImpala['Lonerism']); // Bracket notation

const macDemarco = {
    saladDays: {
        1: 'Salad Days',
        2: 'Blue Boy',
        3: 'Brother',
        4: 'Let her go'
    },

    thisOldDog: {
        1: 'My old man',
        2: 'this old dog',
        3: 'baby youre out',
        4: 'for the first time'
    }
}

console.log(macDemarco.saladDays[3])
console.log(macDemarco.thisOldDog)

const rexOrangeCounty = {
    pony: function() {
        return console.log('Pluto Projector, duration: 4:28, 2019.');
    }
}

rexOrangeCounty.pony()

// JavaScript Methods and this Keyword

const mareux = {
    decade: 'Come back to me',
    album: function () {
        return console.log('Mareux release ' + this.decade)
    }
}

mareux.album()
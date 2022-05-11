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

// JavaScript Constructor Function

function Iamx() {
    this.album = 'Volatile Times',
    this.song = 'Bernadette'
} // constructor

const band = new Iamx(); // Create an object
console.log(band.album);

const band2 = new Iamx(); // -> new object with same constructor

function TheStrokes(firstSong, secondSong, thirdSong) {
    this.firstSong = firstSong;
    this.secondSong = secondSong;
    this.thirdSong = thirdSong;
}

const theStrokesSongs = new TheStrokes('The adults are talking', 'Selfless', 'Ode to the Mets');
console.log(theStrokesSongs.secondSong)

TheStrokes.prototype.fortySong = 'Bad decisions';

console.log(theStrokesSongs.fortySong);

// JavaScript Getter and Setter

const Mitski = {
    beTheCowboy: 'Lonesome Love',

    get getSong() {
        return this.beTheCowboy;
    }
}

console.log(Mitski.beTheCowboy);
console.log(Mitski.getSong)

const currentJoys = {
    aDifferentAge: 'My nights are more beautiful than my days',

    set changeSong(songFromCurrentJoys) {
        this.aDifferentAge = songFromCurrentJoys;
    }
}

console.log(currentJoys.aDifferentAge);

currentJoys.changeSong = 'A different Age';

console.log(currentJoys.aDifferentAge);

// JavaScript Prototype

function StrawberryGuy() {
    this.song = 'Without you',
    this.album = 'Taking my time to be'
}

const strawberry = new StrawberryGuy();

console.log(strawberry.album);

StrawberryGuy.prototype.secondAlbum = 'Sun outside my window';

console.log(strawberry.secondAlbum);

StrawberryGuy.prototype = {secondAlbum: 'New album release'};

console.log(strawberry.secondAlbum);

const strawberry2 = new StrawberryGuy();

console.log(strawberry2.secondAlbum);
const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

  

    const result = () => {
      return kitties.reduce((acc, cur) => {

        if (cur.color === 'orange') {
          acc.push(cur.name);
        }

        return acc;
      }, []);
    };
    return result();

    // Annotation:

  },

  sortByAge() {
    // Sort the kitties by their age


    const result = kitties.sort((a, b) => {
      return b.age - a.age;
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    kitties.forEach(kitty => {
      kitty.age = kitty.age + 2;
      return kitties;
    }); 
    const result = kitties;
    return result;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }


    const result = clubs.reduce((acc, cur) => {
      cur.members.forEach(member => {
        if(!acc[member]) {
          acc[member] = [];
        }
        if (cur.members.includes(member)) {
          acc[member].push(cur.club);
        }
      });
      
      return acc;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]



    const result = mods.map(curMod => {
      curMod.studentsPerInstructor = curMod.students / curMod.instructors;
      delete curMod.students;
      delete curMod.instructors;
      return curMod;
    });

    return result;

    // Annotation:
    // We want an array of the same length so we will use a map method
    //on each iteration, we will create a new property, 'studentsPerInstructor' which is the amount of students divided by the current instructors.
    //then we delete the properties we no longer need
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]
    
    const result = cakes.reduce((acc, cake) => {
      let newCake = {};
      newCake.flavor = cake.cakeFlavor;
      newCake.inStock = cake.inStock;
      acc.push(newCake);
      return acc;
    }, []);
    
    return result;

    // Annotation:
    // Even though we are returning an array of the same length, reduce is easier to use here because we can build a new object rather than modifying each object we map over.
    //in our reduce, create a new cake object that is empty.
    //this object will have two properties, flavor and inStock. those properties are assigned the their respective properties from our currentValue. 
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]
    
    const result = cakes.filter(cake => cake.inStock);
    return result;

    // Annotation:
    // Use filter to find objects that meet the condition stated
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

   


    const result = cakes.reduce((acc, cur) => {
      acc += cur.inStock;
      return acc;
    }, 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    
    const result = cakes.reduce((acc, cur) => {
      cur.toppings.forEach(topping => {
        if (!acc.includes(topping)) {
          acc.push(topping);
        }
      });
      return acc;
    }, []);
    return result;

    // Annotation:
    // Getting a new type of array from an array of objects so 
    // lets reduce into a new array
    // since we are actually iterating over arrays within objects,
    // we need to run a forEach over each toppings array.
    // we could just push each topping into the accumulator,
    // but since we have to skip duplicates, we create a condition that only pushes the topping if the accumulator does not include it already. 
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }


      
    //put all toppings into an array
    //count how many times each topping occurs in an array
  



    const result = cakes.reduce((acc, cur) => {
      cur.toppings.forEach(topping => {
        acc[topping] ? acc[topping] += 1 : acc[topping] = 1;
      });
      return acc;
    },{} );
  

    return result;

    // Annotation:
    // This one was tricky.
    // We have to get into the toppings array of each cake.
    // For each topping we iterate over, we create a conditional.
    // If our accumulator has a property that matches the topping we are on, we can increment the value of that key.
    // If it does not, that value remains at 1. 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]


    

    const result = classrooms.filter(cohort => {
      return cohort.program === 'FE';
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }



    const result = classrooms.reduce((acc, cur) => {
      if (cur.program === 'FE') {
        acc.feCapacity += cur.capacity;
      }
      if (cur.program === 'BE') {
        acc.beCapacity += cur.capacity;
      }

      return acc;
    }, {feCapacity: 0, beCapacity: 0});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort ((a, b) => {
      return a.capacity - b.capacity;
    });
    return result;

    // Annotation: use sort method to return in ascending order
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    

    const result =  nationalParks.reduce((acc, cur) => {
      if (cur.visited) {
        acc.parksVisited.push(cur.name);
      }
      if (!cur.visited) {
        acc.parksToVisit.push(cur.name);
      }
      return acc;
    }, {parksToVisit: [], parksVisited: []});

      
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


 
    // let allParks = [];

    // // let parksPerState = nationalParks.reduce((acc, curVal) => {
    // //   acc[curVal.location] = curVal.name;
    // //   return acc;
    // // }, allParks);

    // let parksPerState = nationalParks.forEach(park => {
    //   let stateAndPark = {};
    //   stateAndPark[park.location] = park.name;
    //   allParks.push(stateAndPark);
    // });


    const result = nationalParks.reduce((acc, cur) => {
      let parksByState = {};
      if(!parksByState[cur.location]) {
        parksByState[cur.location] = cur.name;
      }
      acc.push(parksByState);
      return acc;
    }, []);


    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    // let activities = [];

    // nationalParks.forEach(park => {
    //   activities.push(park.activities);
    // });

    // let combinedActs = activities.reduce((a, b) => [...a, ...b], []);

    // let singular = new Set(combinedActs);


    // let allActivities = [...singular];


    const result =  nationalParks.reduce((acc, cur) => {
      cur.activities.forEach(activity => {
        if(!acc.includes(activity)) {
          acc.push(activity);
        }
      });
      return acc;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries

// Return the total beer count of all beers for every brewery e.g.
// 40
const breweryPrompts = {
  getBeerCount() {

    let result = 0;

    breweries.forEach(brewery => {
      result += brewery.beers.length;
    });
      
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]


    const result = breweries.reduce((acc, cur) => {
      let brewery = {};
      brewery.name = cur.name;
      brewery.beerCount = cur.beers.length;
      acc.push(brewery);
      return acc;
    }, []);

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }
    

    const result = () => {
      return breweries.reduce((acc, cur) => {
        cur.beers.forEach(beer => {
          acc.push(beer);
        });
        acc.sort((a, b) => {
          return b.abv - a.abv;
        });
        return acc;
      }, [])[0];
    };


    return result;

    // Annotation:
    // First we iterate through each brewery
    // Then we have to get into the beers array
    // I figured we could push all of the beers into the accumulator, then sort it by descending order of abv, then get the first element
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = () => {
      return instructors.reduce((acc, cur) => {
        let teacher = {};
        if (!teacher.name) {
          teacher.name = cur.name;
        }
        cohorts.forEach(cohort => {
          if (cohort.module === cur.module) {
            teacher.studentCount = cohort.studentCount;
          }
        });
        acc.push(teacher);
        return acc;
      }, []);
    };
    return result();

    // Annotation:
    // Write your annotation here as a comment
  },



  // A: Reads global scope;
  // B: block scope takes precendent
  // C: outside of the block. but since var isn't block scoped it reads the reassigned var, but the functionally scoped question and response
  // D: we are out of the function so we get the definitions from global scope.

  
  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    //divide studentCount by the amount of teachers in each module
    



    const result = cohorts.reduce((acc, cur) => {
      acc[`cohort${cur.cohort}`] = cur.studentCount / instructors.reduce((accInst, curInst) => {
        if(curInst.module === cur.module) {
          accInst++;
        }
        return accInst;
      }, 0);
      return acc;
    }, {});


    return result;

    // Annotation:
    // This one was crazy. Basically, we start by reducing the cohorts module because we are basing our length off our new object off of the cohorts array.
    //we create our values using interpolation, then to assign it our value is where it gets tricky. Basically, we need to divide the total number of students in a cohort by the amount of instructors there are. So we can iterate through instructors, and if the instructor module matches the module of the Current Cohort, we add to our second accumulator. We divide the total count by this accumulator. 
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }



    const result = instructors.reduce((acc, cur) => {
      acc[cur.name] = [];
      cohorts.forEach(cohort => {
        cohort.curriculum.forEach(subject => {
          if (cur.teaches.includes(subject) && !acc[cur.name].includes(cohort.module)) {
            acc[cur.name].push(cohort.module);
          }
        });
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = instructors.reduce((acc, cur) => {
      cohorts.forEach(cohort => {
        cohort.curriculum.forEach(curriculum => {
          if (!acc[curriculum]) {
            acc[curriculum] = [];
          }
          if(cur.teaches.includes(curriculum) && !acc[curriculum].includes(cur.name)) {
            acc[curriculum].push(cur.name);
          }
        });
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    
  

    const result = () => {
      let bossesList = Object.keys(bosses);
      return bossesList.reduce((bossName, boss) => {
        let bossAndSidekick = {};
        bossAndSidekick.bossName = bosses[boss].name;
        bossAndSidekick.sidekickLoyalty = 0;
        sidekicks.forEach(sidekick => {
          if (bossAndSidekick.bossName === sidekick.boss) {
            bossAndSidekick.sidekickLoyalty += sidekick.loyaltyToBoss;
          }
        });
        bossName.push(bossAndSidekick);
        return bossName;
      }, []);
    };


    return result();

  }
};

// Annotation:
// Write your annotation here as a comment





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = () => {
      constNames = Object.keys(constellations);
      return stars.reduce((starsInConst, star) => {
        if (constNames.includes(star.constellation.toLowerCase())) {
          starsInConst.push(star);
        }
        return starsInConst;
      }, []);
    };
    return result();

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = () => {
      return stars.reduce((starsByColor, star) => {
        if (!starsByColor[star.color]) {
          starsByColor[star.color] = [star];
        } else {
          starsByColor[star.color].push(star);
        }
        return starsByColor;
      }, {});
    };
    return result();

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = () => {

      let sorted = stars.sort((a, b) => {
        return a.visualMagnitude - b.visualMagnitude;
      });
      return sorted.reduce((constellation, current) => {
        if (current.constellation) {
          constellation.push(current.constellation);
        }
        return constellation;
      }, [])
    };
    return result();

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = characters.reduce((damage, character) => {
      let weaponsKeys = Object.keys(weapons);
      weaponsKeys.forEach(weapon => {
        character.weapons.forEach(charWeapon => {
          if (charWeapon === weapon) {
            damage += weapons[weapon].damage;
          }
        });
      });
      return damage;
    }, 0);
    return result;

    // Annotation:
    // loop through characters
    // loop through weapons using obj.keys
    // when we're on our first character, loop through weapons
    // if weapon matches our current index on weapons, 
    // increment a counter based on the damage count
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = characters.reduce((charWeapon, character) => {
      let weaponKeys = Object.keys(weapons)
      let newChar = {};
      newChar[character.name] = {damage: 0, range: 0};
      character.weapons.forEach(characterWeapon => {
        weaponKeys.forEach(weapon => {
          if (characterWeapon === weapon) {
            newChar[character.name].damage += weapons[weapon].damage;
            newChar[character.name].range += weapons[weapon].range;
          }
        });
      });
      charWeapon.push(newChar);
      return charWeapon;
    }, []);
    return result;

    // Annotation:
    // we are going to loop thru characters using reduce
    // create a new array of objects, each with a key of the current characters name
    // on each character, loop through their weapons
    // then iterate over weapons obj
    // if charWeapon matches current weapon
    // create a new object that adds the damage property and the range property
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = movies.reduce((movieList, movie) => {
      movieList[movie.title] = 0;
      movie.dinos.forEach(dino => {
        if (dinosaurs[dino].isAwesome) {
          movieList[movie.title] ++;
        }
      });
      return movieList;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = movies.reduce((director, movie) => {

      if (!director[movie.director]) {
        director[movie.director] = {};
      }
      director[movie.director][movie.title] = Math.floor(movie.cast.reduce((age, actor) => {
        age += (movie.yearReleased - humans[actor].yearBorn)
        return age;
      }, 0) / movie.cast.length);
      return director;
    }, {});
    return result;

    // Annotation:
    // First I created an object whos keys are each director in the movies array. 
    // I assigned that value to an empty object
    // that object gets filled with keys that correspond to each movie that the director has made.
    // the value of each movie is the avg age of the cast members when the movie was released. 
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = () => {
      let allActors = Object.keys(humans);
      let jurassicActors = movies.reduce((actors, movie) => {
        actors.push(movie.cast);
        return actors;
      }, []).flat();
      let unCast = allActors.filter(actor => !jurassicActors.includes(actor));
      return unCast.reduce((allUncast, actor) => {
        humans[actor].name = actor;
        allUncast.push(humans[actor]);
        allUncast.forEach(a => delete(a.yearBorn));
        return allUncast;
      }, []).sort((a, b) =>  {
        let nameA = a.nationality.toLowerCase();
        var nameB = b.nationality.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }    
        return 0;
      });
    };

    return result();

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  dinosaurPrompts
};

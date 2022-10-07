/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = [
    {
        id: 1,
        text: 'harry potter',
        author: 'ron',
        date: '02-01-22',
        topics: ['wizard', 'spells']
    },
    {
        id: 2,
        text: 'minnions',
        author: 'grew',
        date: '02-02-22',
        topics: ['evil', 'but funny']
    },
    {
        id: 3,
        text: 'peaybody',
        author: 'sherman',
        date: '02-03-22',
        topics: ['time', 'travel']
    },
    {
        id: 4,
        text: 'jurrasic',
        author: 'been',
        date: '02-04-22',
        topics: ['dino', 'toys']
    }
];

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics [array of strings]

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

/* 
   Add another object below using the .push() method: Steps;
   1. declare a new variable that will hold your new object
   2. use syntax variableNameYouAreAddingTo.push(newVariableName)
 */
const bear = 
{
    id: 5,
    text: 'fast and furious',
    author: 'dom',
    date: '02-05-22',
    topics: ['fast', 'cars']
};
notes.push(bear);

/* 
Another way to add an object or even multiple objects is to write the object/s 
inside of the .push() parenthesis ()
*/
notes.push({
    id: 6,
    text: 'black hawk down',
    author: 'miller',
    date: '02-06-22',
    topics: ['war', 'distruction']
},
{
    id: 7,
    text: 'saving private ryan',
    author: 'ryan',
    date: '02-07-22',
    topics: ['world', 'war']
});


//itterate through topics inside of notes using a for..of inside of a for..of
console.log('*** All Note Topics ***');
for (let i of notes) {
    for (let topic of i.topics) {
   // console.log(topic)
    }
};

/* Add a new section of output where you can see, on average, 
how many topics the authors are applying to each post.*/
console.log('*** Average Topics Per Note ***');
let totalTopics = 0;
for (let a of notes) {
    for (let b of a.topics) {
    totalTopics += 1 /* b is itterating through each index of 
                        topics so the code here is saying to add 1 for each index*/ 
    }
};

let averageTopic = totalTopics / notes.length;


/* filter all of the notes to find only the ones that have a specific topic assigned to it. */

//create a new variable = to an empty array
const filteredNotes = [];

//create a new variable to contain a string of the topic you wish to filter
const criteria = 'war';

for (const filter of notes) {
    for (const b of filter.topics) {
        if (b == criteria) {
            filteredNotes.push(filter)
        }
    }
};




/* On each iteration, use console.log() to display the text of each note, but surrounded by an article HTML element */
console.log('*** Note Articles ***');
let allHTML = '';
for (const object of notes) {
    allHTML += `<article>${object.text}</article>`
    for (const y of object.topics) {
        const section = `<section>${y}</section>`
        allHTML += section
    }
};
console.log(allHTML);

/*
    Since the string has to be built up in parts - in both
    the outer loop and the inner loop - start off with a
    variable that has an initial value of an empty string.
*/



/*
    Iterate all notes
*/



/*
    Inside the iteration of all notes, add the open article
    tag and the note text.
*/


/*
    Then iterate the `topics` array for the current note.
*/


/*
    Create a string template with an opening and closing
    <section> element with the topic text interpolated
    between them. Then add the string template to the
    variable created at the start with the += operator.
*/


/*
    After both for..of loops are done, add the closing
    </article> tag to the end of the main string with +=
*/
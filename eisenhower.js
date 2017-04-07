let FullSet = require('full-set');


// Eisenhower decision matrix
// college class or personal event scheduling
// property acl

let tasks = new FullSet(
    "get dinner",
    "clean dishes",
    "walk the dog",
    "send a letter",
    "build a robot",
    "do laundry",
    "build a webapp",
    "file taxes",
    "read unread email",
    "laser cut parts",
    "learn the monthly js frontend framework",
    "play board games",
    "attend meetup",
    "go to class",
    "go to work",
    "underwater basket weaving",
    "refactor all the things",
    "story pointing",
    "scrum meeting",
    "learn a new language",
    "exercise",
    "read a book",
    "read hackernews",
    "browse reddit",
    "browse imgur",
    "browse hackaday",
    "prepare for maker faire",
    "learn some algorithms",
    '"Adulting"',
    'fix sink',
    'hack on things'
);

//Add some of the above tasks that you think are important into this set
let importantTasks = new FullSet("file taxes")

//Add some of the above tasks that you think are urgent into this set
let urgentTask = new FullSet("file taxes")

/*
 * Assignment: 
 * Create an Eisenhower decision matrix using set operations and the three sets above.
 * Create four sets of task using set operations
 * 1. Urgent, and Important tasks
 * 2. Urgent, but not Important tasks
 * 3. Not urgent, but Important tasks
 * 4. Not urgent, and not Important
 * */


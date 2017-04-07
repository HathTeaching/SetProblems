let FullSet = require('full-set');

//These are all the aparment complexes in the system
let properties = new FullSet(
"Lake Park Summer",
"Glen Prairie Lofts",
"Lake Islands Autumn",
"Mountain Creek Palace",
"Manor Gardens Place",
"Rolling Gables Villas",
"Plaza Woods Lofts",
"Pond Islands Homes",
"Manor Park Place",
"Lake Woods View",
"Whispering Gables Summer"
);

//These users have access to the lists properties
let acl = {
    alice: new FullSet(
       "Lake Park Summer",
       "Glen Prairie Lofts",
       "Lake Islands Autumn",
    ),
    bob: new FullSet(
        "Lake Islands Autumn",
        "Mountain Creek Palace",
        "Manor Gardens Place",
        "Rolling Gables Villas",
        "Plaza Woods Lofts",
        "Pond Islands Homes",
        "Manor Park Place",
    ),
    eve: new FullSet(
        "Plaza Woods Lofts",
        "Pond Islands Homes",
        "Manor Park Place",
        "Lake Woods View",
        "Whispering Gables Summer"
    ),
    church: new FullSet(
        "Rolling Gables Villas",
        "Plaza Woods Lofts",
        "Pond Islands Homes",
        "Manor Park Place",
        "Lake Woods View",
        "Whispering Gables Summer"
    ),
    turing: new FullSet(
        "Lake Park Summer",
        "Glen Prairie Lofts",
        "Lake Islands Autumn",
        "Mountain Creek Palace",
        "Manor Gardens Place",
        "Rolling Gables Villas",
        "Plaza Woods Lofts",
        "Pond Islands Homes",
        "Manor Park Place",
        "Lake Woods View",
        "Whispering Gables Summer"
    )
}

/**
 * Assignment 1: The users made theses requests for data. Did any of them request data they shouldn't have? Use set operations to find out
 **/
let requests = {
    alice: new FullSet("Lake Park Summer", "Glen Prairie Lofts"),
    bob: new FullSet(
        "Lake Islands Autumn",
        "Manor Gardens Place",
        "Rolling Gables Villas",
        "Plaza Woods Lofts"
    ),
    eve: new FullSet(
        "Pond Islands Homes",
        "Manor Park Place",
        "Lake Woods View",
        "Whispering Gables Summer"
    ),
    church: new FullSet(
        "Mountain Creek Palace",
        "Manor Gardens Place",
        "Rolling Gables Villas",
        "Plaza Woods Lofts",
        "Pond Islands Homes",
    ),
    turing: new FullSet(
        "Mountain Creek Palace",
        "Manor Gardens Place",
        "Rolling Gables Villas",
    )

}

/*
 * Assignment 2: Print out the properties the individuals do not have access to
 */




// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list. //splice
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         RETURN a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          "Max Gaudin\nJohn Fabroni\nKaelyn Chresfield"
 * 
 * 
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
 
    let obj = {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
  return obj;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            contacts.push(contact)

        }, // returns the contact object if found in the contacts-list
        findContact: function(fullName){
            for (let i = 0; i < contacts.length; i++){
                
                if (fullName === contacts[i].nameFirst + " " + contacts[i].nameLast){
                return contacts[i];
                }
            }
        },
        removeContact: function(contact){
            contacts.splice(0, 1);
        },
       printAllContactNames: function(){
        //create storage array to push 
        var str = [];
        //iterate over contacts
        for (let i = 0; i < contacts.length; i++){
            //create new variable and assign it to the first and last name together
            var newVar = contacts[i].nameFirst + ' ' + contacts[i].nameLast;
            //push the full name into the str storage
            str.push(newVar);
        }
        //join the array with the \n
       return str.join("\n");
       } 
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}

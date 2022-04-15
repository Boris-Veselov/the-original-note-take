const { json } = require('express/lib/response');
const fs = require('fs');
const util = require('util');
const asyncReadFile = util.promisify(fs.readFile);
class Notes {
     async retrieveNotes() { 
        const parseData = []
        asyncReadFile ('db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            // console.log(data)
            return JSON.parse(data)
        }) 
        // console.log('retrieveNotes is alive')
    }
    async saveNotes() {
        console.log('saveNotes is alive')
    }
}
const newClass = new Notes
module.exports = new Notes
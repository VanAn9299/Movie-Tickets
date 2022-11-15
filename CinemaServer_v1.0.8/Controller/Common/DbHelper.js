const fs = require('fs');

module.exports = {
    Read: () => JSON.parse(fs.readFileSync('data')),
    Insert: (obj) => {
        let data = JSON.parse(fs.readFileSync('data'));
        data = {
            ...data,
            ...obj
        }
        fs.writeFileSync('data', JSON.stringify(data));

        return data;
    },
    Write: (obj) => {
        fs.writeFileSync('data', JSON.stringify(obj));
    }
}
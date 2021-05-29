const db = reuqire("../config/db.config");

exports.register = (data, callback) => {
    db.query(
        'INSERT INTO users(firstName, lastName, emailId, password) VALUES(?,?,?,?)', 
        [data.firstName, data.lastName, data.emailId, data.password],
        (error, results, fields) =>{
            if(error){
                return callback(error);
            }
            retunr callback(null, 'Registration successful');
        }
    );
};
const mysql =require('mysql');
const conn =mysql.createConnection({
    most        :'localhost',
    user        :'nodejs',
    password    :'admin',
    database    :'nodejs'
});

conn.connect( (err) => {
     if(err) {throw err;}
    console.log('Connected to Database...');

});

const db ={
    createTable: () => {
        const sql = "CREATE TABLE test_table (id INT AUTO_INCREMENT, firstname VARCHAR(80),lastname VARCHAR(80), PRIMARY KEY(id));"
        conn.query(sql, (err) => {
            if(err){throw err; }
            console.log('Table created successfully');
        })
    },
    getALL: () => {
        return new Promise( (resolve, reject) => {
            const sql = "SELECT * FROM test_table";
            conn.query(sql, (err,result) => {
                if(err){return reject (err); }
                return resolve(result);
            })
        
        });
    },
   insertData: () => {
    return new Promise( (resolve,reject) => {
        const data ={firstname: "John", lastname: "Doe"}
        const sql = "INSERT INTO test_table SET ?";
        conn.query(sql, data,  (err) => {
            if(err){return reject (err); }
            return resolve("Data inserted into the database");
        })
    
    });

   },
   updateData: (id) => {
   return new Promise( (resolve,reject) => {
    const data ={id: id, firstname: "John", lastname: "Doe"}
    const sql = "REPLACE INTO test_table SET ?";
    conn.query(sql, data,  (err) => {
        if(err){return reject (err); }
        return resolve("Data updated...");
    })

});

}

};

module.exports = db;


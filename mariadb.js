const mariadb = require('mariadb/callback');
const conn = mariadb.createConnection({
      host: '192.168.0.2', 
      user:'root',
      password:'root'
});
conn.connect(err => {
  if (err) {
    console.log("not connected !");
  } else {
    console.log("connected...");
    console.log("Connection id is",conn.threadId);
    
  }
});
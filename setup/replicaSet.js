rsconf = {
    _id : "rs0",
    members: [
        { _id : 0, host : "mongo:27017"}
       
    ]
}

rs.initiate(rsconf);

rs.conf();
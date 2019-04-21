rsconf = {
    _id : "ab0",
    members: [
        { _id : 0, host : "arbiter-ab0-1:27017"}
    ]
}

rs.initiate(rsconf);

rs.conf();
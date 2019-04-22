rsconf = {
    _id : "ab0",
    members: [
        { _id : 0, host : "arbiter-ab0-1:30000"}
    ]
}

rs.initiate(rsconf);

rs.conf();
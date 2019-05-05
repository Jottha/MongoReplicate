rsconf = {
    _id : "ab0",
    members: [
        { _id : 0, host : "arbiter:30000"}
    ]
}

rs.initiate(rsconf);

rs.conf();
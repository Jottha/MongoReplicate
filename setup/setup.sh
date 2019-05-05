#!/bin/bash
echo ************************************************
echo Starting the replica set
echo ************************************************

sleep 10 | echo Sleeping
mongo mongodb://mongo:27017 replicaSet.js
mongo mongodb://arbiter:30000 arbiterSet.js
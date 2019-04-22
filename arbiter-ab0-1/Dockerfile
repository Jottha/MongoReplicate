FROM mongo

EXPOSE 30000

RUN create --name mongo-arbiter-data -v /data/arb busybox

RUN --name mongo-arbiter 
    --volumes-from=mongo-arbiter-data 
    -p 30000:30000 
    -d 
    killercentury/mongo-arbiter 
    mongod 
    --port 30000 
    --dbpath /data/arb 
    --replSet "ab0" 
    --smallfiles 
    --nojournal 
    --quiet
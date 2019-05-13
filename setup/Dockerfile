
FROM mongo

# Create app directory
WORKDIR /usr/src/configs

# Install app dependencies
COPY replicaSet.js .
COPY arbiterSet.js .
COPY setup.sh .

CMD ["./setup.sh"]
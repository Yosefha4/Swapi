CREATE TABLE IF NOT EXISTS apartments (
    id serial PRIMARY KEY,
    whichAction varchar(50),
    apType varchar(50),
    apCity varchar(50),
    apStreet varchar(50),
    numOfRooms integer,
    moreDesc varchar(100),
    builtInMeter integer,
    price varchar(50),
    availDate varchar(50),
    apImages varchar[],
    ownerName varchar(50),
    ownerPhone varchar(50)
);

#! /usr/bin/env node
import pkg from 'pg';
const { Client } = pkg;


const tableGames = `
CREATE TABLE IF NOT EXISTS game (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  columnGame TEXT UNIQUE,
  imageurl TEXT,
  steamurl TEXT UNIQUE
);

INSERT INTO game (columnGame,imageurl,steamurl) 
VALUES
  ('My Time At Portia','/images/MTAP.jpg','/666140/My_Time_at_Portia/'),
  ('Baldur''s Gate III','/images/BG3.jpeg','/1086940/Baldurs_Gate_3/'),
  ('Dota 2','/images/dota2.jpg','/570/Dota_2/'),
  ('CSGO','/images/placeholder.jpeg','/730/CounterStrike_2/');
`;

const tableDevelopers = `
CREATE TABLE IF NOT EXISTS developer (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  columnDeveloper TEXT UNIQUE,
  imageurl TEXT
);

INSERT INTO developer (columnDeveloper,imageurl) 
VALUES
  ('Larian','/images/placeholder.jpeg'),
  ('Valve','/images/placeholder.jpeg'),
  ('Pathea','/images/placeholder.jpeg');
`;

const tableGameDeveloper = `
CREATE TABLE IF NOT EXISTS gamedeveloper (
  idGame INT,
  idDeveloper INT,
  PRIMARY KEY (idGame,idDeveloper),
  FOREIGN KEY (idGame) REFERENCES game(id) ON DELETE CASCADE,
  FOREIGN KEY (idDeveloper) REFERENCES developer(id) ON DELETE CASCADE
);

INSERT INTO gamedeveloper (idGame,idDeveloper)
VALUES
(1,3),
(2,1),
(3,2),
(4,2);
`
const dropAllTables = `
DROP TABLE gamedeveloper;
DROP TABLE game;
DROP TABLE developer;`

async function main(param) {
    console.log("seeding...");
    const client = new Client({
        connectionString: "postgresql://acchu:changeme@localhost:5432/games_inventory",
    });
    await client.connect();
    if (param) {
        // await client.query(tableGames);
        // await client.query(tableDevelopers);
        // await client.query(tableGameDeveloper);
    }
    else{
        await client.query(dropAllTables)
    }
    await client.end();
    console.log("done");
}



main(1);
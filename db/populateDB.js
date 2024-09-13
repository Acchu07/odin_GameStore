#! /usr/bin/env node
import pkg from 'pg';
const { Client } = pkg;


const tableGames = `
CREATE TABLE IF NOT EXISTS game (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  columnGame TEXT
);

INSERT INTO game (columnGame) 
VALUES
  ('My Time At Portia'),
  ('Baldur''s Gate III'),
  ('Dota 2');
`;

const tableDevelopers = `
CREATE TABLE IF NOT EXISTS developer (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  columnDeveloper TEXT
);

INSERT INTO developer (columnDeveloper) 
VALUES
  ('Larian'),
  ('Valve'),
  ('Pathea');
`;

const tableGameDeveloper = `
CREATE TABLE IF NOT EXISTS gamedeveloper (
  idGame INT,
  idDeveloper INT,
  PRIMARY KEY (idGame,idDeveloper),
  FOREIGN KEY (idGame) REFERENCES game(id) ON DELETE CASCADE,
  FOREIGN KEY (idDeveloper) REFERENCES developer(id) ON DELETE CASCADE
);
`

const figureInsertIntoTable = `
INSERT INTO gamedeveloper (idGame,idDeveloper)
VALUES
(1,3),
(2,1),
(3,2);
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
        await client.query(tableGames);
        await client.query(tableDevelopers);
        await client.query(tableGameDeveloper);
        await client.query(figureInsertIntoTable);
    }
    else{
        await client.query(dropAllTables)
    }
    await client.end();
    console.log("done");
}



main(1);
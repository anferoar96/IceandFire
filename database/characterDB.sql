CREATE SCHEMA iceandfire;
GRANT USAGE ON SCHEMA iceandfire TO fan;

ALTER DEFAULT PRIVILEGES IN SCHEMA iceandfire GRANT SELECT,INSERT ON  TABLES TO fan;

CREATE TABLE iceandfire.characters (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	"name" varchar NOT NULL,
	gender varchar NOT NULL,
	culture varchar NOT NULL,
	born varchar NULL,
	died varchar NULL,
	"createdAt" timestamp NOT NULL,
	CONSTRAINT characters_pk PRIMARY KEY (id)
);

CREATE TABLE iceandfire.books (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	"name" varchar NOT NULL,
	CONSTRAINT books_pk PRIMARY KEY (id)
);

CREATE TABLE iceandfire.character_book (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	idbook int4 NOT NULL,
	idcharacter int4 NOT NULL,
	CONSTRAINT character_book_pk PRIMARY KEY (id),
	CONSTRAINT character_book_fk FOREIGN KEY (idcharacter) REFERENCES iceandfire."characters"(id) ON UPDATE SET DEFAULT,
	CONSTRAINT character_book_fk_1 FOREIGN KEY (idbook) REFERENCES iceandfire.books(id) ON UPDATE SET DEFAULT
);

INSERT INTO iceandfire.books ("name") VALUES
	 ('A Game of Thrones'),
	 ('A Clash of Kings'),
	 ('A Storm of Swords'),
	 ('The Hedge Knigh'),
	 ('A Feast for Crows'),
	 ('The Sworn Sword'),
	 ('The Mystery Knight'),
	 ('A Dance with Dragons'),
	 ('The Princess and the Queen'),
	 ('The Rogue Prince');
INSERT INTO iceandfire.books ("name") VALUES
	 ('The World of Ice and Fire'),
	 ('A Knight of the Seven Kingdoms');


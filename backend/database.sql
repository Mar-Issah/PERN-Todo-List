-- just writing some commands
CREATE DATABASE perntodo;

CREATE TABLE todo(
todo_id BIGSERIAL NOT NULL PRIMARY KEY,
description VARCHAR (300)
);
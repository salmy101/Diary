DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS entries CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL
);

CREATE TABLE entries (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  title VARCHAR(255),
  text TEXT
);

INSERT INTO users (first_name, last_name, email, password)
VALUES ('Salma', 'Ibrahim', 'a@a.com', '123');


INSERT INTO entries (user_id, title, text)
VALUES (1, 'The Beginning of Summer', 'This is gonna be the best summmer ever
I have so many plans, from travel, to cafe hopping, and to building new projects. Its gonna be great!');

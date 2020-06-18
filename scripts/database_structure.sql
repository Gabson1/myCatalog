CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    firstname varchar(255) NOT NULL,
    lastname varchar(255) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    password varchar(255) NOT NULL,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE User_tables (
    table_id SERIAL PRIMARY KEY,
    creator_id int NOT NULL,
    table_name text NOT NULL,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE Table_definition (
    table_definition_id SERIAL PRIMARY KEY,
    table_name_id int NOT NULL REFERENCES User_tables (table_id),
    table_column_name text NOT NULL,
    table_column_type text NOT NULL
);

CREATE TABLE APIs (
    api_id SERIAL PRIMARY KEY,
    assigned_user int NOT NULL REFERENCES Users (user_id),
    status boolean NOT NULL,
    api_name text NOT NULL,
    activated_at timestamp  DEFAULT CURRENT_TIMESTAMP NOT NULL
);


-- createdb <dbname>
-- psql -d <dbname>
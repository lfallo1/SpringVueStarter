CREATE  TABLE users (
  username VARCHAR(45) NOT NULL ,
  password VARCHAR(255) NOT NULL ,
  enabled SMALLINT NOT NULL DEFAULT 1 ,
  PRIMARY KEY (username));
CREATE SEQUENCE user_roles_seq;

CREATE TABLE user_roles (
  user_role_id BIGSERIAL NOT NULL,
  username varchar(45) NOT NULL,
  role varchar(45) NOT NULL,
  PRIMARY KEY (user_role_id),
  CONSTRAINT uni_username_role UNIQUE (role,username),
  CONSTRAINT fk_username FOREIGN KEY (username) REFERENCES users (username));

CREATE TABLE channel (
  channel_id BIGSERIAL NOT NULL ,
  name varchar(45) NOT NULL,
  PRIMARY KEY (channel_id));

CREATE INDEX fk_username_idx ON user_roles (username);

INSERT INTO users(username,password,enabled)
VALUES ('lfallo1','$2a$10$/BPbiwTq4ljnD0GPBOW7juUwwl8yQSEBbYwsF4cAW1eoOp8yogILC', 1);
INSERT INTO users(username,password,enabled)
VALUES ('jdoe123','$2a$10$.qXl8BXAb3u9L7TdJDY9u.DEmgLtxmhbzR7NI0J9X.UY3gmUTWxSC', 1);
INSERT INTO users(username,password,enabled)
VALUES ('jsmith443','$2a$10$TjykuOlzEP8BJT1Ei1yLu.tV0u61cMVjuuRx4QAMVpjt29ZCHcWJK', 1);

INSERT INTO user_roles (username, role)
VALUES ('lfallo1', 'ROLE_ADMIN');
INSERT INTO user_roles (username, role)
VALUES ('jdoe123', 'ROLE_USER');
INSERT INTO user_roles (username, role)
VALUES ('jsmith443', 'ROLE_USER');

insert INTO channel(name) VALUES ('My First Channel');
insert INTO channel(name) VALUES ('Sports Channel');

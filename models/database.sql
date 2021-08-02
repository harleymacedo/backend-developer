create database rede_social;

create table usuario(
    id serial primary key,
    nome varchar(200) not null,
    idade int not null
)

create table post(
    id serial primary key,
    titulo varchar(200) not null,
    texto varchar(500) not null,
    likes int not null default 0
)
create database rede_social;

create table usuario(
    id serial primary key,
    nome varchar(200) not null,
    idade int not null
)

create table post;
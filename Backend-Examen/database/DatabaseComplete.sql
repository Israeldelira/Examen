
/*Creacion de base de datos*/
DROP DATABASE IF EXISTS EXAMEN_DB ;
CREATE DATABASE EXAMEN_DB;

/*Creacion de tabal usuarios con auto_increment y unique
PK=id_user*/
CREATE TABLE `EXAMEN_DB`.`USERS` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(60) NOT NULL,
  `apellido_paterno` VARCHAR(45) NOT NULL,
  `apellido_materno` VARCHAR(45) NULL,
  `direccion` VARCHAR(100) NOT NULL,
  `telefono` NVARCHAR(10) NOT NULL,
  PRIMARY KEY (`id_user`));

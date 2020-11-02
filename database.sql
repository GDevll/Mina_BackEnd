-- TINYTEXT == VAR_CHAR(255)

-- Create MINA Schema
CREATE SCHEMA IF NOT EXISTS `mina`;


-- Table of the storekeeper
CREATE TABLE IF NOT EXISTS `mina`.`storekeeper`
(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` TINYTEXT,
    `surname` TINYTEXT,
    `email` TINYTEXT,
    PRIMARY KEY (`id`)
);

-- Table of the store : linked with the storekeeper by id
CREATE TABLE IF NOT EXISTS `mina`.`shop`
(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` TINYTEXT,
    `country` TINYTEXT,
    `city` TINYTEXT,
    `zip_code` TINYTEXT,
    `id_storekeeper` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY(`id_storekeeper`) REFERENCES `mina`.`storekeeper`(`id`)
);
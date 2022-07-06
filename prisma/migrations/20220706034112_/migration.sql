-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hp` VARCHAR(191) NOT NULL,
    `pass` VARCHAR(191) NOT NULL,
    `hapus` BOOLEAN NOT NULL DEFAULT false,

    INDEX `i_hapus`(`hapus`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

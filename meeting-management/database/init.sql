-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 09, 2025 at 07:44 AM
-- Server version: 9.2.0
-- PHP Version: 8.2.27
SET
    SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET
    time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;

/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meeting_management`
--
CREATE DATABASE IF NOT EXISTS `meeting_management` DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_general_ci;

USE `meeting_management`;

-- --------------------------------------------------------
--
-- Table structure for table `meetings`
--
CREATE TABLE
    `meetings` (
        `id` char(36) CHARACTER
        SET
            utf8mb4 COLLATE utf8mb4_bin NOT NULL,
            `team_id` char(36) CHARACTER
        SET
            utf8mb4 COLLATE utf8mb4_bin NOT NULL,
            `description` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
            `room` varchar(40) COLLATE utf8mb4_general_ci NOT NULL,
            `start_time` datetime NOT NULL,
            `end_time` datetime NOT NULL,
            `created_at` datetime NOT NULL,
            `updated_at` datetime NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `meetings`
--
INSERT INTO
    `meetings` (
        `id`,
        `team_id`,
        `description`,
        `room`,
        `start_time`,
        `end_time`,
        `created_at`,
        `updated_at`
    )
VALUES
    (
        '1c56d180-fcba-11ef-b2f8-0242ac110002',
        '7b5bf16c-fcb9-11ef-b2f8-0242ac110002',
        'design system',
        'system room',
        '2025-03-12 10:00:00',
        '2025-03-12 12:00:00',
        '2025-03-09 07:38:30',
        '2025-03-09 07:38:30'
    ),
    (
        '1c56d797-fcba-11ef-b2f8-0242ac110002',
        '7b5bfb7a-fcb9-11ef-b2f8-0242ac110002',
        'developer work-life balance',
        'blue room',
        '2025-03-13 11:00:00',
        '2025-03-13 14:00:00',
        '2025-03-09 07:38:30',
        '2025-03-09 07:38:30'
    ),
    (
        '1c56da56-fcba-11ef-b2f8-0242ac110002',
        '7b5bf838-fcb9-11ef-b2f8-0242ac110002',
        'naps during job',
        'black room',
        '2025-03-11 15:00:00',
        '2025-03-11 17:00:00',
        '2025-03-09 07:38:30',
        '2025-03-09 07:38:30'
    ),
    (
        '1c56dcee-fcba-11ef-b2f8-0242ac110002',
        '7b5bf16c-fcb9-11ef-b2f8-0242ac110002',
        'how to use claude properly',
        'ai room',
        '2025-03-14 10:00:00',
        '2025-03-14 13:00:00',
        '2025-03-09 07:38:30',
        '2025-03-09 07:38:30'
    );

-- --------------------------------------------------------
--
-- Table structure for table `teams`
--
CREATE TABLE
    `teams` (
        `id` char(36) CHARACTER
        SET
            utf8mb4 COLLATE utf8mb4_bin NOT NULL,
            `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
            `created_at` datetime NOT NULL,
            `updated_at` datetime NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `teams`
--
INSERT INTO
    `teams` (`id`, `name`, `created_at`, `updated_at`)
VALUES
    (
        '7b5bf16c-fcb9-11ef-b2f8-0242ac110002',
        'UI Team',
        '2025-03-09 07:37:09',
        '2025-03-09 07:37:09'
    ),
    (
        '7b5bf838-fcb9-11ef-b2f8-0242ac110002',
        'Frontend Team',
        '2025-03-09 07:37:09',
        '2025-03-09 07:37:09'
    ),
    (
        '7b5bfb7a-fcb9-11ef-b2f8-0242ac110002',
        'Database Team',
        '2025-03-09 07:37:09',
        '2025-03-09 07:37:09'
    ),
    (
        '7b5bfe7e-fcb9-11ef-b2f8-0242ac110002',
        'Backend Team',
        '2025-03-09 07:37:09',
        '2025-03-09 07:37:09'
    );

--
-- Indexes for dumped tables
--
--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings` ADD PRIMARY KEY (`id`),
ADD KEY `team_id` (`team_id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams` ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--
--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings` ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
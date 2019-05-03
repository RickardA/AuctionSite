-- --------------------------------------------------------
-- Värd:                         85.30.179.54
-- Serverversion:                5.7.25-log - MySQL Community Server (GPL)
-- Server-OS:                    Win64
-- HeidiSQL Version:             10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumpar databasstruktur för auction
DROP DATABASE IF EXISTS `auction`;
CREATE DATABASE IF NOT EXISTS `auction` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `auction`;

-- Dumpar struktur för händelse auction.a183
DROP EVENT IF EXISTS `a183`;
DELIMITER //
CREATE DEFINER=`secretlogin`@`%` EVENT `a183` ON SCHEDULE AT '2019-05-22 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE auction set status = 'SOLD' WHERE itemid = 183//
DELIMITER ;

-- Dumpar struktur för händelse auction.a184
DROP EVENT IF EXISTS `a184`;
DELIMITER //
CREATE DEFINER=`secretlogin`@`%` EVENT `a184` ON SCHEDULE AT '2019-05-15 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE auction set status = 'SOLD' WHERE itemid = 184//
DELIMITER ;

-- Dumpar struktur för händelse auction.a186
DROP EVENT IF EXISTS `a186`;
DELIMITER //
CREATE DEFINER=`secretlogin`@`%` EVENT `a186` ON SCHEDULE AT '2019-05-29 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE auction set status = 'SOLD' WHERE itemid = 186//
DELIMITER ;

-- Dumpar struktur för händelse auction.a187
DROP EVENT IF EXISTS `a187`;
DELIMITER //
CREATE DEFINER=`secretlogin`@`%` EVENT `a187` ON SCHEDULE AT '2019-05-10 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE auction set status = 'SOLD' WHERE itemid = 187//
DELIMITER ;

-- Dumpar struktur för händelse auction.a188
DROP EVENT IF EXISTS `a188`;
DELIMITER //
CREATE DEFINER=`secretlogin`@`%` EVENT `a188` ON SCHEDULE AT '2019-05-04 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE auction set status = 'SOLD' WHERE itemid = 188//
DELIMITER ;

-- Dumpar struktur för händelse auction.a189
DROP EVENT IF EXISTS `a189`;
DELIMITER //
CREATE DEFINER=`secretlogin`@`%` EVENT `a189` ON SCHEDULE AT '2019-05-11 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE auction set status = 'SOLD' WHERE itemid = 189//
DELIMITER ;

-- Dumpar struktur för händelse auction.a203
DROP EVENT IF EXISTS `a203`;
DELIMITER //
CREATE DEFINER=`secretlogin`@`%` EVENT `a203` ON SCHEDULE AT '2019-05-04 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE auction set status = 'SOLD' WHERE itemid = 203//
DELIMITER ;

-- Dumpar struktur för händelse auction.a204
DROP EVENT IF EXISTS `a204`;
DELIMITER //
CREATE DEFINER=`secretlogin`@`%` EVENT `a204` ON SCHEDULE AT '2019-05-17 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE auction set status = 'SOLD' WHERE itemid = 204//
DELIMITER ;

-- Dumpar struktur för händelse auction.a205
DROP EVENT IF EXISTS `a205`;
DELIMITER //
CREATE DEFINER=`secretlogin`@`%` EVENT `a205` ON SCHEDULE AT '2019-05-30 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE auction set status = 'SOLD' WHERE itemid = 205//
DELIMITER ;

-- Dumpar struktur för tabell auction.auction
DROP TABLE IF EXISTS `auction`;
CREATE TABLE IF NOT EXISTS `auction` (
  `itemid` bigint(20) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `deadline` timestamp NULL DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `min_price` double NOT NULL,
  `sellerid` varchar(250) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`itemid`)
) ENGINE=MyISAM AUTO_INCREMENT=206 DEFAULT CHARSET=utf8mb4;

-- Dumpar data för tabell auction.auction: 11 rows
DELETE FROM `auction`;
/*!40000 ALTER TABLE `auction` DISABLE KEYS */;
INSERT INTO `auction` (`itemid`, `category`, `deadline`, `description`, `min_price`, `sellerid`, `status`, `title`) VALUES
	(184, 'Outdoors', '2019-05-15 00:00:00', 'To build your own house (made of bricks) ', 15000, 'louise@mail.dk', 'ONGOING', 'Brick'),
	(186, 'Arts and crafts', '2019-05-29 00:00:00', 'Buy some cans of paint (red paint)', 3400, 'louise@mail.dk', 'ONGOING', 'Paint'),
	(187, 'Outdoors', '2019-05-10 00:00:00', 'To dig a hole, grave or whatever ', 150, 'louise@mail.dk', 'ONGOING', 'Nice shovel '),
	(183, 'Something else', '2019-05-22 00:00:00', 'To the window, to the wall ', 1495, 'louise@mail.dk', 'ONGOING', 'Window'),
	(182, 'Something else', '2019-04-30 00:00:00', 'Brum brum', 300000, 'jo@han.se', 'SOLD', 'Ferrari'),
	(189, 'Something else', '2019-05-11 00:00:00', 'This is a tiger that you can have as a pet', 20, 'rickard@gmail.com', 'ONGOING', 'Tiger'),
	(181, 'Something else', '2019-04-30 00:00:00', 'So old much wow', 1500, 'jo@han.se', 'SOLD', 'Antique sofa'),
	(188, 'Outdoors', '2019-05-04 00:00:00', 'Very cool tent', 100, 'jo@han.se', 'ONGOING', 'Tent'),
	(180, 'Clothes', '2019-04-30 00:00:00', 'Shiny shoes', 1000, 'jo@han.se', 'SOLD', 'Shoes'),
	(204, 'Electronics', '2019-05-17 00:00:00', 'asdasds', 123, 'rickard@gmail.com', 'ONGOING', 'eads'),
	(205, NULL, '2019-05-30 00:00:00', 'dsfsd', 324, 'rickard@gmail.com', 'ONGOING', 'sdf');
/*!40000 ALTER TABLE `auction` ENABLE KEYS */;

-- Dumpar struktur för tabell auction.bid
DROP TABLE IF EXISTS `bid`;
CREATE TABLE IF NOT EXISTS `bid` (
  `bidid` bigint(20) NOT NULL AUTO_INCREMENT,
  `buyerid` varchar(255) DEFAULT NULL,
  `amount` double NOT NULL,
  `itemid` bigint(20) DEFAULT NULL,
  `highest_bid` int(11) DEFAULT '1',
  `is_read` int(11) DEFAULT '0',
  PRIMARY KEY (`bidid`)
) ENGINE=MyISAM AUTO_INCREMENT=378 DEFAULT CHARSET=utf8mb4;

-- Dumpar data för tabell auction.bid: 145 rows
DELETE FROM `bid`;
/*!40000 ALTER TABLE `bid` DISABLE KEYS */;
INSERT INTO `bid` (`bidid`, `buyerid`, `amount`, `itemid`, `highest_bid`, `is_read`) VALUES
	(233, 'rickard@gmail.com', 400, 187, 0, 1),
	(234, 'rickard@gmail.com', 500, 187, 0, 1),
	(235, 'rickard@gmail.com', 600, 187, 0, 1),
	(236, 'rickard@gmail.com', 601, 187, 0, 1),
	(237, 'rickard@gmail.com', 602, 187, 0, 1),
	(238, 'jo@han.se', 603, 187, 0, 1),
	(239, 'jo@han.se', 605, 187, 0, 1),
	(240, 'louise@mail.dk', 120, 188, 0, 1),
	(241, 'louise@mail.dk', 121, 188, 0, 1),
	(242, 'louise@mail.dk', 122, 188, 1, 1),
	(243, 'rickard@gmail.com', 123, 188, 0, 1),
	(244, 'louise@mail.dk', 124, 188, 0, 1),
	(245, 'louise@mail.dk', 125, 188, 0, 1),
	(246, 'louise@mail.dk', 126, 188, 0, 1),
	(247, 'jo@han.se', 610, 187, 0, 1),
	(248, 'jo@han.se', 3500, 186, 0, 1),
	(249, 'jo@han.se', 650, 187, 0, 1),
	(250, 'jo@han.se', 20000, 184, 0, 1),
	(251, 'jo@han.se', 1500, 183, 1, 1),
	(252, 'rickard@gmail.com', 700, 187, 0, 1),
	(253, 'rickard@gmail.com', 750, 187, 0, 1),
	(255, 'rickard@gmail.com', 756, 187, 0, 1),
	(254, 'rickard@gmail.com', 755, 187, 0, 1),
	(257, 'rickard@gmail.com', 758, 187, 0, 1),
	(256, 'rickard@gmail.com', 757, 187, 0, 1),
	(258, 'rickard@gmail.com', 759, 187, 0, 1),
	(262, 'rickard@gmail.com', 127, 188, 0, 1),
	(259, 'rickard@gmail.com', 760, 187, 0, 1),
	(260, 'rickard@gmail.com', 761, 187, 0, 1),
	(261, 'rickard@gmail.com', 762, 187, 0, 1),
	(263, 'rickard@gmail.com', 128, 188, 0, 1),
	(266, 'rickard@gmail.com', 3600, 186, 0, 1),
	(265, 'rickard@gmail.com', 764, 187, 0, 1),
	(264, 'rickard@gmail.com', 129, 188, 0, 1),
	(267, 'rickard@gmail.com', 3700, 186, 0, 1),
	(269, 'rickard@gmail.com', 766, 187, 0, 1),
	(303, 'louise@mail.dk', 131, 188, 0, 1),
	(274, 'rickard@gmail.com', 3702, 186, 1, 1),
	(268, 'rickard@gmail.com', 765, 187, 0, 1),
	(270, 'rickard@gmail.com', 768, 187, 0, 1),
	(273, 'rickard@gmail.com', 3701, 186, 0, 1),
	(271, 'rickard@gmail.com', 769, 187, 0, 1),
	(272, 'rickard@gmail.com', 770, 187, 0, 1),
	(275, 'rickard@gmail.com', 771, 187, 0, 1),
	(276, 'rickard@gmail.com', 772, 187, 0, 1),
	(277, 'rickard@gmail.com', 773, 187, 0, 1),
	(278, 'rickard@gmail.com', 774, 187, 0, 1),
	(279, 'rickard@gmail.com', 775, 187, 0, 1),
	(280, 'rickard@gmail.com', 776, 187, 0, 1),
	(281, 'rickard@gmail.com', 778, 187, 0, 1),
	(282, 'rickard@gmail.com', 779, 187, 0, 1),
	(283, 'rickard@gmail.com', 780, 187, 0, 1),
	(284, 'rickard@gmail.com', 781, 187, 0, 1),
	(285, 'rickard@gmail.com', 782, 187, 0, 1),
	(286, 'rickard@gmail.com', 783, 187, 0, 1),
	(287, 'rickard@gmail.com', 784, 187, 0, 1),
	(288, 'rickard@gmail.com', 785, 187, 0, 1),
	(290, 'rickard@gmail.com', 787, 187, 0, 1),
	(289, 'rickard@gmail.com', 786, 187, 0, 1),
	(291, 'rickard@gmail.com', 788, 187, 0, 1),
	(292, 'rickard@gmail.com', 789, 187, 0, 1),
	(295, 'rickard@gmail.com', 850, 187, 0, 1),
	(293, 'rickard@gmail.com', 790, 187, 0, 1),
	(365, 'rickard@gmail.com', 132, 188, 0, 1),
	(294, 'rickard@gmail.com', 800, 187, 0, 1),
	(296, 'rickard@gmail.com', 900, 187, 0, 1),
	(301, 'rickard@gmail.com', 1070, 187, 0, 1),
	(297, 'rickard@gmail.com', 950, 187, 0, 1),
	(298, 'rickard@gmail.com', 1000, 187, 0, 1),
	(299, 'rickard@gmail.com', 1050, 187, 0, 1),
	(300, 'rickard@gmail.com', 1060, 187, 0, 1),
	(302, 'louise@mail.dk', 130, 188, 0, 1),
	(366, 'jo@han.se', 345, 205, 0, 0),
	(305, 'rickard@gmail.com', 1090, 187, 0, 1),
	(304, 'rickard@gmail.com', 1080, 187, 0, 1),
	(306, 'rickard@gmail.com', 2000, 187, 0, 1),
	(308, 'rickard@gmail.com', 2020, 187, 0, 1),
	(307, 'rickard@gmail.com', 2010, 187, 0, 1),
	(309, 'rickard@gmail.com', 2021, 187, 0, 1),
	(310, 'rickard@gmail.com', 2022, 187, 0, 1),
	(311, 'rickard@gmail.com', 2023, 187, 0, 1),
	(313, 'rickard@gmail.com', 2025, 187, 0, 1),
	(312, 'rickard@gmail.com', 2024, 187, 0, 1),
	(314, 'jo@han.se', 330, 205, 0, 1),
	(315, 'jo@han.se', 340, 205, 0, 1),
	(316, 'Kent@Kent.Kent', 123, 204, 0, 1),
	(317, 'jo@han.se', 124, 204, 0, 1),
	(318, 'Kent@Kent.Kent', 126, 204, 0, 1),
	(319, 'jo@han.se', 127, 204, 0, 1),
	(321, 'jo@han.se', 129, 204, 0, 1),
	(320, 'Kent@Kent.Kent', 128, 204, 0, 1),
	(322, 'Kent@Kent.Kent', 130, 204, 0, 0),
	(323, 'jo@han.se', 131, 204, 0, 1),
	(324, 'jo@han.se', 132, 204, 0, 1),
	(325, 'Kent@Kent.Kent', 133, 204, 0, 0),
	(326, 'jo@han.se', 134, 204, 1, 1),
	(327, 'rickard@gmail.com', 2026, 187, 0, 1),
	(338, 'rickard@gmail.com', 2035, 187, 0, 1),
	(328, 'rickard@gmail.com', 2027, 187, 0, 1),
	(329, 'rickard@gmail.com', 2028, 187, 0, 1),
	(330, 'rickard@gmail.com', 2029, 187, 0, 1),
	(331, 'rickard@gmail.com', 2030, 187, 0, 1),
	(332, 'rickard@gmail.com', 2031, 187, 0, 1),
	(334, 'louise@mail.dk', 342, 205, 0, 1),
	(333, 'louise@mail.dk', 341, 205, 0, 1),
	(335, 'rickard@gmail.com', 2032, 187, 0, 1),
	(336, 'rickard@gmail.com', 2033, 187, 0, 1),
	(337, 'rickard@gmail.com', 2034, 187, 0, 1),
	(367, 'jo@han.se', 346, 205, 0, 0),
	(339, 'rickard@gmail.com', 2036, 187, 0, 1),
	(340, 'rickard@gmail.com', 2037, 187, 0, 1),
	(341, 'rickard@gmail.com', 2038, 187, 0, 1),
	(342, 'rickard@gmail.com', 2039, 187, 0, 1),
	(343, 'rickard@gmail.com', 2040, 187, 0, 1),
	(344, 'rickard@gmail.com', 2041, 187, 0, 1),
	(347, 'rickard@gmail.com', 2044, 187, 0, 1),
	(345, 'rickard@gmail.com', 2042, 187, 0, 1),
	(346, 'rickard@gmail.com', 2043, 187, 0, 1),
	(348, 'rickard@gmail.com', 2045, 187, 0, 1),
	(349, 'rickard@gmail.com', 2046, 187, 0, 1),
	(350, 'rickard@gmail.com', 2047, 187, 0, 1),
	(351, 'rickard@gmail.com', 2048, 187, 0, 1),
	(352, 'rickard@gmail.com', 2049, 187, 0, 1),
	(353, 'rickard@gmail.com', 2050, 187, 0, 1),
	(354, 'rickard@gmail.com', 2051, 187, 0, 1),
	(355, 'rickard@gmail.com', 2052, 187, 0, 1),
	(357, 'rickard@gmail.com', 2056, 187, 0, 1),
	(356, 'rickard@gmail.com', 2053, 187, 0, 1),
	(358, 'rickard@gmail.com', 2068, 187, 0, 1),
	(359, 'rickard@gmail.com', 3000, 187, 0, 1),
	(360, 'rickard@gmail.com', 3001, 187, 0, 1),
	(361, 'rickard@gmail.com', 3002, 187, 0, 1),
	(362, 'rickard@gmail.com', 3004, 187, 0, 1),
	(363, 'rickard@gmail.com', 3005, 187, 0, 1),
	(372, 'rickard@gmail.com', 30007, 187, 1, 1),
	(364, 'rickard@gmail.com', 200001, 184, 0, 1),
	(368, 'rickard@gmail.com', 133, 188, 0, 1),
	(369, 'jo@han.se', 348, 205, 0, 0),
	(370, 'jo@han.se', 388, 205, 0, 0),
	(371, 'rickard@gmail.com', 3006, 187, 0, 1),
	(373, 'rickard@gmail.com', 200002, 184, 0, 1),
	(374, 'rickard@gmail.com', 200004, 184, 0, 1),
	(375, 'rickard@gmail.com', 135, 188, 1, 1),
	(376, 'rickard@gmail.com', 200006, 184, 1, 1),
	(377, 'jo@han.se', 390, 205, 1, 0);
/*!40000 ALTER TABLE `bid` ENABLE KEYS */;

-- Dumpar struktur för tabell auction.hibernate_sequence
DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE IF NOT EXISTS `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- Dumpar data för tabell auction.hibernate_sequence: 1 rows
DELETE FROM `hibernate_sequence`;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` (`next_val`) VALUES
	(206);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;

-- Dumpar struktur för tabell auction.image
DROP TABLE IF EXISTS `image`;
CREATE TABLE IF NOT EXISTS `image` (
  `imgid` bigint(20) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(250) NOT NULL,
  `itemid` bigint(20) NOT NULL,
  `is_primary` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`imgid`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4;

-- Dumpar data för tabell auction.image: ~37 rows (ungefär)
DELETE FROM `image`;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` (`imgid`, `imgurl`, `itemid`, `is_primary`) VALUES
	(32, 'http://localhost:8080/img/3b20ddc8-b896-472b-9fef-688546e2c731.png', 177, '1'),
	(33, 'http://localhost:8080/img/14af6579-8dcf-440c-99c0-303a6b76dd23.png', 177, '0'),
	(34, 'http://localhost:8080/img/9e5be6f6-3248-4628-a4e0-3eaff812aff3.png', 178, '0'),
	(35, 'http://localhost:8080/img/7b1c0eb1-d413-4c66-b597-4c1c569be1c7.png', 178, '0'),
	(36, 'http://localhost:8080/img/b55883d1-4d47-41bf-8ab3-7f31180f467b.png', 178, '1'),
	(37, 'http://localhost:8080/img/dcd2a21c-df37-4dd8-ad78-2f79fea5c4f3.png', 179, '1'),
	(38, 'http://localhost:8080/img/c3386b05-5e6b-4a35-a7b4-9ef8bfbacdce.png', 179, '0'),
	(39, 'http://localhost:8080/img/6d929b67-c04b-4813-84d2-ff85a7f68bb1.png', 180, '1'),
	(40, 'http://localhost:8080/img/5fd9dd81-a803-4c50-bc5a-09f9b3963e7a.png', 180, '0'),
	(41, 'http://localhost:8080/img/948b1ef9-3ad5-4a05-aae7-c2a962310149.png', 181, '1'),
	(42, 'http://localhost:8080/img/afb351a2-e4cf-4d3a-bf6b-35ca35b92da5.png', 181, '0'),
	(43, 'http://localhost:8080/img/0408de6c-4fa9-47ec-a931-93f9cd7ae856.png', 182, '1'),
	(44, 'http://localhost:8080/img/4e4afd2b-a973-46c2-bd37-c7d1927a46b2.png', 182, '0'),
	(45, 'http://localhost:8080/img/266d57c8-225a-4a02-b07f-095f3570b2cb.png', 183, '0'),
	(46, 'http://localhost:8080/img/6bfa128b-3f16-4521-80e5-192b7a81ce54.png', 183, '1'),
	(47, 'http://localhost:8080/img/095dbdcd-c8a2-49b3-86df-d0a9febde003.png', 183, '0'),
	(48, 'http://localhost:8080/img/a5e97cd2-a2ea-485d-a70c-dee85dd8c308.png', 184, '0'),
	(49, 'http://localhost:8080/img/6d80072d-17ea-4bc6-960e-0b552d3464bb.png', 184, '1'),
	(50, 'http://localhost:8080/img/760555d6-a2cb-44cd-9177-519fd940f48f.png', 185, '0'),
	(51, 'http://localhost:8080/img/746a56cd-a94c-4deb-8fb2-9e0023ab200c.png', 184, '0'),
	(52, 'http://localhost:8080/img/d3c726f0-bd19-41b8-81d2-4a3e5ff1bc10.png', 185, '1'),
	(53, 'http://localhost:8080/img/b724d699-b372-4ca4-95f4-6106a9d4d906.png', 185, '0'),
	(54, 'http://localhost:8080/img/a9f1cdcf-cc7f-401a-9084-1e4e4528fd34.png', 186, '0'),
	(55, 'http://localhost:8080/img/8dc536a2-7f6c-4257-9bb2-9a0e3e04f721.png', 186, '1'),
	(56, 'http://localhost:8080/img/85faf833-2c4b-4217-85ab-b49ebfa238e2.png', 186, '0'),
	(57, 'http://localhost:8080/img/5947fc14-5de3-4ff6-a347-5e9c539a251b.png', 187, '0'),
	(58, 'http://localhost:8080/img/96797de8-25d0-4777-8aaf-f094236f8d9f.png', 187, '0'),
	(59, 'http://localhost:8080/img/d170e5c5-fa12-493b-bf92-7c21d6ae31d0.png', 187, '1'),
	(60, 'http://localhost:8080/img/12e95b6a-e1d7-47e7-b9d2-f62426b3c584.png', 188, '0'),
	(61, 'http://localhost:8080/img/01aba75f-e897-449a-8543-6ee68c23dde0.png', 188, '1'),
	(62, 'http://localhost:8080/img/e35b164d-5a4b-46f1-9038-3d8d440c4c6c.png', 189, '1'),
	(63, 'http://localhost:8080/img/b64f8984-5c60-4cb4-8b41-073471caf465.png', 190, '0'),
	(64, 'http://localhost:8080/img/7c9ad3ca-3db1-4a9b-8c4d-d0edbdc8cd1a.png', 190, '0'),
	(65, 'http://localhost:8080/img/cd171786-8ed0-494d-b392-49eb44aeac31.png', 190, '1'),
	(66, 'http://localhost:8080/img/bcdaa0d5-1602-471f-8034-aee49285f580.png', 203, '1'),
	(67, 'http://localhost:8080/img/b17384d1-b50f-4dc2-9123-4febf2356cdc.png', 204, '1'),
	(68, 'http://localhost:8080/img/d9f9f675-174f-41ae-bb52-9c10a4bd184a.png', 205, '1');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;

-- Dumpar struktur för tabell auction.message
DROP TABLE IF EXISTS `message`;
CREATE TABLE IF NOT EXISTS `message` (
  `messageid` bigint(20) NOT NULL AUTO_INCREMENT,
  `sender` varchar(250) DEFAULT '0',
  `reciever` varchar(250) DEFAULT '0',
  `message` varchar(255) DEFAULT NULL,
  `itemid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`messageid`)
) ENGINE=InnoDB AUTO_INCREMENT=252 DEFAULT CHARSET=utf8mb4;

-- Dumpar data för tabell auction.message: ~150 rows (ungefär)
DELETE FROM `message`;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` (`messageid`, `sender`, `reciever`, `message`, `itemid`) VALUES
	(23, 'rickard@gmail.com', 'emilia@gmail.com', 'sadasd', 175),
	(24, 'rickard@gmail.com', 'emilia@gmail.com', 'sadasds  sdfs', 175),
	(25, 'rickard@gmail.com', 'emilia@gmail.com', 'dsafsdf', 174),
	(26, 'rickard@gmail.com', 'emilia@gmail.com', 'sadf', 174),
	(78, 'rickard@gmail.com', 'emilia@gmail.com', 'Hej', 175),
	(79, 'rickard@gmail.com', 'emilia@gmail.com', 'hejsan', 175),
	(80, 'rickard@gmail.com', 'emilia@gmail.com', 'hej hopp\n', 174),
	(81, 'emilia@gmail.com', 'emilia@gmail.com', 'hejsan', 174),
	(82, 'emilia@gmail.com', 'emilia@gmail.com', 'hejsan', 174),
	(83, 'emilia@gmail.com', 'emilia@gmail.com', 'hejsan', 175),
	(84, 'emilia@gmail.com', 'emilia@gmail.com', 'hejsan', 175),
	(85, 'rickard@gmail.com', 'emilia@gmail.com', 'hej hopp\n', 175),
	(86, 'rickard@gmail.com', 'emilia@gmail.com', 'hej hopp\n', 175),
	(87, 'emilia@gmail.com', 'emilia@gmail.com', 'hejsan', 175),
	(88, 'rickard@gmail.com', 'emilia@gmail.com', 'hej hopp\n', 175),
	(89, 'emilia@gmail.com', 'emilia@gmail.com', 'hejsan', 174),
	(90, 'rickard@gmail.com', 'emilia@gmail.com', 'hej hopp\n', 174),
	(91, 'rickard@gmail.com', 'rickard@gmail.com', 'hejsan', 175),
	(92, 'rickard@gmail.com', 'rickard@gmail.com', 'hejsan12', 175),
	(95, 'rickard@gmail.com', 'jo@han.se', 'hej hopp', 176),
	(96, 'rickard@gmail.com', 'jo@han.se', 'löklök', 176),
	(97, 'rickard@gmail.com', 'jo@han.se', '', 176),
	(98, 'rickard@gmail.com', 'jo@han.se', '', 176),
	(99, 'rickard@gmail.com', 'jo@han.se', '', 176),
	(100, 'rickard@gmail.com', 'jo@han.se', 'asd', 176),
	(101, 'rickard@gmail.com', 'jo@han.se', 'sadasd', 176),
	(102, 'rickard@gmail.com', 'jo@han.se', 'asdf', 180),
	(103, 'rickard@gmail.com', 'jo@han.se', 'sadsa', 180),
	(104, 'rickard@gmail.com', 'jo@han.se', 'asdf', 180),
	(105, 'rickard@gmail.com', 'jo@han.se', 'sadf', 180),
	(106, 'rickard@gmail.com', 'jo@han.se', 'sadf', 180),
	(107, 'rickard@gmail.com', 'jo@han.se', 'sadfqsdws', 180),
	(108, 'rickard@gmail.com', 'jo@han.se', 'sadfqsdwse', 180),
	(109, 'rickard@gmail.com', 'jo@han.se', 'sadfqsdwse', 180),
	(110, 'rickard@gmail.com', 'jo@han.se', 'hej jo han', 180),
	(111, 'jo@han.se', 'jo@han.se', 'hej', 180),
	(112, 'jo@han.se', 'jo@han.se', 'hejsan', 180),
	(113, 'jo@han.se', 'jo@han.se', 'hejsan', 180),
	(114, 'jo@han.se', 'jo@han.se', 'hejsan', 180),
	(115, 'jo@han.se', 'jo@han.se', 'hejsan', 180),
	(116, 'jo@han.se', 'jo@han.se', 'vad heter du', 180),
	(117, 'jo@han.se', 'jo@han.se', 'vad heter du', 180),
	(118, 'jo@han.se', 'jo@han.se', 'vad heter du', 180),
	(119, 'rickard@gmail.com', 'jo@han.se', 'asd', 180),
	(120, 'rickard@gmail.com', 'jo@han.se', 'hui', 180),
	(121, 'rickard@gmail.com', 'jo@han.se', 'sadf', 180),
	(122, 'rickard@gmail.com', 'jo@han.se', 'test', 180),
	(123, 'jo@han.se', 'rickard@gmail.com', 'vad gör du', 180),
	(124, 'rickard@gmail.com', 'jo@han.se', 'testsdafsdafSDA\nSADFSADFSA\nFSA\nDF\nSADF', 180),
	(125, 'rickard@gmail.com', 'jo@han.se', 'testsdafsdafSDAsadfasdfsdafsadfsadf\nSADFSADFSA\nFSA\nDF\nSADF', 180),
	(126, 'rickard@gmail.com', 'jo@han.se', 'jopkjlpkolpkolpkolpkmlpkmlopmopmopkmopkmopkopkjop', 180),
	(127, 'rickard@gmail.com', 'jo@han.se', 'njknjknjkpuiiiiiiiiiiii', 179),
	(128, 'rickard@gmail.com', 'jo@han.se', 'jio', 179),
	(129, 'rickard@gmail.com', 'jo@han.se', '', 180),
	(130, 'rickard@gmail.com', 'jo@han.se', '', 180),
	(131, 'rickard@gmail.com', 'jo@han.se', 'asdsad', 180),
	(132, 'rickard@gmail.com', 'jo@han.se', 'hejsan', 180),
	(133, 'rickard@gmail.com', 'jo@han.se', 'hejsan', 180),
	(134, 'rickard@gmail.com', 'jo@han.se', 'hejsan', 180),
	(135, 'rickard@gmail.com', 'jo@han.se', 'asda', 180),
	(136, 'rickard@gmail.com', 'jo@han.se', 'sad\n', 180),
	(137, 'rickard@gmail.com', 'jo@han.se', 'asdsadsad', 180),
	(138, 'rickard@gmail.com', 'jo@han.se', 'sad', 180),
	(139, 'rickard@gmail.com', 'jo@han.se', 'asdas\n', 180),
	(140, 'rickard@gmail.com', 'jo@han.se', '\nasdasd', 180),
	(141, 'rickard@gmail.com', 'jo@han.se', '\nasdas', 180),
	(142, 'rickard@gmail.com', 'jo@han.se', '\nfgdsg', 180),
	(143, 'rickard@gmail.com', 'jo@han.se', '\nsadas', 180),
	(144, 'rickard@gmail.com', 'jo@han.se', '\nasdf', 180),
	(145, 'rickard@gmail.com', 'jo@han.se', 'sadf', 180),
	(146, 'rickard@gmail.com', 'jo@han.se', '\nfdsg', 180),
	(147, 'rickard@gmail.com', 'jo@han.se', 'nkml', 180),
	(148, 'rickard@gmail.com', 'jo@han.se', '\nmkl', 180),
	(149, 'rickard@gmail.com', 'jo@han.se', 'mkll', 180),
	(150, 'rickard@gmail.com', 'jo@han.se', '\nkml', 180),
	(151, 'rickard@gmail.com', 'jo@han.se', '\njiokl', 180),
	(152, 'rickard@gmail.com', 'jo@han.se', '\nerf', 180),
	(153, 'rickard@gmail.com', 'jo@han.se', '\ng', 180),
	(154, 'rickard@gmail.com', 'jo@han.se', '\nythgtyrjh', 180),
	(155, 'rickard@gmail.com', 'jo@han.se', '\nreger', 180),
	(156, 'rickard@gmail.com', 'jo@han.se', '\nkopsdf', 180),
	(157, 'rickard@gmail.com', 'jo@han.se', '\nbbdfg', 180),
	(158, 'rickard@gmail.com', 'jo@han.se', '\nwadsf', 180),
	(159, 'rickard@gmail.com', 'jo@han.se', '\nkoplöwe', 180),
	(160, 'rickard@gmail.com', 'jo@han.se', '\nwemk', 180),
	(161, 'rickard@gmail.com', 'jo@han.se', '\nsdfg', 180),
	(162, 'rickard@gmail.com', 'jo@han.se', '\ndfg', 180),
	(163, 'rickard@gmail.com', 'jo@han.se', '\nhej hej', 180),
	(164, 'rickard@gmail.com', 'jo@han.se', '\ngdsfg', 180),
	(165, 'rickard@gmail.com', 'jo@han.se', 'kplö', 180),
	(166, 'rickard@gmail.com', 'jo@han.se', '\nkop', 180),
	(167, 'rickard@gmail.com', 'jo@han.se', '\nkop', 180),
	(168, 'rickard@gmail.com', 'jo@han.se', '\nkop', 180),
	(169, 'rickard@gmail.com', 'jo@han.se', '\nkop', 180),
	(170, 'rickard@gmail.com', 'jo@han.se', '\nkop', 180),
	(171, 'rickard@gmail.com', 'jo@han.se', '\nkop', 180),
	(172, 'rickard@gmail.com', 'jo@han.se', '\nkop', 180),
	(173, 'rickard@gmail.com', 'jo@han.se', '\nkop', 180),
	(174, 'rickard@gmail.com', 'jo@han.se', '\nbhu', 180),
	(175, 'rickard@gmail.com', 'jo@han.se', '\nbui', 180),
	(176, 'rickard@gmail.com', 'jo@han.se', 'fsdafdsagersd', 180),
	(177, 'rickard@gmail.com', 'jo@han.se', '\nllömlö', 180),
	(178, 'rickard@gmail.com', 'jo@han.se', 'bkhbjk\n', 180),
	(179, 'rickard@gmail.com', 'jo@han.se', 'asdsa', 180),
	(180, 'rickard@gmail.com', 'jo@han.se', 'jiopjoöp', 180),
	(181, 'rickard@gmail.com', 'jo@han.se', 'hej\n', 180),
	(182, 'rickard@gmail.com', 'jo@han.se', 'hej', 180),
	(183, 'rickard@gmail.com', 'jo@han.se', 'hej', 180),
	(184, 'jo@han.se', 'rickard@gmail.com', 'hej', 180),
	(185, 'rickard@gmail.com', 'jo@han.se', 'vad gör du\n', 180),
	(186, 'rickard@gmail.com', 'jo@han.se', '\ninget', 180),
	(187, 'jo@han.se', 'rickard@gmail.com', 'jasså\n', 180),
	(188, 'rickard@gmail.com', 'jo@han.se', 'eeeeeyy', 180),
	(189, 'jo@han.se', 'rickard@gmail.com', 'alllo', 180),
	(190, 'rickard@gmail.com', 'jo@han.se', 'hno', 180),
	(191, 'rickard@gmail.com', 'jo@han.se', 'njk', 180),
	(192, 'rickard@gmail.com', 'jo@han.se', 'njk', 180),
	(193, 'rickard@gmail.com', 'jo@han.se', 'njii', 180),
	(194, 'rickard@gmail.com', 'jo@han.se', 'njo', 180),
	(195, 'rickard@gmail.com', 'jo@han.se', 'jio', 180),
	(196, 'rickard@gmail.com', 'jo@han.se', 'okl', 180),
	(197, 'rickard@gmail.com', 'jo@han.se', 'njk\n', 180),
	(198, 'jo@han.se', 'rickard@gmail.com', 'hijk\n', 180),
	(199, 'jo@han.se', 'rickard@gmail.com', '\nnkl', 180),
	(200, 'rickard@gmail.com', 'jo@han.se', 'h3ase', 180),
	(201, 'rickard@gmail.com', 'jo@han.se', 'jionik', 180),
	(202, 'rickard@gmail.com', 'jo@han.se', 'hej', 179),
	(203, 'jo@han.se', 'rickard@gmail.com', 'hej', 179),
	(204, 'jo@han.se', 'rickard@gmail.com', 'hej\n', 179),
	(205, 'jo@han.se', 'rickard@gmail.com', '\njiol', 179),
	(206, 'jo@han.se', 'rickard@gmail.com', 'mmjop', 179),
	(207, 'jo@han.se', 'rickard@gmail.com', ',lö', 179),
	(208, 'rickard@gmail.com', 'jo@han.se', 'hui', 179),
	(209, 'jo@han.se', 'rickard@gmail.com', 'bnji\n', 179),
	(210, 'rickard@gmail.com', 'jo@han.se', '\nbhjuik', 179),
	(211, 'jo@han.se', 'rickard@gmail.com', 'nkl', 180),
	(212, 'rickard@gmail.com', 'jo@han.se', 'njio', 180),
	(213, 'rickard@gmail.com', 'louise@mail.dk', 'hello m8', 187),
	(214, 'rickard@gmail.com', 'louise@mail.dk', 'what ya doin', 187),
	(215, 'rickard@gmail.com', 'louise@mail.dk', 'gretgret', 187),
	(216, 'louise@mail.dk', 'rickard@gmail.com', 'Hej', 187),
	(217, 'rickard@gmail.com', 'louise@mail.dk', 'shut uo', 187),
	(218, 'louise@mail.dk', 'rickard@gmail.com', 'what', 187),
	(219, 'rickard@gmail.com', 'louise@mail.dk', '\nup*', 187),
	(220, 'louise@mail.dk', 'rickard@gmail.com', '\nharsh', 187),
	(221, 'rickard@gmail.com', 'louise@mail.dk', '\nnioksdc', 187),
	(222, 'louise@mail.dk', 'rickard@gmail.com', 'Tillykke\n', 187),
	(223, 'rickard@gmail.com', 'louise@mail.dk', 'mange taaak', 187),
	(224, 'louise@mail.dk', 'rickard@gmail.com', '\nSå dansk ', 187),
	(225, 'louise@mail.dk', 'rickard@gmail.com', '\nRød grød med fløde ', 187),
	(226, 'rickard@gmail.com', 'jo@han.se', 'hej', 180),
	(227, 'jo@han.se', 'rickard@gmail.com', 'hejsan', 180),
	(228, 'rickard@gmail.com', 'jo@han.se', 'vad gör du?\n', 180),
	(229, 'rickard@gmail.com', 'jo@han.se', 'gurkan\n', 180),
	(230, 'rickard@gmail.com', 'jo@han.se', 'hej\n', 180),
	(231, 'rickard@gmail.com', 'louise@mail.dk', 'Hej vad är detta för färg?\n', 186),
	(232, 'rickard@gmail.com', 'louise@mail.dk', 'Kan du svara mig , vilken färg färgen e ?', 186),
	(233, 'louise@mail.dk', 'rickard@gmail.com', 'den e röd tror jag', 186),
	(234, 'rickard@gmail.com', 'louise@mail.dk', 'e du säker? den ser grön ut\n', 186),
	(235, 'louise@mail.dk', 'rickard@gmail.com', '\njag är 100% säker', 186),
	(236, 'rickard@gmail.com', 'louise@mail.dk', 'jag tror inte dig \n', 186),
	(237, 'rickard@gmail.com', 'louise@mail.dk', '\nbuhhh', 186),
	(238, 'rickard@gmail.com', 'louise@mail.dk', 'hej hej', 187),
	(239, 'louise@mail.dk', 'rickard@gmail.com', '', 187),
	(240, 'jo@han.se', 'rickard@gmail.com', 'WHy you sell babies', 204),
	(241, 'rickard@gmail.com', 'jo@han.se', 'becuse i want to', 204),
	(242, 'jo@han.se', 'rickard@gmail.com', 'okay then', 204),
	(243, 'rickard@gmail.com', 'jo@han.se', 'heeej', 204),
	(244, 'jo@han.se', 'rickard@gmail.com', 'hej', 204),
	(245, 'jo@han.se', 'rickard@gmail.com', '\nasddsaf', 204),
	(246, 'jo@han.se', 'rickard@gmail.com', '\nasdfsda', 204),
	(247, 'jo@han.se', 'rickard@gmail.com', '\nfsda', 204),
	(248, 'jo@han.se', 'rickard@gmail.com', '\nfsda', 204),
	(249, 'jo@han.se', 'rickard@gmail.com', '\nfsda', 204),
	(250, 'jo@han.se', 'rickard@gmail.com', '\nfsda', 204),
	(251, 'jo@han.se', 'rickard@gmail.com', '\nfsda', 204);
/*!40000 ALTER TABLE `message` ENABLE KEYS */;

-- Dumpar struktur för tabell auction.test
DROP TABLE IF EXISTS `test`;
CREATE TABLE IF NOT EXISTS `test` (
  `id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumpar data för tabell auction.test: ~0 rows (ungefär)
DELETE FROM `test`;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` (`id`) VALUES
	(1);
/*!40000 ALTER TABLE `test` ENABLE KEYS */;

-- Dumpar struktur för procedur auction.updateBidStatus
DROP PROCEDURE IF EXISTS `updateBidStatus`;
DELIMITER //
CREATE DEFINER=`secretlogin`@`%` PROCEDURE `updateBidStatus`(
	IN `item_id` BIGINT
,
	OUT `bid_id` BIGINT
)
BEGIN
SET bid_id = (SELECT bidid FROM bid WHERE itemid = item_id ORDER BY amount DESC LIMIT 1,1);

UPDATE bid SET bid.`highest_bid` = 0 WHERE bidid = bid_id;
END//
DELIMITER ;

-- Dumpar struktur för tabell auction.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `mail` varchar(250) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`mail`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- Dumpar data för tabell auction.user: 11 rows
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`first_name`, `last_name`, `mail`, `password`) VALUES
	('Louise ', 'Sahlström', 'louise@mail.dk', '$2a$10$jHG/gKDSIfjkWptJLKA6rO3KrLkaQfZMSUDys5dk9QUKrhpW3W4Ka'),
	('Rickard', 'Andersson', 'rickard@gmail.com', '$2a$10$TAMpWYufy3gOK1Y6NglBn.ZY18kCiMhz.uUM9IMkPbjaNL/hJ.Bfe'),
	('Rickard', 'Andersson', 'rickard.andersson98@gmail.com', '$2a$10$lZ2YYxI7v/lv6mm0FhtwAuST0O.w3NNwSrzymGUmYOs2q0K4cDcVq'),
	('Rickard', 'Andersson', 'rickard.andersson98@gmail.com2', '$2a$10$vKAKaf.b/mXEwQaqssTYKeD39JJqGa0Lo1bit7.1TGxCte.rMmWvm'),
	('saasd', 'sad', 'sadsa@sad.sad', '$2a$10$R.Vw6iSxfW0BBNEO0v7YTuiNiCqSarnEpMvBtaGvEyG7vmlcz9EsS'),
	('Rickard', 'Andersson', 'rickard.andersson918@gmail.com', '$2a$10$TjsPzTdo/WUbiM/DDWqHDeAXxk7lUIGNzJAhh3p0jK1hjLMYMEOMG'),
	('jo', 'han', 'jo@han.se', '$2a$10$Ylo8ZZcZFdGXGw0Vp8xYKulSssD/whzdHdN/HjT9wXOirEi90VFoK'),
	('nisse', 'a', 'nisse@gmail.com', '$2a$10$5iXGkBBrhKNjVIoYyPwiLup263OrOUL4H8DmzS.y7lglxoXDt/tyW'),
	('Emilia', 'F', 'emilia@gmail.com', '$2a$10$Pr9r.IUOyGXVeM7lJms1iOaXgzRprl9U1MA3OWuGpuu6DvoyZ5yTC'),
	('Kent', 'Kent', 'Kent@Kent.Kent', '$2a$10$637AE0xi.WN8FZ/StyAqu.Z3FXDxEmyyrYP.1usM93mq6twiRxZDO'),
	('Rickard', 'asdas', 'hej@hej.hej', '$2a$10$ypjDUoZjQPbKfDl4K34sK.SAkEMngKS4TWr/k6bUK4BzRUgTtE.7.');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

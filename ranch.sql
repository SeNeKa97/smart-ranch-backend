-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: rnch
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `boards`
--

DROP TABLE IF EXISTS `boards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `boards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `serial` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boards`
--

LOCK TABLES `boards` WRITE;
/*!40000 ALTER TABLE `boards` DISABLE KEYS */;
INSERT INTO `boards` VALUES (2,'Well, my first arduinka','12e4ab670d'),(3,'Test arduino board','abc456dea7');
/*!40000 ALTER TABLE `boards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `localpresets`
--

DROP TABLE IF EXISTS `localpresets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `localpresets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idType` int(11) NOT NULL,
  `idBoard` int(11) NOT NULL,
  `value` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idType` (`idType`),
  KEY `idBoard` (`idBoard`),
  CONSTRAINT `localpresets_ibfk_1` FOREIGN KEY (`idType`) REFERENCES `measurementtypes` (`id`) ON DELETE CASCADE,
  CONSTRAINT `localpresets_ibfk_2` FOREIGN KEY (`idBoard`) REFERENCES `boards` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localpresets`
--

LOCK TABLES `localpresets` WRITE;
/*!40000 ALTER TABLE `localpresets` DISABLE KEYS */;
/*!40000 ALTER TABLE `localpresets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `measurements`
--

DROP TABLE IF EXISTS `measurements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `measurements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idType` int(11) NOT NULL,
  `idBoard` int(11) NOT NULL,
  `timestamp` datetime NOT NULL,
  `value` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idType` (`idType`),
  KEY `idBoard` (`idBoard`),
  CONSTRAINT `measurements_ibfk_1` FOREIGN KEY (`idType`) REFERENCES `measurementtypes` (`id`) ON DELETE CASCADE,
  CONSTRAINT `measurements_ibfk_2` FOREIGN KEY (`idBoard`) REFERENCES `boards` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=551 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `measurements`
--

LOCK TABLES `measurements` WRITE;
/*!40000 ALTER TABLE `measurements` DISABLE KEYS */;
INSERT INTO `measurements` VALUES (251,2,2,'2019-06-08 11:22:35',24),(252,3,2,'2019-06-08 11:22:35',65),(253,4,2,'2019-06-08 11:22:35',68.5),(254,5,2,'2019-06-08 11:22:35',60),(255,6,2,'2019-06-08 11:22:35',20),(256,2,2,'2019-06-08 11:22:35',24),(257,3,2,'2019-06-08 11:22:35',65),(258,4,2,'2019-06-08 11:22:35',68.5),(259,5,2,'2019-06-08 11:22:35',60),(260,6,2,'2019-06-08 11:22:35',20),(261,2,2,'2019-06-08 11:22:35',24),(262,3,2,'2019-06-08 11:22:35',65),(263,4,2,'2019-06-08 11:22:35',68.5),(264,5,2,'2019-06-08 11:22:35',60),(265,6,2,'2019-06-08 11:22:35',20),(266,2,2,'2019-06-08 11:22:36',24),(267,3,2,'2019-06-08 11:22:36',65),(268,4,2,'2019-06-08 11:22:36',68.5),(269,5,2,'2019-06-08 11:22:36',60),(270,6,2,'2019-06-08 11:22:36',20),(271,2,2,'2019-06-08 11:22:36',24),(272,3,2,'2019-06-08 11:22:36',65),(273,4,2,'2019-06-08 11:22:36',68.5),(274,5,2,'2019-06-08 11:22:36',60),(275,6,2,'2019-06-08 11:22:36',20),(276,2,2,'2019-06-08 11:22:36',24),(277,3,2,'2019-06-08 11:22:36',65),(278,4,2,'2019-06-08 11:22:36',68.5),(279,5,2,'2019-06-08 11:22:36',60),(280,6,2,'2019-06-08 11:22:36',20),(281,2,2,'2019-06-08 11:22:36',24),(282,3,2,'2019-06-08 11:22:36',65),(283,4,2,'2019-06-08 11:22:36',68.5),(284,5,2,'2019-06-08 11:22:36',60),(285,6,2,'2019-06-08 11:22:36',20),(286,2,2,'2019-06-08 11:22:36',24),(287,3,2,'2019-06-08 11:22:36',65),(288,4,2,'2019-06-08 11:22:36',68.5),(289,5,2,'2019-06-08 11:22:36',60),(290,6,2,'2019-06-08 11:22:36',20),(291,2,2,'2019-06-08 11:22:36',24),(292,3,2,'2019-06-08 11:22:36',65),(293,4,2,'2019-06-08 11:22:36',68.5),(294,5,2,'2019-06-08 11:22:36',60),(295,6,2,'2019-06-08 11:22:36',20),(296,2,2,'2019-06-08 11:22:36',24),(297,3,2,'2019-06-08 11:22:36',65),(298,4,2,'2019-06-08 11:22:36',68.5),(299,5,2,'2019-06-08 11:22:36',60),(300,6,2,'2019-06-08 11:22:36',20),(301,2,2,'2019-06-08 11:22:36',24),(302,3,2,'2019-06-08 11:22:36',65),(303,4,2,'2019-06-08 11:22:36',68.5),(304,5,2,'2019-06-08 11:22:36',60),(305,6,2,'2019-06-08 11:22:36',20),(306,2,2,'2019-06-08 11:22:36',24),(307,3,2,'2019-06-08 11:22:36',65),(308,4,2,'2019-06-08 11:22:36',68.5),(309,5,2,'2019-06-08 11:22:36',60),(310,6,2,'2019-06-08 11:22:36',20),(311,2,2,'2019-06-08 11:22:37',24),(312,3,2,'2019-06-08 11:22:37',65),(313,4,2,'2019-06-08 11:22:37',68.5),(314,5,2,'2019-06-08 11:22:37',60),(315,6,2,'2019-06-08 11:22:37',20),(316,2,2,'2019-06-08 11:22:37',24),(317,3,2,'2019-06-08 11:22:37',65),(318,4,2,'2019-06-08 11:22:37',68.5),(319,5,2,'2019-06-08 11:22:37',60),(320,6,2,'2019-06-08 11:22:37',20),(321,2,2,'2019-06-08 11:22:37',24),(322,3,2,'2019-06-08 11:22:37',65),(323,4,2,'2019-06-08 11:22:37',68.5),(324,5,2,'2019-06-08 11:22:37',60),(325,6,2,'2019-06-08 11:22:37',20),(326,2,2,'2019-06-08 11:22:37',24),(327,3,2,'2019-06-08 11:22:37',65),(328,4,2,'2019-06-08 11:22:37',68.5),(329,5,2,'2019-06-08 11:22:37',60),(330,6,2,'2019-06-08 11:22:37',20),(331,2,2,'2019-06-08 11:22:37',24),(332,3,2,'2019-06-08 11:22:37',65),(333,4,2,'2019-06-08 11:22:37',68.5),(334,5,2,'2019-06-08 11:22:37',60),(335,6,2,'2019-06-08 11:22:37',20),(336,2,2,'2019-06-08 11:22:37',24),(337,3,2,'2019-06-08 11:22:37',65),(338,4,2,'2019-06-08 11:22:37',68.5),(339,5,2,'2019-06-08 11:22:37',60),(340,6,2,'2019-06-08 11:22:37',20),(341,2,2,'2019-06-08 11:22:37',24),(342,3,2,'2019-06-08 11:22:37',65),(343,4,2,'2019-06-08 11:22:37',68.5),(344,5,2,'2019-06-08 11:22:37',60),(345,6,2,'2019-06-08 11:22:37',20),(346,2,2,'2019-06-08 11:22:37',24),(347,3,2,'2019-06-08 11:22:37',65),(348,4,2,'2019-06-08 11:22:37',68.5),(349,5,2,'2019-06-08 11:22:37',60),(350,6,2,'2019-06-08 11:22:37',20),(351,2,2,'2019-06-08 11:22:46',24),(352,3,2,'2019-06-08 11:22:46',65),(353,4,2,'2019-06-08 11:22:46',68.5),(354,5,2,'2019-06-08 11:22:46',60),(355,6,2,'2019-06-08 11:22:46',20),(356,2,2,'2019-06-08 11:22:47',24),(357,3,2,'2019-06-08 11:22:47',65),(358,4,2,'2019-06-08 11:22:47',68.5),(359,5,2,'2019-06-08 11:22:47',60),(360,6,2,'2019-06-08 11:22:47',20),(361,2,2,'2019-06-08 11:22:47',24),(362,3,2,'2019-06-08 11:22:47',65),(363,4,2,'2019-06-08 11:22:47',68.5),(364,5,2,'2019-06-08 11:22:47',60),(365,6,2,'2019-06-08 11:22:47',20),(366,2,2,'2019-06-08 11:22:47',24),(367,3,2,'2019-06-08 11:22:47',65),(368,4,2,'2019-06-08 11:22:47',68.5),(369,5,2,'2019-06-08 11:22:47',60),(370,6,2,'2019-06-08 11:22:47',20),(371,2,2,'2019-06-08 11:22:47',24),(372,3,2,'2019-06-08 11:22:47',65),(373,4,2,'2019-06-08 11:22:47',68.5),(374,5,2,'2019-06-08 11:22:47',60),(375,6,2,'2019-06-08 11:22:47',20),(376,2,2,'2019-06-08 11:22:47',24),(377,3,2,'2019-06-08 11:22:47',65),(378,4,2,'2019-06-08 11:22:47',68.5),(379,5,2,'2019-06-08 11:22:47',60),(380,6,2,'2019-06-08 11:22:47',20),(381,2,2,'2019-06-08 11:22:48',24),(382,3,2,'2019-06-08 11:22:48',65),(383,4,2,'2019-06-08 11:22:48',68.5),(384,5,2,'2019-06-08 11:22:48',60),(385,6,2,'2019-06-08 11:22:48',20),(386,2,2,'2019-06-08 11:22:48',24),(387,3,2,'2019-06-08 11:22:48',65),(388,4,2,'2019-06-08 11:22:48',68.5),(389,5,2,'2019-06-08 11:22:48',60),(390,6,2,'2019-06-08 11:22:48',20),(391,2,2,'2019-06-08 11:22:48',24),(392,3,2,'2019-06-08 11:22:48',65),(393,4,2,'2019-06-08 11:22:48',68.5),(394,5,2,'2019-06-08 11:22:48',60),(395,6,2,'2019-06-08 11:22:48',20),(396,2,2,'2019-06-08 11:22:48',24),(397,3,2,'2019-06-08 11:22:48',65),(398,4,2,'2019-06-08 11:22:48',68.5),(399,5,2,'2019-06-08 11:22:48',60),(400,6,2,'2019-06-08 11:22:48',20),(401,2,2,'2019-06-08 11:22:48',24),(402,3,2,'2019-06-08 11:22:48',65),(403,4,2,'2019-06-08 11:22:48',68.5),(404,5,2,'2019-06-08 11:22:48',60),(405,6,2,'2019-06-08 11:22:48',20),(406,2,2,'2019-06-08 11:22:48',24),(407,3,2,'2019-06-08 11:22:48',65),(408,4,2,'2019-06-08 11:22:48',68.5),(409,5,2,'2019-06-08 11:22:48',60),(410,6,2,'2019-06-08 11:22:48',20),(411,2,2,'2019-06-08 11:22:48',24),(412,3,2,'2019-06-08 11:22:48',65),(413,4,2,'2019-06-08 11:22:48',68.5),(414,5,2,'2019-06-08 11:22:48',60),(415,6,2,'2019-06-08 11:22:48',20),(416,2,2,'2019-06-08 11:22:48',24),(417,3,2,'2019-06-08 11:22:48',65),(418,4,2,'2019-06-08 11:22:48',68.5),(419,5,2,'2019-06-08 11:22:48',60),(420,6,2,'2019-06-08 11:22:48',20),(421,2,2,'2019-06-08 11:22:48',24),(422,3,2,'2019-06-08 11:22:48',65),(423,4,2,'2019-06-08 11:22:48',68.5),(424,5,2,'2019-06-08 11:22:48',60),(425,6,2,'2019-06-08 11:22:48',20),(426,2,2,'2019-06-08 11:22:48',24),(427,3,2,'2019-06-08 11:22:48',65),(428,4,2,'2019-06-08 11:22:48',68.5),(429,5,2,'2019-06-08 11:22:48',60),(430,6,2,'2019-06-08 11:22:48',20),(431,2,2,'2019-06-08 11:22:49',24),(432,3,2,'2019-06-08 11:22:49',65),(433,4,2,'2019-06-08 11:22:49',68.5),(434,5,2,'2019-06-08 11:22:49',60),(435,6,2,'2019-06-08 11:22:49',20),(436,2,2,'2019-06-08 11:22:49',24),(437,3,2,'2019-06-08 11:22:49',65),(438,4,2,'2019-06-08 11:22:49',68.5),(439,5,2,'2019-06-08 11:22:49',60),(440,6,2,'2019-06-08 11:22:49',20),(441,2,2,'2019-06-08 11:22:49',24),(442,3,2,'2019-06-08 11:22:49',65),(443,4,2,'2019-06-08 11:22:49',68.5),(444,5,2,'2019-06-08 11:22:49',60),(445,6,2,'2019-06-08 11:22:49',20),(446,2,2,'2019-06-08 11:22:49',24),(447,3,2,'2019-06-08 11:22:49',65),(448,4,2,'2019-06-08 11:22:49',68.5),(449,5,2,'2019-06-08 11:22:49',60),(450,6,2,'2019-06-08 11:22:49',20),(451,2,2,'2019-06-08 11:23:03',24),(452,3,2,'2019-06-08 11:23:03',65),(453,4,2,'2019-06-08 11:23:03',68.5),(454,5,2,'2019-06-08 11:23:03',60),(455,6,2,'2019-06-08 11:23:03',20),(456,2,2,'2019-06-08 11:23:03',24),(457,3,2,'2019-06-08 11:23:03',65),(458,4,2,'2019-06-08 11:23:03',68.5),(459,5,2,'2019-06-08 11:23:03',60),(460,6,2,'2019-06-08 11:23:03',20),(461,2,2,'2019-06-08 11:23:04',24),(462,3,2,'2019-06-08 11:23:04',65),(463,4,2,'2019-06-08 11:23:04',68.5),(464,5,2,'2019-06-08 11:23:04',60),(465,6,2,'2019-06-08 11:23:04',20),(466,2,2,'2019-06-08 11:23:04',24),(467,3,2,'2019-06-08 11:23:04',65),(468,4,2,'2019-06-08 11:23:04',68.5),(469,5,2,'2019-06-08 11:23:04',60),(470,6,2,'2019-06-08 11:23:04',20),(471,2,2,'2019-06-08 11:23:04',24),(472,3,2,'2019-06-08 11:23:04',65),(473,4,2,'2019-06-08 11:23:04',68.5),(474,5,2,'2019-06-08 11:23:04',60),(475,6,2,'2019-06-08 11:23:04',20),(476,2,2,'2019-06-08 11:23:04',24),(477,3,2,'2019-06-08 11:23:04',65),(478,4,2,'2019-06-08 11:23:04',68.5),(479,5,2,'2019-06-08 11:23:04',60),(480,6,2,'2019-06-08 11:23:04',20),(481,2,2,'2019-06-08 11:23:04',24),(482,3,2,'2019-06-08 11:23:04',65),(483,4,2,'2019-06-08 11:23:04',68.5),(484,5,2,'2019-06-08 11:23:04',60),(485,6,2,'2019-06-08 11:23:04',20),(486,2,2,'2019-06-08 11:23:04',24),(487,3,2,'2019-06-08 11:23:04',65),(488,4,2,'2019-06-08 11:23:04',68.5),(489,5,2,'2019-06-08 11:23:04',60),(490,6,2,'2019-06-08 11:23:04',20),(491,2,2,'2019-06-08 11:23:04',24),(492,3,2,'2019-06-08 11:23:04',65),(493,4,2,'2019-06-08 11:23:04',68.5),(494,5,2,'2019-06-08 11:23:04',60),(495,6,2,'2019-06-08 11:23:04',20),(496,2,2,'2019-06-08 11:23:04',24),(497,3,2,'2019-06-08 11:23:04',65),(498,4,2,'2019-06-08 11:23:04',68.5),(499,5,2,'2019-06-08 11:23:04',60),(500,6,2,'2019-06-08 11:23:04',20),(501,2,2,'2019-06-08 11:23:04',24),(502,3,2,'2019-06-08 11:23:04',65),(503,4,2,'2019-06-08 11:23:04',68.5),(504,5,2,'2019-06-08 11:23:04',60),(505,6,2,'2019-06-08 11:23:04',20),(506,2,2,'2019-06-08 11:23:05',24),(507,3,2,'2019-06-08 11:23:05',65),(508,4,2,'2019-06-08 11:23:05',68.5),(509,5,2,'2019-06-08 11:23:05',60),(510,6,2,'2019-06-08 11:23:05',20),(511,2,2,'2019-06-08 11:23:05',24),(512,3,2,'2019-06-08 11:23:05',65),(513,4,2,'2019-06-08 11:23:05',68.5),(514,5,2,'2019-06-08 11:23:05',60),(515,6,2,'2019-06-08 11:23:05',20),(516,2,2,'2019-06-08 11:23:05',24),(517,3,2,'2019-06-08 11:23:05',65),(518,4,2,'2019-06-08 11:23:05',68.5),(519,5,2,'2019-06-08 11:23:05',60),(520,6,2,'2019-06-08 11:23:05',20),(521,2,2,'2019-06-08 11:23:05',24),(522,3,2,'2019-06-08 11:23:05',65),(523,4,2,'2019-06-08 11:23:05',68.5),(524,5,2,'2019-06-08 11:23:05',60),(525,6,2,'2019-06-08 11:23:05',20),(526,2,2,'2019-06-08 11:23:05',24),(527,3,2,'2019-06-08 11:23:05',65),(528,4,2,'2019-06-08 11:23:05',68.5),(529,5,2,'2019-06-08 11:23:05',60),(530,6,2,'2019-06-08 11:23:05',20),(531,2,2,'2019-06-08 11:23:05',24),(532,3,2,'2019-06-08 11:23:05',65),(533,4,2,'2019-06-08 11:23:05',68.5),(534,5,2,'2019-06-08 11:23:05',60),(535,6,2,'2019-06-08 11:23:05',20),(536,2,2,'2019-06-08 11:23:05',24),(537,3,2,'2019-06-08 11:23:05',65),(538,4,2,'2019-06-08 11:23:05',68.5),(539,5,2,'2019-06-08 11:23:05',60),(540,6,2,'2019-06-08 11:23:05',20),(541,2,2,'2019-06-08 11:23:05',24),(542,3,2,'2019-06-08 11:23:05',65),(543,4,2,'2019-06-08 11:23:05',68.5),(544,5,2,'2019-06-08 11:23:05',60),(545,6,2,'2019-06-08 11:23:05',20),(546,2,2,'2019-06-08 11:23:05',24),(547,3,2,'2019-06-08 11:23:05',65),(548,4,2,'2019-06-08 11:23:05',68.5),(549,5,2,'2019-06-08 11:23:05',60),(550,6,2,'2019-06-08 11:23:05',20);
/*!40000 ALTER TABLE `measurements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `measurementtypes`
--

DROP TABLE IF EXISTS `measurementtypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `measurementtypes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `measurementtypes`
--

LOCK TABLES `measurementtypes` WRITE;
/*!40000 ALTER TABLE `measurementtypes` DISABLE KEYS */;
INSERT INTO `measurementtypes` VALUES (2,'temperature'),(3,'humidity'),(4,'luminosity'),(5,'water_level'),(6,'food_level'),(7,'waste');
/*!40000 ALTER TABLE `measurementtypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `presets`
--

DROP TABLE IF EXISTS `presets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `presets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idType` int(11) NOT NULL,
  `value` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idType` (`idType`),
  CONSTRAINT `presets_ibfk_1` FOREIGN KEY (`idType`) REFERENCES `measurementtypes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `presets`
--

LOCK TABLES `presets` WRITE;
/*!40000 ALTER TABLE `presets` DISABLE KEYS */;
INSERT INTO `presets` VALUES (1,2,7),(2,2,15),(3,3,65),(4,3,90),(5,4,50),(6,4,70),(7,5,40),(8,5,100),(9,6,26),(10,6,100),(11,7,14400);
/*!40000 ALTER TABLE `presets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `level` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Unauthorized',0),(2,'Authorized',1),(3,'Admin',2);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rooms`
--

DROP TABLE IF EXISTS `rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `rooms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idBoard` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idBoard` (`idBoard`),
  CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`idBoard`) REFERENCES `boards` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20190606100303-create-measurement-type.js'),('20190606100318-create-board.js'),('20190606100326-create-measurement.js'),('20190606100333-create-room.js'),('20190606100340-create-preset.js'),('20190606100347-create-local-preset.js'),('20190606112142-create-user.js'),('20190606112143-create-role.js'),('20190606112145-create-user.js'),('20190606112150-create-token.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tokens`
--

DROP TABLE IF EXISTS `tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idUser` int(11) NOT NULL,
  `value` varchar(255) NOT NULL,
  `expirationDate` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idUser` (`idUser`),
  CONSTRAINT `tokens_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
INSERT INTO `tokens` VALUES (8,1,'ddd549c328d2b5','2019-06-10 19:18:27'),(10,3,'ddd549c328d43a','2020-09-12 22:00:05');
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `passwordHash` varchar(255) NOT NULL,
  `lastActivity` datetime DEFAULT NULL,
  `idRole` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idRole` (`idRole`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Bogdan','e72368f686a48265ad777ad8235d4b4f',NULL,3),(3,'Seneka','e72368f686a48265ad777ad8235d4b4f',NULL,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-09 18:49:14

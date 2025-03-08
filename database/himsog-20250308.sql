CREATE DATABASE  IF NOT EXISTS "himsog" /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `himsog`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: mysql3800e8f2-ipos-test-d989.c.aivencloud.com    Database: himsog
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '161967fa-e224-11ef-9391-86380cf227a1:1-3297,
e72eb28c-d8ac-11ef-8bdd-72a2643a81d3:1-1857';

--
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointment` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `UserId` int NOT NULL,
  `NutritionistId` int NOT NULL,
  `Schedule` datetime NOT NULL,
  `Status` varchar(45) NOT NULL,
  `Remarks` varchar(255) NOT NULL,
  `CreatedBy` int NOT NULL,
  `DateCreated` datetime NOT NULL,
  `UpdatedBy` int DEFAULT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(255) NOT NULL,
  `Description` text,
  `DatePosted` datetime NOT NULL,
  `PostedBy` varchar(255) NOT NULL,
  `Image` text,
  `IsValidated` tinyint NOT NULL,
  `DateCreated` datetime NOT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `certificate`
--

DROP TABLE IF EXISTS `certificate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `certificate` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `ProfessionId` int NOT NULL,
  `Name` varchar(255) NOT NULL,
  `IssuedTo` varchar(255) NOT NULL,
  `Issuer` varchar(255) NOT NULL,
  `ExpiryDate` datetime NOT NULL,
  `CertificateType` varchar(255) NOT NULL,
  `CertificateNumber` varchar(255) NOT NULL,
  `AttachmentURL` text,
  `DateCreated` datetime NOT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `CertificateNumber_UNIQUE` (`CertificateNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certificate`
--

LOCK TABLES `certificate` WRITE;
/*!40000 ALTER TABLE `certificate` DISABLE KEYS */;
INSERT INTO `certificate` VALUES (3,1,'Certificate Name','Ace D. Portgas','Department of Health','2025-05-05 10:10:10','Certificate of Completion','19925775','https://www.youtube.com/shorts/SXHMnicI6Pg','2025-03-04 14:00:27','2025-03-05 19:29:58'),(5,1,'Certificate Name','Ace D. Portgas','World Government','1998-01-01 10:10:10','Professional Certificate','1666547','https://www.youtube.com/shorts/SXHMnicI6Pg','2025-03-05 13:48:42','2025-03-05 19:30:06');
/*!40000 ALTER TABLE `certificate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(255) NOT NULL,
  `Description` text,
  `Category` varchar(255) NOT NULL,
  `Type` varchar(255) NOT NULL,
  `Schedule` datetime NOT NULL,
  `Location` varchar(255) NOT NULL,
  `Image` text,
  `RegistrationLink` text,
  `IsValidated` tinyint NOT NULL,
  `DateCreated` datetime NOT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `UserId` int NOT NULL,
  `Type` varchar(50) NOT NULL,
  `MealPlanId` int DEFAULT NULL,
  `Remarks` varchar(255) DEFAULT NULL,
  `Rating` decimal(18,2) NOT NULL,
  `CreatedBy` int NOT NULL,
  `DateCreated` datetime NOT NULL,
  `UpdatedBy` int DEFAULT NULL,
  `DateUpdateed` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `health`
--

DROP TABLE IF EXISTS `health`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `health` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `UserId` int NOT NULL,
  `Weight` decimal(18,2) NOT NULL,
  `Height` decimal(18,2) NOT NULL,
  `FitnessGoal` varchar(255) NOT NULL,
  `ActivityLevel` varchar(255) NOT NULL,
  `PrimaryDiet` varchar(255) NOT NULL,
  `DateCreated` datetime NOT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `health`
--

LOCK TABLES `health` WRITE;
/*!40000 ALTER TABLE `health` DISABLE KEYS */;
INSERT INTO `health` VALUES (2,5,60.00,167.00,'lose fat','light_activity','vegetarian','2025-03-03 16:00:21','2025-03-04 03:44:44'),(3,8,60.00,167.00,'lose fat','sedentary','vegan','2025-03-04 10:01:06','2025-03-05 10:50:14');
/*!40000 ALTER TABLE `health` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `health_condition`
--

DROP TABLE IF EXISTS `health_condition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `health_condition` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `HealthId` int NOT NULL,
  `Category` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `DateCreated` datetime NOT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `health_condition`
--

LOCK TABLES `health_condition` WRITE;
/*!40000 ALTER TABLE `health_condition` DISABLE KEYS */;
/*!40000 ALTER TABLE `health_condition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredient`
--

DROP TABLE IF EXISTS `ingredient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingredient` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `UnitId` int NOT NULL,
  `Category` varchar(255) NOT NULL,
  `CreatedBy` int NOT NULL,
  `DateCreated` datetime NOT NULL,
  `UpdatedBy` int DEFAULT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredient`
--

LOCK TABLES `ingredient` WRITE;
/*!40000 ALTER TABLE `ingredient` DISABLE KEYS */;
INSERT INTO `ingredient` VALUES (2,'Ginger','Zingiber',11,'vegetables',1,'2025-03-05 16:49:55',NULL,NULL);
/*!40000 ALTER TABLE `ingredient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meal`
--

DROP TABLE IF EXISTS `meal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meal` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Type` varchar(100) NOT NULL,
  `CreatedBy` int NOT NULL,
  `DateCreated` datetime NOT NULL,
  `UpdatedBy` int DEFAULT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meal`
--

LOCK TABLES `meal` WRITE;
/*!40000 ALTER TABLE `meal` DISABLE KEYS */;
/*!40000 ALTER TABLE `meal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meal_plan`
--

DROP TABLE IF EXISTS `meal_plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meal_plan` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `UserId` int NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Type` varchar(255) NOT NULL,
  `DateCreated` datetime NOT NULL,
  `DateUpdate` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meal_plan`
--

LOCK TABLES `meal_plan` WRITE;
/*!40000 ALTER TABLE `meal_plan` DISABLE KEYS */;
/*!40000 ALTER TABLE `meal_plan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meal_plan_line`
--

DROP TABLE IF EXISTS `meal_plan_line`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meal_plan_line` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `MealPlanId` int NOT NULL,
  `MealId` int NOT NULL,
  `DateCreated` datetime NOT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meal_plan_line`
--

LOCK TABLES `meal_plan_line` WRITE;
/*!40000 ALTER TABLE `meal_plan_line` DISABLE KEYS */;
/*!40000 ALTER TABLE `meal_plan_line` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meal_plan_request`
--

DROP TABLE IF EXISTS `meal_plan_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meal_plan_request` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `UserId` int NOT NULL,
  `NutritionistId` int NOT NULL,
  `Duration` int NOT NULL,
  `Remarks` text NOT NULL,
  `IsCustom` tinyint NOT NULL,
  `MealPlanRecipeId` int DEFAULT NULL,
  `Status` varchar(45) NOT NULL,
  `CreatedBy` int NOT NULL,
  `DateCreated` datetime NOT NULL,
  `UpdatedBy` int DEFAULT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meal_plan_request`
--

LOCK TABLES `meal_plan_request` WRITE;
/*!40000 ALTER TABLE `meal_plan_request` DISABLE KEYS */;
/*!40000 ALTER TABLE `meal_plan_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `UserId` int NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Link` varchar(255) NOT NULL,
  `IsRead` tinyint NOT NULL,
  `DateCreate` datetime NOT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nutrition_fact`
--

DROP TABLE IF EXISTS `nutrition_fact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nutrition_fact` (
  `Id` int NOT NULL,
  `MealId` int NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Percent` decimal(18,2) NOT NULL,
  `DateCreated` datetime NOT NULL,
  `DateUpdate` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nutrition_fact`
--

LOCK TABLES `nutrition_fact` WRITE;
/*!40000 ALTER TABLE `nutrition_fact` DISABLE KEYS */;
/*!40000 ALTER TABLE `nutrition_fact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `TransactionDate` datetime NOT NULL,
  `TransactionId` varchar(255) NOT NULL,
  `UserId` int NOT NULL,
  `SubscriptionId` int NOT NULL,
  `Currency` varchar(45) NOT NULL,
  `Amount` decimal(18,2) NOT NULL,
  `Method` varchar(255) NOT NULL,
  `Token` varchar(255) NOT NULL,
  `BillingAddress` varchar(255) DEFAULT NULL,
  `Status` varchar(45) NOT NULL,
  `DateCreated` datetime NOT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profession`
--

DROP TABLE IF EXISTS `profession`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profession` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `UserId` int NOT NULL,
  `Title` varchar(255) NOT NULL,
  `LicenseNumber` varchar(100) NOT NULL,
  `YearsExp` decimal(18,2) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `IsVerified` tinyint NOT NULL,
  `Remarks` text,
  `DateCreated` datetime NOT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profession`
--

LOCK TABLES `profession` WRITE;
/*!40000 ALTER TABLE `profession` DISABLE KEYS */;
INSERT INTO `profession` VALUES (1,9,'Master Nutritionist','889251623',3.00,'',0,'test','2025-03-04 10:31:13','2025-03-08 02:44:08');
/*!40000 ALTER TABLE `profession` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profession_rating`
--

DROP TABLE IF EXISTS `profession_rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profession_rating` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `ProfessionId` int NOT NULL,
  `Rating` decimal(18,2) NOT NULL,
  `Remarks` varchar(255) DEFAULT NULL,
  `CreatedBy` int NOT NULL,
  `DateCreated` datetime NOT NULL,
  `UpdatedBy` int DEFAULT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profession_rating`
--

LOCK TABLES `profession_rating` WRITE;
/*!40000 ALTER TABLE `profession_rating` DISABLE KEYS */;
/*!40000 ALTER TABLE `profession_rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe`
--

DROP TABLE IF EXISTS `recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Instructions` text NOT NULL,
  `Image` text,
  `CreatedBy` int NOT NULL,
  `DateCreated` datetime NOT NULL,
  `UpdatedBy` int DEFAULT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe`
--

LOCK TABLES `recipe` WRITE;
/*!40000 ALTER TABLE `recipe` DISABLE KEYS */;
/*!40000 ALTER TABLE `recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe_line`
--

DROP TABLE IF EXISTS `recipe_line`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe_line` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `RecipeId` int NOT NULL,
  `IngredientId` int NOT NULL,
  `DateCreated` datetime NOT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe_line`
--

LOCK TABLES `recipe_line` WRITE;
/*!40000 ALTER TABLE `recipe_line` DISABLE KEYS */;
/*!40000 ALTER TABLE `recipe_line` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reminder`
--

DROP TABLE IF EXISTS `reminder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reminder` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `UserId` int NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Alarm` datetime NOT NULL,
  `DateCreated` datetime NOT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reminder`
--

LOCK TABLES `reminder` WRITE;
/*!40000 ALTER TABLE `reminder` DISABLE KEYS */;
/*!40000 ALTER TABLE `reminder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request_access`
--

DROP TABLE IF EXISTS `request_access`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request_access` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Email` varchar(255) NOT NULL,
  `Remarks` text,
  `Token` text NOT NULL,
  `IsApproved` tinyint NOT NULL,
  `DateCreated` datetime NOT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request_access`
--

LOCK TABLES `request_access` WRITE;
/*!40000 ALTER TABLE `request_access` DISABLE KEYS */;
INSERT INTO `request_access` VALUES (1,'test@gmail.com',NULL,'',0,'2025-03-04 04:56:04',NULL),(2,'superuser@gmail.com',NULL,'',0,'2025-03-04 05:01:20',NULL),(3,'admin@gmail.com',NULL,'',0,'2025-03-04 05:04:18',NULL);
/*!40000 ALTER TABLE `request_access` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscription`
--

DROP TABLE IF EXISTS `subscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscription` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Duration` int NOT NULL,
  `Price` decimal(18,2) NOT NULL,
  `CreatedBy` int NOT NULL,
  `DateCreated` datetime NOT NULL,
  `UpdatedBy` int DEFAULT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscription`
--

LOCK TABLES `subscription` WRITE;
/*!40000 ALTER TABLE `subscription` DISABLE KEYS */;
INSERT INTO `subscription` VALUES (1,'test','test',100,9999.00,5,'2025-03-06 09:19:05',NULL,NULL);
/*!40000 ALTER TABLE `subscription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscription_line`
--

DROP TABLE IF EXISTS `subscription_line`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscription_line` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `SubscriptionId` int NOT NULL,
  `UserId` int NOT NULL,
  `DateStart` datetime NOT NULL,
  `DateEnd` datetime NOT NULL,
  `DateCreated` datetime NOT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscription_line`
--

LOCK TABLES `subscription_line` WRITE;
/*!40000 ALTER TABLE `subscription_line` DISABLE KEYS */;
/*!40000 ALTER TABLE `subscription_line` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unit`
--

DROP TABLE IF EXISTS `unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unit` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `CreatedBy` int NOT NULL,
  `DateCreated` datetime NOT NULL,
  `UpdatedBy` int DEFAULT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`,`Name`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unit`
--

LOCK TABLES `unit` WRITE;
/*!40000 ALTER TABLE `unit` DISABLE KEYS */;
INSERT INTO `unit` VALUES (11,'Pc(s)','Piece/Pieces',1,'2025-03-05 16:26:44',NULL,NULL),(12,'Box(s)','Boxes',1,'2025-03-05 16:26:57',NULL,NULL),(13,'Pack(s)','Pack(s)',1,'2025-03-05 16:27:19',NULL,NULL),(14,'Can(s)','Can(s)',1,'2025-03-05 16:27:27',NULL,NULL),(15,'Gallon(s)','Gallon(s)',1,'2025-03-05 16:27:38',NULL,NULL),(16,'Gram(s)','Gram(s)',1,'2025-03-05 16:27:46',NULL,NULL),(17,'Kg(s)','Kilogram(s)',1,'2025-03-05 16:28:12',NULL,NULL),(18,'L(s)','Liter(s)',1,'2025-03-05 16:28:31',NULL,NULL),(19,'Order(s)','Order(s)',1,'2025-03-05 16:28:42',NULL,NULL),(20,'Roll(s)','Roll(s)',1,'2025-03-05 16:29:07',NULL,NULL),(21,'Sachet(s)','Sachet(s)',1,'2025-03-05 16:29:18',NULL,NULL),(22,'Serving(s)','Serving(s)',1,'2025-03-05 16:29:33',1,'2025-03-05 16:29:39'),(23,'Batch(s)','Batch(s)',1,'2025-03-05 16:29:52',NULL,NULL),(24,'Bar(s)','Bar(s)',1,'2025-03-05 16:30:01',NULL,NULL),(25,'Container(s)','Container(s)',1,'2025-03-05 16:30:08',NULL,NULL),(26,'Unit(s)','Unit(s)',1,'2025-03-05 16:30:15',NULL,NULL),(27,'Bot(s)','Bottle(s)',1,'2025-03-05 16:30:24',1,'2025-03-05 16:30:40'),(28,'Bundle(s)','Bundle(s)',1,'2025-03-05 16:30:53',NULL,NULL),(29,'Cubic','Cubic',1,'2025-03-05 16:31:14',NULL,NULL),(30,'Dozen','Dozen',1,'2025-03-05 16:31:21',NULL,NULL),(31,'Drum(s)','Drum(s)',1,'2025-03-05 16:31:36',NULL,NULL),(32,'Ft','Feet',1,'2025-03-05 16:31:44',NULL,NULL),(33,'Hundred(s)','Hundred(s)',1,'2025-03-05 16:31:55',NULL,NULL),(34,'In(s)','Inch(es)',1,'2025-03-05 16:32:11',NULL,NULL),(35,'Bag(s)','Bag(s)',1,'2025-03-05 16:32:23',NULL,NULL),(36,'M(s)','Meter(s)',1,'2025-03-05 16:32:34',NULL,NULL),(37,'Pad(s)','Pad(s)',1,'2025-03-05 16:32:45',NULL,NULL),(38,'Pail(s)','Pail(s)',1,'2025-03-05 16:32:55',NULL,NULL),(39,'Pair','Pair',1,'2025-03-05 16:33:02',NULL,NULL),(40,'Peso','Peso',1,'2025-03-05 16:33:09',NULL,NULL),(41,'Pint(s)','Pint(s)',1,'2025-03-05 16:33:21',NULL,NULL),(42,'Quart(s)','Quart(s)',1,'2025-03-05 16:33:31',NULL,NULL),(43,'Ream(s)','Ream(s)',1,'2025-03-05 16:33:39',NULL,NULL),(44,'Sack(s)','Sack(s)',1,'2025-03-05 16:33:46',NULL,NULL),(45,'Set(s)','Set(s)',1,'2025-03-05 16:33:55',NULL,NULL),(46,'Sheet(s)','Sheet(s)',1,'2025-03-05 16:34:02',NULL,NULL),(47,'Small Box(s)','Small Box(s)',1,'2025-03-05 16:34:31',NULL,NULL),(48,'Cup(s)','Cup(s)',1,'2025-03-05 16:34:40',NULL,NULL),(49,'Glass','Glass',1,'2025-03-05 16:34:53',NULL,NULL);
/*!40000 ALTER TABLE `unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Firstname` varchar(255) NOT NULL,
  `Middlename` varchar(255) DEFAULT NULL,
  `Lastname` varchar(255) NOT NULL,
  `BirthDate` datetime DEFAULT NULL,
  `ContactNumber` varchar(255) NOT NULL,
  `Role` varchar(100) NOT NULL,
  `Gender` varchar(255) DEFAULT NULL,
  `CivilStatus` varchar(100) NOT NULL,
  `ProfilePhoto` text,
  `IsSuspended` tinyint NOT NULL,
  `DateCreated` datetime NOT NULL,
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'superuser@gmail.com','$2b$10$Zcpl/M/AoJ4kWb1Ex.7XQOGlK7aj2BhaQ9.DGd2s76cpr/JwlLLkK','Light',NULL,'Yagami','2004-04-04 10:10:10','09532288400','superuser','male','single','/image/1741164238068-679312444.jpg',0,'2025-02-20 00:42:19','2025-03-06 06:02:37'),(5,'admin@gmail.com','$2b$10$SjkHtTcnaroQQXUoLHrVNu6hMKyhvHlTEPn/YY8KFXrcGke6Ny6N.','Jin','D','Kazama','2005-04-08 10:10:10','+639222222222','administrator','male','single','/image/1741212470893-474000092.png',0,'2025-03-02 00:00:00','2025-03-06 06:08:06'),(8,'client@gmail.com','$2b$10$W0YwQLqa7fd8HrK4vksw5.K66l8u53N8z1pEKah6Ygpc2lDptcHqe','Tanjiro',NULL,'Kamado','2000-02-02 10:10:10','09532288500','client','male','single','/image/1741138037520-249375913.jpg',0,'2025-03-04 09:59:28','2025-03-05 10:50:11'),(9,'nutritionist@gmail.com','$2b$10$aWGw6sS1jLHThFe1N.BWvuTL9m1kDWGoBc6Ht67nqUmXliNI.Q5mm','Ace','D','Portgas','2004-04-04 10:10:10','+639603259649','nutritionist','male','single','/image/1741144788962-822628636.jpg',0,'2025-03-04 10:01:58','2025-03-06 09:13:20');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_logs`
--

DROP TABLE IF EXISTS `user_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_logs` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `UserId` int NOT NULL,
  `DateLog` datetime NOT NULL,
  `Network` text,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_logs`
--

LOCK TABLES `user_logs` WRITE;
/*!40000 ALTER TABLE `user_logs` DISABLE KEYS */;
INSERT INTO `user_logs` VALUES (1,1,'2025-02-20 00:52:42',NULL),(2,1,'2025-02-20 19:03:42',NULL),(3,1,'2025-02-22 15:44:09',NULL),(4,1,'2025-02-22 15:46:04',NULL),(5,1,'2025-02-22 15:46:26',NULL),(6,1,'2025-02-22 15:47:23',NULL),(7,1,'2025-02-22 15:48:01',NULL),(8,1,'2025-02-22 15:48:56',NULL),(9,1,'2025-02-22 16:27:49',NULL),(10,1,'2025-02-23 02:02:43',NULL),(11,1,'2025-02-23 14:39:33',NULL),(12,4,'2025-02-23 16:58:18',NULL),(13,1,'2025-02-23 17:02:37',NULL),(14,1,'2025-02-23 17:04:33',NULL),(15,4,'2025-02-23 21:13:22',NULL),(16,4,'2025-02-23 22:19:11',NULL),(17,4,'2025-02-23 23:32:49',NULL),(18,1,'2025-02-23 23:56:46',NULL),(19,4,'2025-02-28 21:57:15',NULL),(20,4,'2025-03-01 00:46:13',NULL),(21,1,'2025-03-01 00:46:31',NULL),(22,4,'2025-03-01 01:14:29',NULL),(23,1,'2025-03-01 09:45:17',NULL),(24,1,'2025-03-01 09:48:23',NULL),(25,5,'2025-03-02 22:44:42',NULL),(26,5,'2025-03-02 23:21:43','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.15\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.15/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(27,5,'2025-03-03 00:01:58','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.15\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.15/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(28,5,'2025-03-03 00:13:37','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.15\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.15/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(29,5,'2025-03-03 00:16:45','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.15\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.15/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(30,5,'2025-03-03 00:39:07','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.15\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.15/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(31,5,'2025-03-03 00:40:27','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.15\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.15/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(32,5,'2025-03-03 14:32:22','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(33,5,'2025-03-03 15:06:15','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(34,5,'2025-03-03 19:29:09','{\"Wi-Fi\":[{\"address\":\"2001:4454:161:6500:3a7:dc8a:35f6:fd3e\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:161:6500:3a7:dc8a:35f6:fd3e/64\",\"scopeid\":0},{\"address\":\"2001:4454:161:6500:4c25:eed3:1f5a:fac3\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:161:6500:4c25:eed3:1f5a:fac3/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(35,1,'2025-03-03 19:39:30','{\"Wi-Fi\":[{\"address\":\"2001:4454:161:6500:3a7:dc8a:35f6:fd3e\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:161:6500:3a7:dc8a:35f6:fd3e/64\",\"scopeid\":0},{\"address\":\"2001:4454:161:6500:4c25:eed3:1f5a:fac3\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:161:6500:4c25:eed3:1f5a:fac3/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(36,5,'2025-03-04 03:44:22','{\"Wi-Fi\":[{\"address\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5/64\",\"scopeid\":0},{\"address\":\"2001:4454:104:ff00:b9ed:7765:644b:9829\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:b9ed:7765:644b:9829/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(37,5,'2025-03-04 03:47:13','{\"Wi-Fi\":[{\"address\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5/64\",\"scopeid\":0},{\"address\":\"2001:4454:104:ff00:b9ed:7765:644b:9829\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:b9ed:7765:644b:9829/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(38,5,'2025-03-04 03:48:05','{\"Wi-Fi\":[{\"address\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5/64\",\"scopeid\":0},{\"address\":\"2001:4454:104:ff00:b9ed:7765:644b:9829\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:b9ed:7765:644b:9829/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(39,5,'2025-03-04 03:48:13','{\"Wi-Fi\":[{\"address\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5/64\",\"scopeid\":0},{\"address\":\"2001:4454:104:ff00:b9ed:7765:644b:9829\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:b9ed:7765:644b:9829/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(40,5,'2025-03-04 03:49:52','{\"Wi-Fi\":[{\"address\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5/64\",\"scopeid\":0},{\"address\":\"2001:4454:104:ff00:b9ed:7765:644b:9829\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:b9ed:7765:644b:9829/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(41,5,'2025-03-04 03:50:05','{\"Wi-Fi\":[{\"address\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5/64\",\"scopeid\":0},{\"address\":\"2001:4454:104:ff00:b9ed:7765:644b:9829\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:b9ed:7765:644b:9829/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(42,5,'2025-03-04 03:50:20','{\"Wi-Fi\":[{\"address\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5/64\",\"scopeid\":0},{\"address\":\"2001:4454:104:ff00:b9ed:7765:644b:9829\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:b9ed:7765:644b:9829/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(43,5,'2025-03-04 03:50:46','{\"Wi-Fi\":[{\"address\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5/64\",\"scopeid\":0},{\"address\":\"2001:4454:104:ff00:b9ed:7765:644b:9829\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:b9ed:7765:644b:9829/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(44,1,'2025-03-04 03:56:07','{\"Wi-Fi\":[{\"address\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5/64\",\"scopeid\":0},{\"address\":\"2001:4454:104:ff00:b9ed:7765:644b:9829\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:b9ed:7765:644b:9829/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(45,1,'2025-03-04 03:57:17','{\"Wi-Fi\":[{\"address\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5/64\",\"scopeid\":0},{\"address\":\"2001:4454:104:ff00:b9ed:7765:644b:9829\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:b9ed:7765:644b:9829/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(46,1,'2025-03-04 03:58:40','{\"Wi-Fi\":[{\"address\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5/64\",\"scopeid\":0},{\"address\":\"2001:4454:104:ff00:b9ed:7765:644b:9829\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:b9ed:7765:644b:9829/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(47,1,'2025-03-04 05:04:50','{\"Wi-Fi\":[{\"address\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:ae0:4c50:5f54:e6f5/64\",\"scopeid\":0},{\"address\":\"2001:4454:104:ff00:b9ed:7765:644b:9829\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:104:ff00:b9ed:7765:644b:9829/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(48,1,'2025-03-04 08:56:49','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(49,5,'2025-03-04 08:57:53','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(50,1,'2025-03-04 08:58:06','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(51,8,'2025-03-04 09:59:28','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(52,8,'2025-03-04 10:01:23','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(53,9,'2025-03-04 10:01:58','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(54,9,'2025-03-04 10:17:37','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(55,1,'2025-03-04 14:21:58','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(56,8,'2025-03-04 16:12:39','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(57,8,'2025-03-04 18:27:15','{\"Wi-Fi\":[{\"address\":\"2001:4454:18b:6900:cde4:beab:6efa:2066\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:18b:6900:cde4:beab:6efa:2066/64\",\"scopeid\":0},{\"address\":\"2001:4454:18b:6900:20e5:ae8:d6b:c77\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:18b:6900:20e5:ae8:d6b:c77/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(58,1,'2025-03-04 20:34:27','{\"Wi-Fi\":[{\"address\":\"2001:4454:18b:6900:cde4:beab:6efa:2066\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:18b:6900:cde4:beab:6efa:2066/64\",\"scopeid\":0},{\"address\":\"2001:4454:18b:6900:3933:ce:9b2b:2898\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:18b:6900:3933:ce:9b2b:2898/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(59,8,'2025-03-04 21:39:27','{\"Wi-Fi\":[{\"address\":\"2001:4454:18b:6900:cde4:beab:6efa:2066\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:18b:6900:cde4:beab:6efa:2066/64\",\"scopeid\":0},{\"address\":\"2001:4454:18b:6900:3933:ce:9b2b:2898\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:18b:6900:3933:ce:9b2b:2898/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(60,8,'2025-03-04 21:40:07','{\"Wi-Fi\":[{\"address\":\"2001:4454:18b:6900:cde4:beab:6efa:2066\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:18b:6900:cde4:beab:6efa:2066/64\",\"scopeid\":0},{\"address\":\"2001:4454:18b:6900:3933:ce:9b2b:2898\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:18b:6900:3933:ce:9b2b:2898/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(61,8,'2025-03-04 21:41:12','{\"Wi-Fi\":[{\"address\":\"2001:4454:18b:6900:cde4:beab:6efa:2066\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:18b:6900:cde4:beab:6efa:2066/64\",\"scopeid\":0},{\"address\":\"2001:4454:18b:6900:3933:ce:9b2b:2898\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:18b:6900:3933:ce:9b2b:2898/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(62,8,'2025-03-05 09:01:49','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(63,9,'2025-03-05 10:55:51','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(64,8,'2025-03-05 11:10:44','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(65,9,'2025-03-05 11:13:09','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(66,9,'2025-03-05 15:03:11','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(67,8,'2025-03-05 16:07:15','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(68,1,'2025-03-05 16:25:04','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(69,8,'2025-03-05 16:52:36','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(70,1,'2025-03-05 16:55:33','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(71,1,'2025-03-05 18:17:11','{\"Wi-Fi\":[{\"address\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4/64\",\"scopeid\":0},{\"address\":\"2001:4454:19b:2800:8538:149a:dd19:793c\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:8538:149a:dd19:793c/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(72,1,'2025-03-05 18:19:57','{\"Wi-Fi\":[{\"address\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4/64\",\"scopeid\":0},{\"address\":\"2001:4454:19b:2800:8538:149a:dd19:793c\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:8538:149a:dd19:793c/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(73,9,'2025-03-05 18:20:16','{\"Wi-Fi\":[{\"address\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4/64\",\"scopeid\":0},{\"address\":\"2001:4454:19b:2800:8538:149a:dd19:793c\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:8538:149a:dd19:793c/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(74,1,'2025-03-06 04:03:55','{\"Wi-Fi\":[{\"address\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4/64\",\"scopeid\":0},{\"address\":\"2001:4454:19b:2800:8538:149a:dd19:793c\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:8538:149a:dd19:793c/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(75,8,'2025-03-06 04:24:28','{\"Wi-Fi\":[{\"address\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4/64\",\"scopeid\":0},{\"address\":\"2001:4454:19b:2800:8538:149a:dd19:793c\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:8538:149a:dd19:793c/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(76,9,'2025-03-06 05:08:40','{\"Wi-Fi\":[{\"address\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4/64\",\"scopeid\":0},{\"address\":\"2001:4454:19b:2800:8538:149a:dd19:793c\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:8538:149a:dd19:793c/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(77,1,'2025-03-06 05:35:30','{\"Wi-Fi\":[{\"address\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4/64\",\"scopeid\":0},{\"address\":\"2001:4454:19b:2800:8538:149a:dd19:793c\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:8538:149a:dd19:793c/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(78,9,'2025-03-06 05:35:44','{\"Wi-Fi\":[{\"address\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4/64\",\"scopeid\":0},{\"address\":\"2001:4454:19b:2800:8538:149a:dd19:793c\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:8538:149a:dd19:793c/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(79,9,'2025-03-06 05:36:44','{\"Wi-Fi\":[{\"address\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4/64\",\"scopeid\":0},{\"address\":\"2001:4454:19b:2800:8538:149a:dd19:793c\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:8538:149a:dd19:793c/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(80,1,'2025-03-06 05:39:33','{\"Wi-Fi\":[{\"address\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4/64\",\"scopeid\":0},{\"address\":\"2001:4454:19b:2800:8538:149a:dd19:793c\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:8538:149a:dd19:793c/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(81,8,'2025-03-06 06:01:04','{\"Wi-Fi\":[{\"address\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4/64\",\"scopeid\":0},{\"address\":\"2001:4454:19b:2800:8538:149a:dd19:793c\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:8538:149a:dd19:793c/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(82,1,'2025-03-06 06:01:57','{\"Wi-Fi\":[{\"address\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4/64\",\"scopeid\":0},{\"address\":\"2001:4454:19b:2800:8538:149a:dd19:793c\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:8538:149a:dd19:793c/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(83,5,'2025-03-06 06:03:41','{\"Wi-Fi\":[{\"address\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4/64\",\"scopeid\":0},{\"address\":\"2001:4454:19b:2800:8538:149a:dd19:793c\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:8538:149a:dd19:793c/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(84,5,'2025-03-06 06:05:38','{\"Wi-Fi\":[{\"address\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4/64\",\"scopeid\":0},{\"address\":\"2001:4454:19b:2800:8538:149a:dd19:793c\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:8538:149a:dd19:793c/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(85,10,'2025-03-06 06:31:45','{\"Wi-Fi\":[{\"address\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4/64\",\"scopeid\":0},{\"address\":\"2001:4454:19b:2800:8538:149a:dd19:793c\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:8538:149a:dd19:793c/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(86,5,'2025-03-06 06:35:37','{\"Wi-Fi\":[{\"address\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4/64\",\"scopeid\":0},{\"address\":\"2001:4454:19b:2800:8538:149a:dd19:793c\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:8538:149a:dd19:793c/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(87,5,'2025-03-06 06:54:03','{\"Wi-Fi\":[{\"address\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:7c70:c7ee:aca0:30c4/64\",\"scopeid\":0},{\"address\":\"2001:4454:19b:2800:8538:149a:dd19:793c\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:19b:2800:8538:149a:dd19:793c/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(88,5,'2025-03-06 09:09:15','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(89,9,'2025-03-06 10:18:56','{\"Wi-Fi\":[{\"address\":\"fe80::208f:bc9:42a7:7b93\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"fe80::208f:bc9:42a7:7b93/64\",\"scopeid\":16},{\"address\":\"192.168.1.220\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"10:51:07:d0:43:91\",\"internal\":false,\"cidr\":\"192.168.1.220/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}'),(90,5,'2025-03-08 01:56:53','{\"Wi-Fi\":[{\"address\":\"2001:4454:1da:ce00:9df:3b79:4c0c:fcd5\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:1da:ce00:9df:3b79:4c0c:fcd5/64\",\"scopeid\":0},{\"address\":\"2001:4454:1da:ce00:8815:e5cf:6b2c:b1c5\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"2001:4454:1da:ce00:8815:e5cf:6b2c:b1c5/128\",\"scopeid\":0},{\"address\":\"fe80::703:378a:3097:dbd1\",\"netmask\":\"ffff:ffff:ffff:ffff::\",\"family\":\"IPv6\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"fe80::703:378a:3097:dbd1/64\",\"scopeid\":11},{\"address\":\"192.168.1.9\",\"netmask\":\"255.255.255.0\",\"family\":\"IPv4\",\"mac\":\"7c:2a:31:b8:12:f8\",\"internal\":false,\"cidr\":\"192.168.1.9/24\"}],\"Loopback Pseudo-Interface 1\":[{\"address\":\"::1\",\"netmask\":\"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff\",\"family\":\"IPv6\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"::1/128\",\"scopeid\":0},{\"address\":\"127.0.0.1\",\"netmask\":\"255.0.0.0\",\"family\":\"IPv4\",\"mac\":\"00:00:00:00:00:00\",\"internal\":true,\"cidr\":\"127.0.0.1/8\"}]}');
/*!40000 ALTER TABLE `user_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'himsog'
--

--
-- Dumping routines for database 'himsog'
--
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-08 18:00:31

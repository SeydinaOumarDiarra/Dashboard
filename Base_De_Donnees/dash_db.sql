-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 17 nov. 2021 à 15:14
-- Version du serveur : 10.4.20-MariaDB
-- Version de PHP : 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `dash_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `administrateur`
--

CREATE TABLE `administrateur` (
  `id` bigint(20) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `administrateur`
--

INSERT INTO `administrateur` (`id`, `role`, `user_id`) VALUES
(1, 'Administrateur', 1);

-- --------------------------------------------------------

--
-- Structure de la table `apprenant`
--

CREATE TABLE `apprenant` (
  `id` bigint(20) NOT NULL,
  `date_add` datetime DEFAULT NULL,
  `date_update` datetime DEFAULT NULL,
  `admin_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `apprenant`
--

INSERT INTO `apprenant` (`id`, `date_add`, `date_update`, `admin_id`, `user_id`) VALUES
(1, '2021-11-16 19:00:10', '2021-11-16 19:12:41', 1, 2),
(2, '2021-11-16 19:14:23', '2021-11-16 19:14:23', 1, 3);

-- --------------------------------------------------------

--
-- Structure de la table `formateur`
--

CREATE TABLE `formateur` (
  `id` bigint(20) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `matricule` varchar(255) DEFAULT NULL,
  `date_add` datetime DEFAULT NULL,
  `date_update` datetime DEFAULT NULL,
  `admin_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `formateur`
--

INSERT INTO `formateur` (`id`, `role`, `user_id`, `matricule`, `date_add`, `date_update`, `admin_id`) VALUES
(1, NULL, 5, NULL, '2021-11-17 09:17:07', '2021-11-17 09:17:07', 1),
(3, NULL, 7, NULL, '2021-11-17 09:31:59', '2021-11-17 09:31:59', 1);

-- --------------------------------------------------------

--
-- Structure de la table `liste_presence`
--

CREATE TABLE `liste_presence` (
  `id` bigint(20) NOT NULL,
  `date_liste` datetime DEFAULT NULL,
  `heure_arrive` time DEFAULT NULL,
  `heure_depart` time DEFAULT NULL,
  `admin_id` bigint(20) DEFAULT NULL,
  `app_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `liste_presence`
--

INSERT INTO `liste_presence` (`id`, `date_liste`, `heure_arrive`, `heure_depart`, `admin_id`, `app_id`) VALUES
(1, '2021-11-17 14:05:25', '14:05:25', NULL, 1, 1),
(2, '2021-11-17 14:04:10', '14:04:10', NULL, 1, 2),
(3, '2021-11-17 14:04:02', NULL, NULL, 1, NULL),
(4, '2021-11-17 14:05:17', NULL, NULL, 1, NULL),
(5, '2021-11-17 14:05:54', NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `telephone` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `email`, `genre`, `login`, `nom`, `password`, `prenom`, `telephone`) VALUES
(1, 'seydi@gmail.com', 'Homme', 'seydina', 'DIARRA', '1111', 'Seydina Oumar', 70000009),
(2, 'konate2@gmail.com', 'Homme', NULL, 'KONATE', NULL, 'Ibrahima Ibrah', 67676750),
(3, 'ami@gmail.com', 'Femme', NULL, 'TRAORE', NULL, 'Aminata', 70997788),
(4, 'kaloga@gmail.com', 'Femme', NULL, 'Kaloga', NULL, 'Fatoumata', 78151736),
(5, 'kaloga@gmail.com', 'Femme', NULL, 'Kaloga', NULL, 'Fatoumata', 78151736),
(6, 'fatim@gmail.com', 'Femme', NULL, 'Kaloga', NULL, 'Fatoumata', 78151736),
(7, 'fous@gmail.com', 'Homme', NULL, 'DEMBELE', NULL, 'Fouseyni', 76554431);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `administrateur`
--
ALTER TABLE `administrateur`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKrbmkav3gk4dak4qrapixqgue1` (`user_id`);

--
-- Index pour la table `apprenant`
--
ALTER TABLE `apprenant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKrlaqlgjkkyel23fufcswouiav` (`admin_id`),
  ADD KEY `FK5dsmq3tdx5hs75fatkd92y4y9` (`user_id`);

--
-- Index pour la table `formateur`
--
ALTER TABLE `formateur`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK8osuthaj3nwmgy88r8wb7cmrw` (`admin_id`),
  ADD KEY `FKowu8joy1rt9jcmdkgl1l9j42c` (`user_id`);

--
-- Index pour la table `liste_presence`
--
ALTER TABLE `liste_presence`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKfklxeppvp2ekeppm3ykxs2j1w` (`admin_id`),
  ADD KEY `FK47rjb45ol5ndfwk3xads84w04` (`app_id`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `administrateur`
--
ALTER TABLE `administrateur`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `apprenant`
--
ALTER TABLE `apprenant`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `formateur`
--
ALTER TABLE `formateur`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `liste_presence`
--
ALTER TABLE `liste_presence`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

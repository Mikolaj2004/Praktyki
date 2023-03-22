-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 22 Mar 2023, 02:13
-- Wersja serwera: 10.4.14-MariaDB
-- Wersja PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `database`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `laboranci`
--

CREATE TABLE `laboranci` (
  `id` int(11) NOT NULL,
  `laborant` varchar(255) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `laboranci`
--

INSERT INTO `laboranci` (`id`, `laborant`) VALUES
(7, '1'),
(8, '2'),
(9, '3');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `miejsca`
--

CREATE TABLE `miejsca` (
  `id` int(11) NOT NULL,
  `miejsce` varchar(255) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `miejsca`
--

INSERT INTO `miejsca` (`id`, `miejsce`) VALUES
(12, 'sala 101'),
(13, 'sala 102'),
(14, 'sala 103');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `rodzaj`
--

CREATE TABLE `rodzaj` (
  `id` int(11) NOT NULL,
  `rodzaj` varchar(255) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `rodzaj`
--

INSERT INTO `rodzaj` (`id`, `rodzaj`) VALUES
(5, 'Mebel'),
(6, 'Elektronika'),
(7, 'Przenośne');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uzytkownik`
--

CREATE TABLE `uzytkownik` (
  `id` int(11) NOT NULL,
  `imie` varchar(255) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `uzytkownik`
--

INSERT INTO `uzytkownik` (`id`, `imie`) VALUES
(17, 'Janusz Kowalski'),
(18, 'Adam Nowak'),
(19, 'Anna Grubba');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wykaz_materialow`
--

CREATE TABLE `wykaz_materialow` (
  `id` int(11) NOT NULL,
  `usernumber` int(255) NOT NULL,
  `amount` int(255) NOT NULL,
  `place` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `roomnumber` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `user` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `kind` tinyint(1) NOT NULL,
  `type` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `faulty` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `wykaz_materialow`
--

INSERT INTO `wykaz_materialow` (`id`, `usernumber`, `amount`, `place`, `name`, `roomnumber`, `user`, `kind`, `type`, `faulty`) VALUES
(125, 2, 2, 'sala104', 'czarny chleb', '1231', 'm.Tycko', 0, 'Stanowy', 0),
(126, 2, 1, 'sala104', 'czarna kawa', '1231', 'm.Tycko', 0, 'Stanowy', 0),
(139, 1, 12, 'sala 101', 'bulbulator', '43d', 'Janusz Kowalski', 0, 'Stanowy', 0);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `laboranci`
--
ALTER TABLE `laboranci`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `miejsca`
--
ALTER TABLE `miejsca`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `rodzaj`
--
ALTER TABLE `rodzaj`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `uzytkownik`
--
ALTER TABLE `uzytkownik`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `wykaz_materialow`
--
ALTER TABLE `wykaz_materialow`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `laboranci`
--
ALTER TABLE `laboranci`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT dla tabeli `miejsca`
--
ALTER TABLE `miejsca`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT dla tabeli `rodzaj`
--
ALTER TABLE `rodzaj`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT dla tabeli `uzytkownik`
--
ALTER TABLE `uzytkownik`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT dla tabeli `wykaz_materialow`
--
ALTER TABLE `wykaz_materialow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=140;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

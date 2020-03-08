-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 08 Mar 2020 pada 11.52
-- Versi Server: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `video`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE IF NOT EXISTS `user` (
`id` int(10) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(50) NOT NULL,
  `status` int(10) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `status`) VALUES
(1, 'alghi77@gmail.com', '123', 0),
(2, 'alghi@gmail.com', '123', 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `video`
--

CREATE TABLE IF NOT EXISTS `video` (
`id` int(10) NOT NULL,
  `link` varchar(100) NOT NULL,
  `user_id` int(10) NOT NULL,
  `like` int(10) NOT NULL,
  `dislike` int(10) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(200) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data untuk tabel `video`
--

INSERT INTO `video` (`id`, `link`, `user_id`, `like`, `dislike`, `title`, `description`) VALUES
(2, 'CU-IUcrmHLo', 1, 0, 0, 'Tamara Dai, Eka Gustiwana - Mistreated (Official Music Video)', 'Available on\nSpotify: https://spoti.fi/2VxMurW\nJoox: https://bit.ly/2VxlloX\nDeezer: https://bit.ly/2TpmwUO\nApple Music https://apple.co/3aetsLe\n\nTAMARA DAI\nhttps://www.instagram.com/tamaradai\nhttps://'),
(3, 'qzA43hpfDiE', 2, 0, 0, 'Bucky Bakal Jadi Partnernya John Walker Si Captain America Yang Baru ??!!', 'Hi Skrulls, \nBeberapa hari yang lalu muncul set photo dan video dari produksi series The Falcon and The Winter Soldier yang beredar di internet. Ternyata photo dan video ini mereveal banyak hal tentan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `video`
--
ALTER TABLE `video`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `video`
--
ALTER TABLE `video`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

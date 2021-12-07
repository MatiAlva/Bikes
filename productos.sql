-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-12-2021 a las 23:15:09
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tiendabicicletas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idBicicleta` int(10) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `precio` int(10) NOT NULL,
  `imagen` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idBicicleta`, `descripcion`, `precio`, `imagen`) VALUES
(1, ' Bicicleta Mountain Bike Jordan MTB rodado 29', 69990, '/img/publicacion1.jpg'),
(2, 'Bicicleta BMX Olmo Clash rodado 20', 31499, '/img/publicacion2.jpg'),
(3, 'Bicicleta Cyclocross Merida Silex 600 2021 Sram 1x11', 463878, '/img/publicacion3.jpg'),
(4, 'Bicicleta Triatlon Trek Speed Carbono 8.96kg', 26499, '/img/publicacion4.jpg'),
(5, 'Bicicleta Mountain Bike Kawasaki rodado 27', 64999, '/img/publicacion5.jpg'),
(6, 'Bicicleta BMX Stark Black rodado 20.', 35299, '/img/publicacion6.jpg'),
(7, 'Bicicleta Cyclocross State Bicycle Thunderbird', 95499, '/img/publicacion7.jpg'),
(8, 'Bicicleta Triatlon Felt B14 UHC Performance.', 22999, '/img/publicacion8.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idBicicleta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idBicicleta` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

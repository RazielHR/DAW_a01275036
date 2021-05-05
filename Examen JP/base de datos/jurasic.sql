-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-05-2021 a las 17:54:09
-- Versión del servidor: 10.1.13-MariaDB
-- Versión de PHP: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `jurasic`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lugar`
--

CREATE TABLE `lugar` (
  `id_lugar` int(16) NOT NULL,
  `nombre_lugar` varchar(64) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `lugar`
--

INSERT INTO `lugar` (`id_lugar`, `nombre_lugar`) VALUES
(1, 'Centro turístico'),
(2, 'Laboratorios'),
(3, 'Restaurante'),
(4, 'Centro operativo'),
(5, 'Triceratops'),
(6, 'Dilofosaurios'),
(7, 'Velociraptors'),
(8, 'TRex'),
(9, 'Planicie de los herbívoros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lugar_tipo`
--

CREATE TABLE `lugar_tipo` (
  `id_lugar` int(16) NOT NULL,
  `id_tipo` int(16) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `lugar_tipo`
--

INSERT INTO `lugar_tipo` (`id_lugar`, `id_tipo`, `fecha`) VALUES
(1, 1, '2021-05-05 14:26:53'),
(2, 2, '2021-05-05 15:52:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo`
--

CREATE TABLE `tipo` (
  `id_tipo` int(16) NOT NULL,
  `tipo_incidente` varchar(64) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `tipo`
--

INSERT INTO `tipo` (`id_tipo`, `tipo_incidente`) VALUES
(1, 'Falla eléctrica'),
(2, 'Fuga de herbívoro'),
(3, 'Fuga de Velociraptors'),
(4, 'Fuga de TRex'),
(5, 'Robo de ADN'),
(6, 'Auto descompuesto'),
(7, 'Visitantes en zona no autorizada');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `lugar`
--
ALTER TABLE `lugar`
  ADD PRIMARY KEY (`id_lugar`);

--
-- Indices de la tabla `lugar_tipo`
--
ALTER TABLE `lugar_tipo`
  ADD PRIMARY KEY (`id_lugar`,`id_tipo`),
  ADD KEY `FK_id_lugar` (`id_lugar`),
  ADD KEY `FK_id_tipo` (`id_tipo`);

--
-- Indices de la tabla `tipo`
--
ALTER TABLE `tipo`
  ADD PRIMARY KEY (`id_tipo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `lugar`
--
ALTER TABLE `lugar`
  MODIFY `id_lugar` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `tipo`
--
ALTER TABLE `tipo`
  MODIFY `id_tipo` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `lugar_tipo`
--
ALTER TABLE `lugar_tipo`
  ADD CONSTRAINT `lugar_tipo_ibfk_1` FOREIGN KEY (`id_lugar`) REFERENCES `lugar` (`id_lugar`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lugar_tipo_ibfk_2` FOREIGN KEY (`id_tipo`) REFERENCES `tipo` (`id_tipo`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

<%--usuario.jsp--%>

<%--

    Pagina que nos muestra los usuarios con las opciones disponibles.

    autor: jon Barnes
    version: 20/09/2017

--%>

<%--La cabecera. --%>
<%@ include file="includes/cabecera.jsp"%>


<%--Para el encoding. --%>
<%@ page contentType="text/html; charset=UTF-8" %>

<%--Librerias de jstl que necesitamos. --%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>

<h2>Mantenimiento de usuarios</h2>


<%--Tabla que muestra los usuarios --%>
<table class="table table-hover text-centered">

<%--Cabecera de la tabla. --%>
	<thead>
		<tr>
			<th>Operaciones</th>
			<th>Usuario</th>
			<th>Contraseña</th>
			<th>Nombre Completo</th>
		</tr>
	</thead>

	<%--Fila de las tablas. --%>
	<tbody>
		<c:forEach var="usuario" items="${usuarios}" >
			<tr>
				<td>
					<a href="?op=modificar&id=${usuario.id}">Modificar</a>
					<a href="?op=borrar&id=${usuario.id}">Borrar</a>
				</td>
				<td>${usuario.name}</td>
				<td>${usuario.password}</td>
				<td>${usuario.description}</td>
			</tr>
		</c:forEach>
	</tbody>
</table>




<%--Pie de la pagina. --%>
<%@ include file="includes/pie.jsp"%>
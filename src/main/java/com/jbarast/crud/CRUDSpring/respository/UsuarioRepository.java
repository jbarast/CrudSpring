package com.jbarast.crud.CRUDSpring.respository;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jbarast.crud.CRUDSpring.models.Usuario;

/**
 * Creacion de un repositorio simple. Sacado de <a
 * href="https://spring.io/guides/gs/accessing-data-rest/>Tutorial Accesing JPA
 * Data with REST</a>
 *
 * @author jbarast
 * @version 19/09/2017
 *
 *          Created 19/09/2017
 */
@RepositoryRestResource(collectionResourceRel = "usuario", path = "usuario")
public interface UsuarioRepository extends PagingAndSortingRepository<Usuario, Long> {

	List<Usuario> findByName(@Param("name") String name);

	List<Usuario> findByPassword(@Param("password") String password);
}

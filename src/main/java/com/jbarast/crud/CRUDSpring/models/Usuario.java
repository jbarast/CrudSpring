package com.jbarast.crud.CRUDSpring.models;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Clase usuario, para el ejemplo de CRUD de Spring
 *
 *  @author jbarast
 *  @version 19/09/2017
 *
 *  Created 19/09/2017
 */
@Entity

public class Usuario {

    //atributos
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
     private Long id;

     private String name;
     private String password;
     private String description;




     //Constructores


    public Usuario() {
    }

    public Usuario(Long id, String name, String password, String description) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.description = description;
    }


    //getters y setters.

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    //otros metodos.


    @Override
    public String toString() {
        return "Usuario{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", description='" + description + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Usuario usuario = (Usuario) o;

        if (id != null ? !id.equals(usuario.id) : usuario.id != null) return false;
        if (name != null ? !name.equals(usuario.name) : usuario.name != null) return false;
        if (password != null ? !password.equals(usuario.password) : usuario.password != null) return false;
        return description != null ? description.equals(usuario.description) : usuario.description == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (password != null ? password.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }
}

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
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {

    //atributos
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
     private Long id;

     private String name;
     private String password;
     private String description;





}

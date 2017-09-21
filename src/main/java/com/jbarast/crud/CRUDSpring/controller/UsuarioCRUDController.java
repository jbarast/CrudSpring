//UsuarioCRUDController.java

package com.jbarast.crud.CRUDSpring.controller;


import com.jbarast.crud.CRUDSpring.models.Usuario;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

/**
 * Controlador para la usuario UsuarioCRUD
 *
 *  @author jbarast
 *  @version 20/09/2017
 *
 *      Created 20-09-2017
 */
@Slf4j
@Controller
@RequestMapping("/usuario")
public class UsuarioCRUDController {

    //Objeto.
    Usuario usuario = new Usuario();

    @GetMapping
    public  String listaUsuarios(Model model){
        log.info("Estamos en el controlador en GETMapping.");

        List<Usuario> usuarios = new ArrayList<Usuario>();

        Usuario usuario = new Usuario();

        usuarios.add(usuario);
        usuario.setId(new Long(2));
        usuario.setName("Probando");
        usuario.setDescription("No se que poner aqui");
        usuario.setPassword("PassWord02");

        model.addAttribute("usuarios",usuarios);


        return "usuario";
    }




}

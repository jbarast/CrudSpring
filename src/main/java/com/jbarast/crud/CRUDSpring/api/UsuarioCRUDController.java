//UsuarioCRUDController.java

package com.jbarast.crud.CRUDSpring.api;



import com.jbarast.crud.CRUDSpring.models.Usuario;
import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.*;

import play.mvc.BodyParser;

import java.io.IOException;
import java.util.List;

import static play.mvc.Controller.request;


/**
 * Api para ver los datos de la JSON.
 *
 * @author jbarast
 * @version 20/09/2017
 * <p>
 * Created 20-09-2017
 */
@Slf4j
@RestController
@RequestMapping("/api/usuario/{id}")
public class UsuarioCRUDController {

    @GetMapping
    @ResponseBody
    public Usuario usuarioApi(@PathVariable(name = "id") Long id)  {

        return new Usuario(id, "usuario" + id, "Contraseña" + id,"Descripcion");

    }


}




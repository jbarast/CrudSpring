package com.jbarast.crud.CRUDSpring.controller;

import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/saludar")
public class Saludo {

    @GetMapping
    public String saludar(@RequestParam(name="nombre", required = false) String nombre, Model modelo){

        modelo.addAttribute("nombre",nombre.toUpperCase());
        return "saludar";

    }
}

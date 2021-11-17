/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dash.demo.controllers;

import Dash.demo.models.Administrateur;
import Dash.demo.services.AdministrateurServiceImp;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;



/**
 *
 * @author seydinaoumar.diarra
 */
@CrossOrigin("*")
@Controller
@RequestMapping("/api/admin")
public class AdministrateurController {
    
    @Autowired
    AdministrateurServiceImp adminServiceImp;
    
    // Authentification admin
    @GetMapping(value = "/connexion/{login}/{password}")
    @ResponseBody
    public Administrateur authentification
        (
            @PathVariable("login") String username,
            @PathVariable("password") String password
        ) 
    {
        String response = "Succes";
        return adminServiceImp.authentification(username, password);
    }
    
    // Liste administrateurs
    @GetMapping("/listAdmin")
    @ResponseBody
        public List<Administrateur> liste_admin() {
        return adminServiceImp.list_admin();
    }
        
    @PutMapping(value = "/updatePasswordAdmin/{id}")
    @ResponseBody
    public Administrateur updatePasswordAdmin(@PathVariable("id") Long id, @RequestBody Administrateur admin) {
        return adminServiceImp.update_password(id, admin);
    }
}

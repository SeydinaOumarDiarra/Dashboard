/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dash.demo.controllers;

import Dash.demo.models.Utilisateur;
import Dash.demo.services.UtilisateurServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
@RequestMapping("/api/user")
public class UtilisateurController {
    @Autowired
    UtilisateurServiceImp userServiceImp;
    
    @PostMapping(value = "/addUser")
    @ResponseBody
    public Utilisateur save(@RequestBody Utilisateur user) {
        return userServiceImp.add_user(user);
    }
    
    @PutMapping(value = "/updateUser/{id}")
    @ResponseBody
    public Utilisateur updateUser(@PathVariable("id") Long id, @RequestBody Utilisateur user) {
        return userServiceImp.update_user(id, user);
    }
    
    @GetMapping(value = "/detailUser/{id}")
    @ResponseBody
    public Utilisateur detailUser(@PathVariable("id") Long id) {
        return userServiceImp.afficher_user_by_id(id);
    }
    
    @DeleteMapping(value = "/deleteUser/{id}")
    public void deleteUser(@PathVariable("id") Long idUser) {
        userServiceImp.delete_user(idUser);
    }
}

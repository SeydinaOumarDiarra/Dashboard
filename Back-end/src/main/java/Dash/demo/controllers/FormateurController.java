/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dash.demo.controllers;

import Dash.demo.models.Apprenant;
import Dash.demo.models.Formateur;
import Dash.demo.services.FormateurServiceImp;
import java.util.List;
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
@RequestMapping("/api/formateur")
public class FormateurController {
    
    @Autowired
    FormateurServiceImp formServiceImp;
    
    @GetMapping("/listFormateur")
    @ResponseBody
    public List<Formateur> liste_formateur() {
      return formServiceImp.list_formateur();
    }
    
    @PostMapping(value = "/addFormateur")
    @ResponseBody
    public Formateur save(@RequestBody Formateur formateur) {
        return formServiceImp.add_formateur(formateur);
    }
    
    @PutMapping(value = "/updateFormateur/{id}")
    @ResponseBody
    public Formateur udateFormateur(@PathVariable("id") Long id, @RequestBody Formateur formateur) {
        return formServiceImp.update_formateur(id, formateur);
    }
    
    @GetMapping(value = "/detailFormateur/{id}")
    @ResponseBody
    public Formateur detailFormateur(@PathVariable("id") Long id) {
        return formServiceImp.afficher_formateur_by_id(id);
    }
    
    @DeleteMapping(value = "/deleteFormateur/{id}")
    public void deleteFormateur(@PathVariable("id") Long id) {
        formServiceImp.delete_formateur(id);
    }
}

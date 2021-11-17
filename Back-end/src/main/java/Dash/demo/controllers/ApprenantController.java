/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dash.demo.controllers;

import Dash.demo.models.Apprenant;
import Dash.demo.services.ApprenantServiceImp;
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
@RequestMapping("/api/apprenant")
public class ApprenantController {
    
    @Autowired
    ApprenantServiceImp appServiceImp;
    
    @GetMapping("/listApprenant")
    @ResponseBody
    public List<Apprenant> liste_apprenant() {
      return appServiceImp.list_apprenant();
    }
    
    @PostMapping(value = "/addApprenant")
    @ResponseBody
    public Apprenant save(@RequestBody Apprenant apprenant) {
        return appServiceImp.add_apprenant(apprenant);
    }
    
    @PutMapping(value = "/updateApprenant/{id}")
    @ResponseBody
    public Apprenant udateApprenant(@PathVariable("id") Long id, @RequestBody Apprenant apprenant) {
        return appServiceImp.update_apprenant(id, apprenant);
    }
    
    @GetMapping(value = "/detailApprenant/{id}")
    @ResponseBody
    public Apprenant detailApprenant(@PathVariable("id") Long id) {
        return appServiceImp.afficher_apprenant_by_id(id);
    }
    
    @DeleteMapping(value = "/deleteApprenant/{id}")
    public void deleteApprenant(@PathVariable("id") Long id) {
        appServiceImp.delete_apprenant(id);
    }
}

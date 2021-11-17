/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dash.demo.controllers;

import Dash.demo.models.Liste_presence;
import Dash.demo.services.Liste_presenceServiceImp;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author seydinaoumar.diarra
 */
@CrossOrigin("*")
@Controller
@RequestMapping("/api/liste_presence")
public class Liste_presenceController {
    
    @Autowired
    Liste_presenceServiceImp listePresenceServiceImp;
    
    @PostMapping(value = "/addListe_presence")
    @ResponseBody
    public Liste_presence save(@RequestBody Liste_presence liste) {
        return listePresenceServiceImp.add_listePresence(liste);
    }
    
    @GetMapping(value = "/detailListe_presence/{id}")
    @ResponseBody
    public Liste_presence detailListePresence(@PathVariable("id") Long id) {
        return listePresenceServiceImp.afficher_listePresence_by_id(id);
    }
    
    @GetMapping("/liste_presence_by_Year")
    @ResponseBody
        public List[]liste_presence_find_by_year() {
        return listePresenceServiceImp.liste_presence_find_by_year();
    }
    
    @GetMapping("/liste_presence_by_Month/{year}")
    @ResponseBody
        public List[]liste_presence_find_by_month(@PathVariable("year") String year) {
        return listePresenceServiceImp.liste_presence_find_by_month(year);
    }
        
    @GetMapping("/liste_presence_by_Date/{month}")
    @ResponseBody
        public List[]liste_presence_find_by_date(@PathVariable("month") String month) {
        return listePresenceServiceImp.liste_presence_find_by_date(month);
    }
        
    @GetMapping("/liste_presence_by_Day/{day}")
    @ResponseBody
        public List[]liste_presence_find_by_day(@PathVariable("day") String day) {
        return listePresenceServiceImp.liste_presence_find_by_day(day);
    }
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dash.demo.services;

import Dash.demo.models.Liste_presence;
import Dash.demo.repositories.Liste_presenceRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author seydinaoumar.diarra
 */
@Service
public class Liste_presenceServiceImp implements Liste_presenceService {

    @Autowired
    private Liste_presenceRepository listeRepository;
    
    @Override
    public Liste_presence add_listePresence(Liste_presence listePresence) {
         return listeRepository.save(listePresence);
    }

    @Override
    public Liste_presence afficher_listePresence_by_id(Long id) {
         return listeRepository.findById(id).get();
    }

    @Override
    public List[] liste_presence_find_by_year() {
         return listeRepository.findByYear_liste();
    }

    @Override
    public List[] liste_presence_find_by_month(String year) {
        return listeRepository.findByMonth_liste(year);
    }

    @Override
    public List[] liste_presence_find_by_date(String month) {
         return listeRepository.findByDate_liste(month);
    }

    @Override
    public List[] liste_presence_find_by_day(String day) {
         return listeRepository.findByDay_liste(day);
    }
    
}

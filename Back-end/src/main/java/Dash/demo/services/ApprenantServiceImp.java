/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dash.demo.services;

import Dash.demo.models.Apprenant;
import Dash.demo.repositories.ApprenantRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author seydinaoumar.diarra
 */
@Service
public class ApprenantServiceImp implements ApprenantService {

    @Autowired
    private ApprenantRepository apprenantRepository;
     
    @Override
    public Apprenant add_apprenant(Apprenant apprenant) {
         return apprenantRepository.save(apprenant);
    }

    @Override
    public Apprenant update_apprenant(Long id, Apprenant apprenant) {
        Apprenant app = apprenantRepository.findById(id).get();
        app.setAdmin(apprenant.getAdmin());
        app.setUser(apprenant.getUser());
        app.setDateUpdate(apprenant.getDateUpdate());
        return apprenantRepository.save(app);
    }

    @Override
    public List<Apprenant> list_apprenant() {
        List<Apprenant> liste = new ArrayList<>();
        liste = apprenantRepository.findAll();
        return liste;
    }

    @Override
    public Apprenant afficher_apprenant_by_id(Long id) {
         return apprenantRepository.findById(id).get();
    }

    @Override
    public void delete_apprenant(Long id) {
        apprenantRepository.deleteById(id);
    }
    
}

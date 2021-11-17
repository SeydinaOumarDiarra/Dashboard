/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dash.demo.services;

import Dash.demo.models.Apprenant;
import Dash.demo.models.Formateur;
import Dash.demo.repositories.FormateurRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author seydinaoumar.diarra
 */
@Service
public class FormateurServiceImp implements FormateurService{

    @Autowired
    private FormateurRepository formRepository;
     
    @Override
    public List<Formateur> list_formateur() {
        List<Formateur> liste = new ArrayList<>();
        liste = formRepository.findAll();
        return liste;
    }
    
    @Override
    public Formateur add_formateur(Formateur formateur) {
        return formRepository.save(formateur);
    }

    @Override
    public Formateur afficher_formateur_by_id(Long id) {
         return formRepository.findById(id).get();
    }

    @Override
    public Formateur update_formateur(Long id, Formateur formateur) {
        Formateur form = formRepository.findById(id).get();
        formateur.setAdmin(form.getAdmin());
        formateur.setUser(form.getUser());
        formateur.setDateUpdate(form.getDateUpdate());
        return formRepository.save(form);
    }

    @Override
    public void delete_formateur(Long id) {
        formRepository.deleteById(id);
    }
    
}

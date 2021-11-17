/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dash.demo.services;

import Dash.demo.models.Utilisateur;
import Dash.demo.repositories.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author seydinaoumar.diarra
 */
@Service
public class UtilisateurServiceImp implements UtilisateurService{
    
    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Override
    public Utilisateur add_user(Utilisateur utilisateur) {
        return utilisateurRepository.save(utilisateur);
    }

    @Override
    public Utilisateur afficher_user_by_id(Long id) {
        return utilisateurRepository.findById(id).get();
    }

    @Override
    public Utilisateur update_user(Long id, Utilisateur utilisateur) {
        Utilisateur user = utilisateurRepository.findById(id).get();
        user.setEmail(utilisateur.getEmail());
        user.setGenre(utilisateur.getGenre());
        user.setLogin(utilisateur.getLogin());
        user.setNom(utilisateur.getNom());
        user.setPrenom(utilisateur.getPrenom());
        user.setTelephone(utilisateur.getTelephone());
        return utilisateurRepository.save(user);
    }

    @Override
    public void delete_user(Long id) {
         utilisateurRepository.deleteById(id);
    }
    
}

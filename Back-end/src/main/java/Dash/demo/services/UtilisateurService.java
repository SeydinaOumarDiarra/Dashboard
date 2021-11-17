/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dash.demo.services;

import Dash.demo.models.Utilisateur;
import org.springframework.stereotype.Service;

/**
 *
 * @author seydinaoumar.diarra
 */
public interface UtilisateurService {
    
    //Gestion utilisateur
    public Utilisateur add_user(Utilisateur utilisateur);
    public Utilisateur afficher_user_by_id(Long id);
    public Utilisateur update_user(Long id, Utilisateur user);
    public void delete_user(Long id);
}

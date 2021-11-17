/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dash.demo.services;

import Dash.demo.models.Apprenant;
import Dash.demo.models.Formateur;
import java.util.List;

/**
 *
 * @author seydinaoumar.diarra
 */
public interface FormateurService {
    
    //Gestion formateur
    public List<Formateur> list_formateur();
    public Formateur add_formateur(Formateur formateur);
    public Formateur afficher_formateur_by_id(Long id);
    public Formateur update_formateur(Long id, Formateur formateur);
    public void delete_formateur(Long id);
}

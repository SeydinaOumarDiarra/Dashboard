/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dash.demo.services;

import Dash.demo.models.Apprenant;
import java.util.List;

/**
 *
 * @author seydinaoumar.diarra
 */
public interface ApprenantService {
    //Gestion apprenant
    public Apprenant add_apprenant(Apprenant apprenant);
    
    public Apprenant update_apprenant(Long id, Apprenant apprenant);

    public List<Apprenant> list_apprenant();

    public Apprenant afficher_apprenant_by_id(Long id);

    public void delete_apprenant(Long id);
}

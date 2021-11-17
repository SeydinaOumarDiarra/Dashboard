/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dash.demo.services;

import Dash.demo.models.Liste_presence;
import java.util.List;

/**
 *
 * @author seydinaoumar.diarra
 */
public interface Liste_presenceService {
    
     //Gestion listePresence
    public Liste_presence add_listePresence(Liste_presence listePresence);
    public Liste_presence afficher_listePresence_by_id(Long id);
    public List[] liste_presence_find_by_year();
    public List[] liste_presence_find_by_month(String year);
    public List[] liste_presence_find_by_date(String month);
    public List[] liste_presence_find_by_day(String day);
}

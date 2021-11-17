/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dash.demo.services;

import Dash.demo.models.Administrateur;
import java.util.List;

/**
 *
 * @author seydinaoumar.diarra
 */
public interface AdministrateurService {
    
     //Gestion administrateur
    public Administrateur add_admin(Administrateur administrateur);
    
    public Administrateur update_admin(Long id, Administrateur administrateur);

    public List<Administrateur> list_admin();

    public Administrateur afficher_admin_by_id(Long id);

    public void delete_admin(Long id);
    
     //Authentification
    public Administrateur authentification(String username, String password);
    public Administrateur update_password(Long id, Administrateur administrateur);
}

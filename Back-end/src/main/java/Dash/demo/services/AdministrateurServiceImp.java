/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dash.demo.services;

import Dash.demo.models.Administrateur;
import Dash.demo.models.Utilisateur;
import Dash.demo.repositories.AdministrateurRepository;
import Dash.demo.repositories.UtilisateurRepository;
import java.util.List;
import javax.persistence.NoResultException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author seydinaoumar.diarra
 */
@Service
public class AdministrateurServiceImp implements AdministrateurService {

    @Autowired
    private AdministrateurRepository adminRepository;
    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Override
    public Administrateur add_admin(Administrateur administrateur) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Administrateur update_admin(Long id, Administrateur administrateur) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Administrateur> list_admin() {
         return adminRepository.findAll();
    }

    @Override
    public Administrateur afficher_admin_by_id(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void delete_admin(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Administrateur authentification(String username, String password) {
         try {
            Utilisateur user = utilisateurRepository.findOneByLoginAndPassword(username, password);
            Long id = user.getId();
            Administrateur admin =  adminRepository.findById(user.getId()).get();            
            return admin;
        } catch (NoResultException e) {
            return null;
        }
    }

    @Override
    public Administrateur update_password(Long id, Administrateur administrateur) {
        Administrateur admin = adminRepository.findById(id).get();
        admin.setUser(administrateur.getUser());
        return adminRepository.save(admin);
    }
    
}

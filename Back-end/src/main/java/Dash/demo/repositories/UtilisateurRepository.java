/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dash.demo.repositories;

import Dash.demo.models.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author seydinaoumar.diarra
 */
public interface UtilisateurRepository extends JpaRepository <Utilisateur, Long> {
    Utilisateur findOneByLoginAndPassword(String login,String password);
}

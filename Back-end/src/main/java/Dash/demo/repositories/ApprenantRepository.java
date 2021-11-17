/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dash.demo.repositories;

import Dash.demo.models.Apprenant;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author seydinaoumar.diarra
 */
public interface ApprenantRepository extends JpaRepository <Apprenant, Long> {
    
}

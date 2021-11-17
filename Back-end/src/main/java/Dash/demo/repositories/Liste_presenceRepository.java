/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dash.demo.repositories;

import Dash.demo.models.Liste_presence;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author seydinaoumar.diarra
 */
public interface Liste_presenceRepository extends JpaRepository <Liste_presence, Long> {
    @Query("SELECT DISTINCT DATE_FORMAT(l.date_liste, '%d-%m-%Y') FROM Liste_presence AS l WHERE DATE_FORMAT(l.date_liste, '%M-%Y') IN (:month) GROUP BY l.date_liste ORDER BY l.date_liste DESC")
    List [] findByDate_liste(@Param("month") String month);
    
    @Query("SELECT DISTINCT DATE_FORMAT(l.date_liste, '%M-%Y') FROM Liste_presence AS l WHERE DATE_FORMAT(l.date_liste, '%Y') IN (:year) GROUP BY l.date_liste ORDER BY l.date_liste DESC")
    List [] findByMonth_liste(@Param("year") String year);
    
    @Query("SELECT DISTINCT DATE_FORMAT(l.date_liste, '%Y') FROM Liste_presence AS l GROUP BY l.date_liste ORDER BY l.date_liste DESC")
    List [] findByYear_liste();
    
    @Query("SELECT l FROM Liste_presence AS l WHERE DATE_FORMAT(l.date_liste, '%d-%m-%Y') IN (:day)")
    List [] findByDay_liste(@Param("day") String day);
}

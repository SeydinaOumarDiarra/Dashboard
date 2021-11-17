/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dash.demo.models;

import java.io.Serializable;
import java.sql.Time;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author seydinaoumar.diarra
 */
@Entity
@Table(name="Liste_presence")
public class Liste_presence implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "date_liste")
    private Date date_liste;
    @Column(name = "heure_arrive")
    private Time heure_arrive;
    @Column(name = "heure_depart")
    private Time heure_depart;
    
    @ManyToOne
    private Administrateur admin;
    
    @ManyToOne
    private Apprenant app;

    public Administrateur getAdmin() {
        return admin;
    }

    public void setAdmin(Administrateur admin) {
        this.admin = admin;
    }

    public Apprenant getApp() {
        return app;
    }

    public void setApp(Apprenant app) {
        this.app = app;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate_liste() {
        return date_liste;
    }

    public void setDate_liste(Date date_liste) {
        this.date_liste = date_liste;
    }

    public Time getHeure_arrive() {
        return heure_arrive;
    }

    public void setHeure_arrive(Time heure_arrive) {
        this.heure_arrive = heure_arrive;
    }

    public Time getHeure_depart() {
        return heure_depart;
    }

    public void setHeure_depart(Time heure_depart) {
        this.heure_depart = heure_depart;
    }
}

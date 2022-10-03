/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package hr.management.system;

import javax.swing.Icon;

/**
 *
 * @author yongxingnie
 */
public class Employee {
    private String name;
    private int ID;
    private int age;
    private String gender;
    private int startDate;
    private String level;
    private String teamInfo;
    private String positionTitle;
    private String cellPhoneNumber;
    private String emailAddress;
    private Icon photo;

    public void setName(String name) {
        this.name = name;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setStartDate(int startDate) {
        this.startDate = startDate;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public void setTeamInfo(String teamInfo) {
        this.teamInfo = teamInfo;
    }

    public void setPositionTitle(String positionTitle) {
        this.positionTitle = positionTitle;
    }

    public void setCellPhoneNumber(String cellPhoneNumber) {
        this.cellPhoneNumber = cellPhoneNumber;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public void setPhoto(Icon photo) {
        this.photo = photo;
    }

    public String getName() {
        return name;
    }

    public int getID() {
        return ID;
    }

    public int getAge() {
        return age;
    }

    public String getGender() {
        return gender;
    }

    public int getStartDate() {
        return startDate;
    }

    public String getLevel() {
        return level;
    }

    public String getTeamInfo() {
        return teamInfo;
    }

    public String getPositionTitle() {
        return positionTitle;
    }

    public String getCellPhoneNumber() {
        return cellPhoneNumber;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public Icon getPhoto() {
        return photo;
    }
    // todo: throw exceptions if not a right type input.
    
    public static void main(String[] args) {
        // TODO code application logic here
    
    }
}

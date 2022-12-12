/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package tablecreation;

/**
 *
 * @author yongxingnie
 */
public class TableCreation {

    /**
     * @param args the command line arguments
     */
    
    private String name;
    private String temperature;
    private String pulse;
    private String parameter;
        
    public void setName(String name){
        this.name=name;
    }
        
    public String getName(){
        return name;
    }

    public String getTemperature() {
        return temperature;
    }

    public String getPulse() {
        return pulse;
    }

    public String getParameter() {
        return parameter;
    }

    public void setTemperature(String temperature) {
        this.temperature = temperature;
    }

    public void setPulse(String pulse) {
        this.pulse = pulse;
    }

    public void setParameter(String parameter) {
        this.parameter = parameter;
    }
    
    
    
    public static void main(String[] args) {
        // TODO code application logic here
    
    }
    
}

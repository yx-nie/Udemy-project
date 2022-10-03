/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package hr.management.system;
import java.util.ArrayList;

/**
 *
 * @author yongxingnie
 */
public class HRManagementSystem {

    /**
     * @param args the command line arguments
     */
    private ArrayList<Employee> employeeRecord;
    
    public HRManagementSystem(){
        this.employeeRecord=new ArrayList<Employee>();
    }

    public ArrayList<Employee> getEmployeeRecord() {
        return employeeRecord;
    }

    public void setEmployeeRecord(ArrayList<Employee> employeeRecord) {
        this.employeeRecord = employeeRecord;
    }
    
    public Employee addRecords(){
        Employee employee=new Employee();
        employeeRecord.add(employee);
        return employee;
    
    }
    
    //todo: delete record
    
    
    
    
    
    public static void main(String[] args) {
        // TODO code application logic here
    }
    
}

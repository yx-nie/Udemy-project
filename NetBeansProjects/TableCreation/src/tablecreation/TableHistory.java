/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package tablecreation;

import java.util.ArrayList;
/**
 *
 * @author yongxingnie
 */

public class TableHistory {
    
    private ArrayList<TableCreation> table;
    
    public TableHistory(){
        this.table=new ArrayList<TableCreation>();
        
    }
    
    public ArrayList<TableCreation> getTableHistory(){
        return table;
    }
    
    public void setTableHistory(ArrayList<TableCreation> table){
        this.table= table;
    }
    
    public TableCreation addTableHistory(){
        TableCreation tc = new TableCreation();
        table.add(tc);
        return tc;
    }

    public void deleteTableHistory(TableCreation tc2) {
        table.remove(tc2);
    }
    
}

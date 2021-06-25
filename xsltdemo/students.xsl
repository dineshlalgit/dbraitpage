<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/class">
                <html>
                
                <body bgcolor="#CAD5E2">
                <center>
                <h2>Student Table</h2> 

                
                <table border="1">
                  
                        <tr>
                            <th>Roll NO</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Semester</th>
                            <th>Subject</th>
                        </tr>
                  
                    
                        <xsl:for-each select="student">
                        <tr>
                            <td><xsl:value-of select="rollno" /></td>
                            <td><xsl:value-of select="name" /></td>
                            <td><xsl:value-of select="dept" /></td>
                            <td><xsl:value-of select="sem" /></td>
                            <td><xsl:value-of select="subject" /></td>
                            
                        </tr> 
                        </xsl:for-each>     
                    
                </table>
               </center>
                </body>
                </html>


    </xsl:template>
    
</xsl:stylesheet>
<html> 
<head> 
<title>Input form</title> 
</head> 
<body> 


<!-- Search results ??? -->
<cfsearch  
    name = "codecoll_results" 
    collection = "CodeColl" 
    criteria = "#Form.criteria#" 
    contextPassages = "1" 
    contextBytes = "300" 
    maxrows = "100"> 


<h2>Search Results</h2> 
<cfoutput> 
Your search returned #codecoll_results.RecordCount# file(s). 
</cfoutput> 
 
<cfoutput query="codecoll_results"> 
    <p> 
    File: <a href="#URL#">#Key#</a><br> 
    Document Title (if any): #Title#<br> 
    Score: #Score#<br> 
    Summary: #Summary#<br> 
    Highlighted Summary: #context#</p> 
</cfoutput> 


</cfform> 
</body> 
</html>
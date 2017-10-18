<html> 
<head> 
<title>Input form</title> 
</head> 
<body> 


<!-- - Specify the action page in the form tag. 
	The form variables will pass to this page when the form is submitted. -->
<cfform action="actionpage.cfm" method="post"> 



<!--  Text box.   -->
<p> 
Your entry has been successfully submitted! <cfinput type="Text" name="comments">
</p> 



<!-- submit button  -->
<cfinput type="Submit" name="SubmitForm" value="Submit"> 





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
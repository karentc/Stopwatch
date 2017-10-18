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

</cfform> 
</body> 
</html>
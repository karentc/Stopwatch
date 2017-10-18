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
New blog entry: <cfinput type="Text" name="name" size="10" maxlength="10"> 
</p> 



<!-- submit button  -->
<cfinput type="Submit" name="SubmitForm" value="Submit"> 

</cfform> 
</body> 
</html>
//Selecte Drop Down values
   var selectedperform = $("select[title='columnname']").find("option:selected").text();


//set people picker values

 var _PeoplePicker = $("div[title='columnname']");
  var _PeoplePickerTopId = _PeoplePicker.text(getdata);
$('a[title="Check Names"]').click();



//Get PeoplPicker values

               var _PeoplePicker = $("div[title='UserDefine']");
               //_PeoplePicker[0].childElementCount
                var getpeopleid  = _PeoplePicker[0].firstElementChild.getElementsByTagName("div")[0].getAttribute("key");
                var user = getpeopleid.split("\\")[0] +"\\"+getpeopleid.split("\\")[1];



//////////////////////////////
Get Form field value in Display Form (DispForm.aspx):

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" type="text/javascript"></script>
 
<script language="javascript" type="text/javascript">
  
  $(document).ready(function() {
     var fldValue = $('h3:contains("Last Name")').closest('td').next('td').text();
     alert(fldValue.trim());
   });
 
</script>


/////////////////
Get Form field value in Edit Form (EditForm.aspx):

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" type="text/javascript"></script>
<script language="javascript" type="text/javascript">
  
  $(document).ready(function() {
var fldValue = $("input[title*='Last Name']").val();
alert(fldValue.trim());
});
 
</script>




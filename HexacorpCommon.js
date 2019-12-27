//Selecte Drop Down values
   var selectedperform = $("select[title='columnname']").find("option:selected").text();



//set people picker values (sharepoint 2013 above)

 var _PeoplePicker = $("div[title='columnname']");
  var _PeoplePickerTopId = _PeoplePicker.text(getdata);
$('a[title="Check Names"]').click();



//Get PeoplePicker vales(sharepoint 2010)

var ppname =document.getElementsByClassName("ms-formbody");
var app =  ppname[0].innerText;

output:
     Rathika Ramalingam



//Get PeoplPicker values(sharepoint 2013 above)

               var _PeoplePicker = $("div[title='ColumnName']");
               //_PeoplePicker[0].childElementCount
                var getpeopleid  = _PeoplePicker[0].firstElementChild.getElementsByTagName("div")[0].getAttribute("key");
                var user = getpeopleid.split("\\")[0] +"\\"+getpeopleid.split("\\")[1];
output : 
        "i:0#.w|elementis\rr920980"



//get people picker value (sharepoint 2013 above)

var _PeoplePicker = $("div[title='ColumnName']");
var _peopleloginname = _PeoplePicker[0].getElementsByTagName("div")[0].getAttribute("displaytext");

output:
     Rathika Ramalingam



//Get Form field value in Display Form (DispForm.aspx)(sharepoint 2013 above):

<script language="javascript" type="text/javascript">
  
  $(document).ready(function() {
     var fldValue = $('h3:contains("Last Name")').closest('td').next('td').text();
     alert(fldValue.trim());
   });
 
</script>




//Get Form field value in Edit Form (EditForm.aspx)(sharepoint 2013 above):

<script language="javascript" type="text/javascript">
  
  $(document).ready(function() {
var fldValue = $("input[title*='Last Name']").val();
alert(fldValue.trim());
});
 
</script>




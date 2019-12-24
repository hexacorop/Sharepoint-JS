//Selecte Drop Down values
   var selectedperform = $("select[title='columnname']").find("option:selected").text();



//Get PeoplPicker values

               var _PeoplePicker = $("div[title='UserDefine']");
               //_PeoplePicker[0].childElementCount
                var getpeopleid  = _PeoplePicker[0].firstElementChild.getElementsByTagName("div")[0].getAttribute("key");
                var user = getpeopleid.split("\\")[0] +"\\"+getpeopleid.split("\\")[1];




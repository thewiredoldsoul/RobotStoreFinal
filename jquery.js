setTimeout(function() {
    $('#preloader').fadeOut('slow', function() {
      $(this).remove();
    });
  }, 1700);



// var myVar;

// function myTimeout() {
//     myVar = setTimeout(showPage(), 3000);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("myDiv").style.display = "block";
// }

     /* TODO: Move To js file */
      /*********************************************************
       *
       *   Test Checkboxes/Radio Buttons Script
       *
       *********************************************************/
       //loop through each form and handle submit event 
       for (var i=0;i<document.forms.length;i++) {
        var form = document.forms[i];
        form.addEventListener('submit', function(e){
          e.preventDefault();
          var results = '';
         // loop through all checkboxes to see if checked
         var checkboxes = form.querySelectorAll("input[type='checkbox']");
         for(var k = 0; k < checkboxes.length; k++) {
           results += checkboxes[k].id + '=' + checkboxes[k].checked + '\n';
         }
         // loop through all radio butotns to display value
         var radiobuttons = form.querySelectorAll("input[type='radio']:checked");
         for(var m = 0; m < radiobuttons.length; m++) {
           results += radiobuttons[m].name + '=' + radiobuttons[m].value + '\n';
         }
         // alert results
         console.log(results);
       });
     }

  $().tooltip();
//   $().ready(myFunction())
  function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("robots");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

$("[rel='tooltip']").tooltip();

            $('#hover-img .thumbnail').hover(

                    function () {
                        $(this).find('.caption').slideDown(250);
                        $(this).find('.caption-btm').hide(250);
                    },

                    function () {
                        $(this).find('.caption').slideUp(250);
                        $(this).find('.caption-btm').show(250);
                    });
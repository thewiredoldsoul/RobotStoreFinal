// $('#contactForm').change(function() {
//     (`This is from an Input `+$(this).val());
//     $(this).addClass('Highlight');
//   });



     /* TODO: Move To js file */
      /*********************************************************
       *
       *   Test Checkboxes/Radio Buttons Script
       *
       *********************************************************/
       // loop through each form and handle submit event 
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
         alert(results);
       });
     }

     var robo = document.querySelector('#robo1').createShadowRoot();
     /*Step1*/
     let prdTemplate = document.querySelector('#producttemplate');
     /*Step2*/
     let clone = document.importNode(prdTemplate.content, true);
     /*Step3*/
   
     clone.querySelector('#pimage').src = 'images/roboDog.png';
     clone.querySelector('#lblName').textContent = 'R.E.T';
    
    /*Step4*/
     robo.appendChild(clone);
     let userTemplate = document.querySelector('#user');
     let userClone = document.importNode(userTemplate.content, true);
     document.body.appendChild(userClone);
       let addressTemplate = document.querySelector('#address');
       let addressClone = document.importNode(addressTemplate.content, true);
     document.body.appendChild(addressClone);
     

     $("p#i3").hover.tooltip({
      content: "Experience powerful performance and seamless computing for your everyday tasks. That includes improved productivity, smooth streaming, and brilliant HD entertainment with immersive, full-screen 4K and 360-degree viewing."
    });
     
    $( "p#i5" ).tooltip({
      content: "With the power and responsiveness of Intel® Turbo Boost Technology you can spend more time doing and less time waiting. Create, edit, and share 4K content with ease, and enjoy immersive, full-screen 4K and 360 experiences."
    });

    $( "#i5" ).tooltip({
      content: "Equipped with Intel® Turbo Boost Technology 2.0, your computer will have the power and responsiveness to help your productivity soar. Experience amazing gaming performance, seamlessly edit and share 360 video, and enjoy fantastic 4K Ultra HD entertainment– all with the lightning speed data transfers of Thunderbolt™ 3 technology."
    });

    $( document ).tooltip();
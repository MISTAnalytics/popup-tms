<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<style>

       
#fixed-form-container{
    position: fixed;
    z-index:8888;
    bottom: 0px;
    left: 3%;
    width: 94%;
    text-align: center;
    margin: 0;

}

#fixed-form-container .buttonab:before {
   content: "+ ";
}

#fixed-form-container .expandedab:before {
    content: "- ";
}

#fixed-form-container .buttonab {
  font-size:1.1em;
cursor: pointer;
margin-left: auto;
  margin-right: auto;
border: 2px solid #009ace;
-moz-border-radius: 5px;
-webkit-border-radius: 5px;
border-radius: 5px 5px 0px 0px;
padding: 5px 20px 5px 20px;
background-color: #009ace;
color: #fff;
display: inline-block;
text-align: center;
text-decoration: none;
  -webkit-box-shadow: 4px 0px 5px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 4px 0px 5px 0px rgba(0,0,0,0.3);
  box-shadow: 4px 0px 5px 0px rgba(0,0,0,0.3);
}

#fixed-form-container .bodyab{
    background-color: #fff;
    border-radius: 5px;
    border: 2px solid #009ace;
    margin-bottom: 16px;
    padding: 10px;
    -webkit-box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.3);
    box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.3);
}

@media only screen and (min-width:768px){
    #fixed-form-container .buttonab{
       margin: 0;

    }
    #fixed-form-container {
        left: 20px;
        width: 390px;
        text-align: left;
    }

    #fixed-form-container .bodayab{
        padding: 30px;
        border-radius: 0px 5px 5px 5px;
    }
}
       </style>

<script>  
jQuery('body').append('<section id="fixed-form-container"> <div class="buttonab">Text which invites visitors to click?</div> <div class="bodyab"> <h3 style="font-size: 25px; color: #009ace; line-height: 1.00; margin-bottom:10px;">Title Here</h3><img alt="Mobile image" src="https://mistanalytics.nl/wp-content/uploads/2017/07/logo_zeer_klein.png" style="width:100%; margin-bottom:10px;"><p>Additional explanatory text to add here.</p><a href="/over-mist-analytics/" class="btn-blue">CTA Button with text></a></button></div> </section>');

jQuery("#fixed-form-container .bodyab").hide();
jQuery("#fixed-form-container .buttonab").click(function () {
        jQuery(this).next("#fixed-form-container div").slideToggle(400);
        jQuery(this).toggleClass("expandedab");
    });  
</script>

<script>

setTimeout(function(){
var credits = jQuery('.class').text();
credits = parseInt(bestel);
console.log('1');
if (aantal > 10)
{
console.log('2');
jQuery('head').append('<link href="https://sorgalla.com/lity/dist/lity.css" rel="stylesheet"/> <script src="https://sorgalla.com/lity/dist/lity.js"></script><style>.lity{background:rgba(255, 255, 255, 0.7)!important; z-index:999999;}.buttonenquete{margin-top:18px; width:150px; text-align:center; float: center; padding: 0 15px; background: #228B22!important; height: 30px; line-height: 28px; color: #fff; letter-spacing: 1px; font-weight: 500; font-family: Arial; text-decoration: none; font-size: 16px; -webkit-border-radius: 10px; border-radius: 10px;border:none; cursor:pointer;}</style>');
  
var enquetealgehad = localStorage.getItem('enquete'); 
if (enquetealgehad == 'ja')
{console.log('3');
}
else
{ 
console.log('4');  
dataLayer.push({'event' : 'overzicht-pageview'});
jQuery('body').append('<a id="enqueteopenen" class="btn" href="#inline" data-lity="" style="display:none;"></a>');
jQuery('body').append('<div id="inline" style="overflow:auto;background:#FFF;padding:20px;width:450px;max-width:100%;" class="lity-hide"><div class="onlinenr" style="float:none;">Plaats hier tekst. <br/> Of hier</div>);
setTimeout(function(){jQuery('#enqueteopenen').click();}, 800);
  
jQuery(document).on("click", ".lity-wrap",function() {
 localStorage.setItem('enquete','ja'); 
});    
  
jQuery('.buttonenquete').on( "click", function() {
  jQuery('.lity-wrap').click();
  dataLayer.push({ 'event' : 'Bestel iets popup'});
  jQuery('.btn.interaction').click();
});
 
}
}
}, 3000);

</script>

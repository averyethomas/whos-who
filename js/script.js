
  $(document).ready(function() {
    $(".tabLink").each(function(){
      $(this).click(function(){
        tabeId = $(this).attr('id');
        $(".tabLink").removeClass("activeLink");
        $(this).addClass("activeLink");
        $(".tabcontent").addClass("hide");
        $("#"+tabeId+"-1").removeClass("hide")   
        return false;	  
      });
    });
    // We'll target all AREA elements with alt tags (Don't target the map element!!!)
    $('area[alt]').qtip(
    {
        content: {
            attr: 'alt' // Use the ALT attribute of the area map for the content
        },
        style: {
            classes: 'ui-tooltip-tipsy ui-tooltip-shadow'
        }
    });
});

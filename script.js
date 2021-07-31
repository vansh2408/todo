$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
//delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove()
    });
    event.stopPropagation();
});
//Add new TODO
$("input[type='text']").keypress(function(event){
    if(event.which === 13){          //Enter key
        //grabbing new input text
        var todoText = $(this).val();
        //removing text from add new todo
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})
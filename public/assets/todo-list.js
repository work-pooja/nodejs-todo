
$(document).ready(function(){

    $('form').on('submit', function(){
        var item = $('form input');
        var todo = {item: item.val(), complete: false};
        $.ajax({
          type: 'POST',
          url: '/todo',
          contentType: "application/json",
          data: JSON.stringify(todo),
          dataType: 'JSON',
          success: function(data){
           $("#todo-list").append('<li><div> <input class="form-check-input" type="checkbox" id="' + data.id + '" name="option1" value="' + data.item + '" unchecked> <label class="form-check-label" >' + data.item + '</label> </div> </li>');

          }
        });
  
        return false;
  
    });
  
    $("input:checkbox").change(function() {
        var id = $(this).attr("id")
        var value =  $(this).attr("value")
        var check = $(this).is(":checked") ? 1 : 0;
        var todo_complete = { strID: id, strVal: value, strState: check};
            $.ajax({
                type: 'PUT',
                url: '/todo/' + id,
                contentType: "application/json",
                data: JSON.stringify(todo_complete),
                dataType: 'JSON',
                success: function(data) {
                  $("#item-" + data.id).remove();
                  // location.reload
                  if(data.complete){
                    $("#todo-done").append('<li id="' + data.id + '" ><div> <input class="form-check-input" type="checkbox" id="' + data.id + '" name="option1" value="' + data.item + '" checked> <label class="form-check-label" >' + data.item + '</label> </div> </li>');
                  } else {
                    $("#todo-list").append('<li id="' + data.id + '" ><div> <input class="form-check-input" type="checkbox" id="' + data.id + '" name="option1" value="' + data.item + '" unchecked> <label class="form-check-label" >' + data.item + '</label> </div> </li>');
                  }
                  
                }
            });
        

        
    });
  
  });
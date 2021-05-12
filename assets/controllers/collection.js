function putDeleteButton($form) {
    let $deleteButton = $('<div  id="button_remove_users"><button type="button" class="btn btn-danger">Supprimer</button></div>')
    $form.append($deleteButton)
    $form.append('<img id="img-pres" src="" alt="">')
    $deleteButton.on('click', function () {
        $form.remove()
    })
}

jQuery(document).ready(function () {
    $('#topic-list').find('.topic').each(function () {
        putDeleteButton($(this));
    })
    jQuery('.add-another-collection-widget').on('click', (e) => {
        var list = $($(e.target).data('list-selector'));
        var counter = list.data('widget-counter') || list.children().length;
        var newWidget = list.data('prototype');
        newWidget = newWidget.replace(/__name__/g, counter);
        counter++;
        list.data('widget-counter', counter);
        var newElem = jQuery(list.data('widget-tags')).html(newWidget);
        console.log(typeof newWidget)
        $('#actualites_form_topic_0_illustration').on('change',(event) => {
            src = URL.createObjectURL(event.target.files[0]);
             $('#img-pres').attr('src',src)
             src.onload = function() {
               URL.revokeObjectURL(src) // free memory
             }
         })
        newElem.addClass('card')
        newElem.addClass('mt-4')
        newElem.css('padding','2em')
        newElem.css('color','black')
        putDeleteButton(newElem);
        newElem.appendTo(list);
    });
});

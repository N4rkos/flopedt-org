$(document).ready(function () {
    $('.contact__form').submit(function (event) {
        const submitBtn = $('button[type=submit]');
        const contactName = $('input[name=contact__name]');
        const contactMail = $('input[name=contact__mail]');
        const contactMessage = $('textarea[name=contact__message]');
        const contactResult = $('.contact__result');
        submitBtn.html(`Prise en compte de la demande de contact...`);
        const formData = {
            'contact__name': contactName.val(),
            'contact__mail': contactMail.val(),
            'contact__message': contactMessage.val()
        };
        // process the form
        $.ajax({
            type: 'POST',
            url: CONTACT_URL,
            data: formData,
            dataType: 'json',
            encode: true,
            success: function(data){
                contactResult.text(data.payload);
                if(data.response === "SUCCESS") {
                    contactResult.css('color',"#00cc00" );
                    contactName.val("");
                    contactMail.val("");
                    contactMessage.val("");
                }else {
                    contactResult.css('color',"#FF0000" );
                }
                submitBtn.html(`Envoyer`);
            },
        });
        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });
});
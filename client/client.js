/**
 * Created by arashsaidi on 27/06/14.
 */

/**
 * Templates
 */
Template.messages.messages = function () {
    return Messages.find({}, { sort: { time: -1 }});
};

Template.input.events = {
    'keydown input#message' : function (event) {
        if (event.which == 13) { // 13 is the enter key event
            var name = document.getElementById('name');
            var message = document.getElementById('message');

            if (message.value != '') {
                Messages.insert({
                    name: name.value,
                    message: message.value,
                    time: Date.now
                });

                document.getElementById('message').value = '';
            }
        }
    }
};

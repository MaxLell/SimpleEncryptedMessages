/**
 * Checks if the url contains a hash value. If so, the message is
 * to be decoded and displayed. This check is executed first.
 */
const { hash } = window.location;
const message = atob(hash.replace('#', ''));

if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

/**
 * This code is executed when the url does NOT contain a hash value.
 * This is the functionality for entering your own custom message, which
 * is to be encoded
 */
document.querySelector('form').addEventListener('submit', event => {
    /**
     * by default the browser attempts to send the data from the submit
     * to a backend server. In order to prevent this we need to disable
     * this functionality. For the current application we do not have 
     * such a backend server.
     */
    event.preventDefault();

    /**
     * When a new message has been entered, the element's 
     * visibility is swapped.
     */
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    /**
     * Retrieve the text input from the input form
     */
    const input = document.querySelector('#message-input');
    const encoded = btoa(input.value);

    const linkInput = document.querySelector('#link-input');
    /**
     * Adds the encoded string after the # in the url
     */
    linkInput.value = `${window.location}#${encoded}`;

    /**
     * Automatically selects the output string - so the user now 
     * only needs to hit CTRL + C
     */
    linkInput.select();
});
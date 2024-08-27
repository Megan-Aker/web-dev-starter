window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    const hello = sayHello();
    const greet = greetUser('Caden');
    console.log(hello);
    console.log(greet);
}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
export function sayHello() {
    return 'hello';
}

/**
 * This function returns a greeting message for a user.
 * If the name is not provided or is empty, it returns a default greeting.
 * @param {string} name - The name of the user to greet.
 * @return {string} A personalized greeting message or 'Hello, Guest!'
 */
export function greetUser(name) {
    if (!name) {
        return 'Hello, Guest!';
    }
    return `Hello, ${name}!`;
}

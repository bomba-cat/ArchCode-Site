//Messy atm but does its job
//Could be transformed in a way where it could be used for every subtitle (including the underscore)
//Could be interesting

const useTypewriter = (
    html_element,
    text,
    repeat=false,
    continue_infinitely=false,
    expected_time=3000,
    initial_delay=200,
    default_value=""
    ) => {
    const timeout = Math.min(expected_time/text.length)
    var i = 0
    setTimeout(() => {
        const writer = setInterval(() => {
            if (i !== text.length || continue_infinitely) {
                html_element.innerHTML += text[i % text.length]
                i++
            } else if (repeat) {
                setTimeout('', timeout)
                html_element.innerHTML = default_value
                i = 0
            } else {
                clearInterval(writer)
                html_element.innerHTML = default_value
                return
            }
        }, timeout)
    }, initial_delay)
}

//rewrite text if viewport changes too much in width
// jank
// const handleResize = () => {
//     const current_width = window.innerWidth;
//     const width_difference = Math.abs(current_width - previous_width);

//     if (width_difference >= 200) {
//         greeter.innerHTML = '';
//         blink_thing_someone_rename_pls.innerHTML = '';

//         clearTimeout(queue)

//         const queue = setTimeout(() => {
//             useTypewriter(greeter, '[▓▓▓▓▓▓▓▓▓]', false, false, 1000, 0, "$> ");
//             useTypewriter(greeter, greeting, false, false, 1200, 2000, "$> " + greeting);
//             useTypewriter(blink_thing_someone_rename_pls, '_', true, false, 650, 1000);
//         }, 3000)
        

//         previous_width = current_width;
//     }
// }

// let previous_width = window.innerWidth;
// window.addEventListener('resize', handleResize);

const mobile_device = window.innerWidth <= 660

const greeter = document.getElementById('welcome')
const greeting = mobile_device ? "Hi! CLD" : "Welcome to CLD"

const blink_thing_someone_rename_pls = document.getElementById('blinking')

useTypewriter(greeter, mobile_device ? '[▓▓▓▓▓▓]' : '[▓▓▓▓▓▓▓▓▓]', false, false, 1000, 0, "$> ") //Loading Bar at the start
useTypewriter(greeter, greeting, false, false, 1200, 1800, "$> " + greeting) //Actual Text
useTypewriter(blink_thing_someone_rename_pls, '_', true, false, 650, 1000) //Blinking input bar whatever
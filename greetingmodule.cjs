exports.myGreetings = () => {
    const name = 'Jeram';
    const date = new Date();
    const hours = date.getHours();
    let greetings;

    if (hours >= 0 && hours < 4) {
        greetings = `Good Dawn ${name}`;
    } else if (hours >= 4 && hours < 12) {
        greetings = `Good Morning ${name}`;
    } else if (hours >= 12 && hours < 18) {
        greetings = `Good Afternoon ${name}`;
    } else {
        greetings = `Good Evening ${name}`;
    }
    
    return greetings;
}
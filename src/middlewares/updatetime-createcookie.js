


export const lastvisitcookie = (req, res, next) => {

    // Check if the 'lastvisit' cookie exists in the incoming request
    if (req.cookies.lastvisit) {

        // If the cookie exists, convert the stored date string to a JavaScript Date object
        // Then, convert the date to a more readable string format using 'toLocaleString()'
        // Store this formatted date in 'res.locals.lastvisit'
        res.locals.lastvisit = new Date(req.cookies.lastvisit).toLocaleString();
    }

    // If the 'lastvisit' cookie does not exist (i.e., it's the user's first visit)
    // or regardless of the above condition, set a new 'lastvisit' cookie with the current date and time
    res.cookie('lastvisit', new Date().toISOString(), {
        // Set the cookie's expiration time to 2 days (in milliseconds)
        maxAge: 2 * 24 * 60 * 60 * 1000
    });

    // Call 'next()' to pass control to the next middleware or route handler
    next();
};

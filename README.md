# TourApp
Creates a daily schedule for a Disney theme park

#Outline Notes:
    User Input:  
        Log in
        Fast passes -- This filters your selected rides into their accompanied "time slots"
        How long do you plan on staying
        Group Info - height | Mild Thrilling |  -- This filters the list immediately to these input preferences

    JSON data needed:
        "name":
        "what_it_is":
        "duration":(ride)
        "intense":
        "scope_and_scale_code":
        "when_to_go":
        "height_restriction":
        ?? "walk-time":

    Our Data additions:
        fast passes
        their choice
        major rides
        smaller rides


    backend 
        -1 get it working
        -create databases

    
    JS functions needed:
        function priority()
            //assigns priority variable to each and every ride
                //local ride priority based on 1-5 rating, then for multiple 3s make some 3.01/3.02/3.03 etc 

        function scheduleSort()
            // sorts them in order of priority
        function scheduleReset()
            clears previous schedule out of the html, and resets all variables
        function placeFP()
            //places FPs on the preliminary list
        function breaks()
            //places breaks on the preliminary list
        function timeCalculation()
            //calculate walking times
        function generateSchedule
            // generates schedule with priority in mind (and the FP/breaks blocks), and outputs the schedule to the frontend
        function favoriteCheck
            //checks if all favorites are on the list (limit to 2/3). If not, adds priority and calls genschedule again.        

    frontend 
        -look & feel
        create html & css elements
        flow charts
        wires
        functionality
        materialize-what components do we need?



text to push
# Apartment List Challenge: Family Friday

It's Friday, and it's time to get together. This React Node.js web application is a simple tool to randomly generate groups for Family Friday lunch.

Launch Family Friday app here --->[Family Friday](https://evening-plains-36201.herokuapp.com/) <---

## Usage

* An employee list is read from a default text file. 
* Click `Employee List` in the top right corner to view the employees currently on your list or to add an employee
* From `/list`, enter a new name in the text field and click `Add` to submit, see list update and updated list saved to local storage  
* When employee is added, `Group` local storage and store is reset since list is no longer valid 
* Click on `Apartment List logo`, left navbar icon, to return to home 
* Click on `Groups`  to either: view previously generated groups saved in local storage, or generate new groups if none cached
* From `/groups` view date of group generated to determine if new or if redisplayed from local storage (say if the window is closed on Friday before everyone has seen the list)
* From `/groups`, click `Reset` to clear, redirected back to home to allow user to regenerate groups 


### Limitations

Given the scope of the challenge, handling everything on the client-side made the most sense for this simple application, but it does come with its limitations: 

* Starting employee list is read from a server-side text file, removing or appending names from the client-side is not an option. Realistically, I don't foresee the need to upload a new employee list frequently, so it did not make sense to build out this feature.
* Groups must be generated from the same exact browser to utilize the data stored in local storage for the most up-to-date list. This is inconvenient and can easily become more difficult to maintain when new employees are added frequently, and/or if any employee can generate teams. 
* This implementation assumes that all employees will be present and/or will be participating in Family Friday. Someone may be out of office or have a prior engagement. Additionally, removing employees can be supported, but not the most efficiently in this client-side application.
* Group sort does not take employee department into consideration, especially if the goal is to diversify the groups each week. 
* History of group formations, and any data along with that, cannot be stored.   


### Future Improvements

To address the above limitations I would consider the following improvements: 

* Database and API - store additional data (i.e. team, attending/not-attending, previous groups history, etc), serve as one source of truth, accesible from any browser
* Admin/Employee login -  enable an admin (ea, office coordinator, HR, etc) or employees themselves to mark as not-attending and removed from the grouping list
* Maintaining the master employee list will be  more manageable, for example, and can be automated with HR's processes
* Generate different groups each week using historical data
* Allow for dynamic group sizes, for example, can choose from `Fewest Groups`, `Smallest Sized Groups`, `Groups of 4`, etc.  

This only accounts for functional features, but I can imagine additional fun features like a random restuarant picker, an ice-breaker question, etc. 


## Built With

* [React](https://reactjs.org/) - Javascript library for building user interfaces
* [React-Redux](https://redux.js.org/docs/basics/UsageWithReact.html) - State container for Javascript apps
* [Material-UI](http://www.material-ui.com/) - React components that implement Google's Material Design

## Learnings

* localStorage: I've previously utilized session storage and the redux store. While seemingly simple to implement, it was challenging at first to understand where localStorage belonged in the application and it was  a great experience to tackle something I've never attempted before
* webpack: using a common file structure (dist, public, src etc..), I initially had some issues with webpack and additionally learned more about establishing more than one static folders for webpack to find the bundle and still utilize a public folder
* fetch(): when initially prototyping the project, I used fs read/write which isn't accessible on the client for security reasons, learning to adapt and adjust quickly- discovered that using fetch would be the best way to read from a static server side file 


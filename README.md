# Apartment List Challenge: Family Friday

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Tests



### Limitations

Given the scope of the challenge, handling pretty much everything on the client-side made the most sense. While I'll go into future improvements of what a database can offer in the next section, it would be overkill to setup a database for a simple app such as this. However, there are tradeoffs: 

* Groups must be generated from the same exact browser to utilize the data stored in local storage for the most up-to-date list. This is inconvenient and can easily become more difficult to maintain when new employees are added frequently, and/or if any employee can generate teams. 
* This implementation assumes that all employees will be present and/or will be participating in Family Friday. Someone may be out of office or have a prior engagement. Additionally, removing employees can be supported, but not the most efficiently in this client-side application.
* Group sort does not take employee department into consideration, especially if the goal is to diversify the groups each week. 
* History of group formations, and any data along with that, cannot be stored.   


### Future Improvements

To account for the above limitations I would consider the following improvements: 
* Database: to store additional data like: department, attending/not-attending, previous group formations, this would serve as one source of truth to any employee who would like to generate a group, and can account if a group has already been generated 
* Admin/Employee login so someone may mark themselves as absent, or an admin (ea, office coordinator, HR, etc) could mark others as absent
* List maintentance will be  more manageable, for example, addnew employees can be automated with one of HR's onboarding processes, and an Admin for example can remove users from a list
* With historical data of groups formed, we can generate different groups each week
* Dynamic group sizes, for example, can choose from `Fewest Groups`, `Smallest Sized Groups`, `Groups of 4`, etc.  

This only accounts for core features, but can imagine additional fun features like a random restuarant picker, an ice-breaker question, etc. 


## Built With

* [React](https://reactjs.org/) - Javascript library for building user interfaces
* [React-Redux](https://redux.js.org/docs/basics/UsageWithReact.html) - State container for Javascript apps
* [Material-UI](http://www.material-ui.com/) - React components that implement Google's Material Design

## Learnings

* localStorage: I've previously utilized session storage and the redux store. While seemingly simple to implement, it was challenging at first to understand where localStorage belonged in the application and it was  a great experience to tackle something I've never attempted before
* webpack: using a common file structure (dist, public, src etc..), I initially had some issues with webpack and additionally learned more about establishing more than one static folders for webpack to find the bundle and still utilize a public folder
* fetch(): when initially prototyping the project, I used fs read/write which isn't accessible on the client for security reasons, learning to adapt and adjust quickly- discovered that using fetch would be the best way to read from a static server side file 


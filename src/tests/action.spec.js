import * as groupActions from '../store/groups'
import * as listActions from '../store/employeeList'

const groups = [ ["Alison Velasquez", "Yuliana Mcintosh", "Hamza Wiggins", "Corey Pugh", "Marvin Huff"],  ["Genevieve Zamora", "Aria Dominguez", "Camila Russo", "Reese Chaney", "Braeden Stokes"], ["Maia Cervantes", "Destinee Castaneda", "Luz Davies", "Joey Wolf", "Claire Escobar"],  ["Jeramiah Serrano", "Barrett Calhoun", "Trace Morrow", "Devan Mcdaniel", "Jamiya Watson"], ["Janessa Mayo", "Zoe Weiss", "Perla Bartlett", "Malakai Meyers", "Rosemary Salinas"],  ["Kendra Hopkins", "Joe Gregory", "Angel Cooke", "Zaiden Camacho", "Nyla Murphy"], ["Brett Stout", "Vaughn Hines", "Gloria Butler", "Jayleen Patel"],  ["Kiley Ayala", "Kale Benjamin", "Slade Gates", "Louis Wong"],  ["Gabriel Manning", "Catalina Peters", "Jordan Kane", "Amber Page"],  ["Bryanna Knapp", "Ramiro Martin", "Delaney Bishop", "Drew Mason"] ]

const list = ["Joe Gregory", "Angel Cooke", "Zaiden Camacho", "Nyla Murphy", "Brett Stout", "Vaughn Hines", "Gloria Butler", "Jayleen Patel",  "Kiley Ayala", "Kale Benjamin", "Slade Gates", "Louis Wong",  "Gabriel Manning", "Catalina Peters", "Jordan Kane", "Amber Page",  "Bryanna Knapp", "Ramiro Martin", "Delaney Bishop", "Drew Mason"]

describe ('Group actions', () => {
  it('setNewGroups should create an action to set the groups to the store', () => {
    const expectedAction = {
      type: groupActions.SET_GROUPS, 
      groups
    }
    expect(groupActions.setNewGroups(groups)).toEqual(expectedAction)
  })

  it('resetGroups should create an action to reset groups to an empty array', () => {
    const expectedAction = {
      type: groupActions.RESET_GROUPS
    }
    expect(groupActions.resetGroups()).toEqual(expectedAction)
  })
})

describe('List Actions', () => {
  it('setEmployeelist should create an action to set the employee list', () => {
    const expectedAction = {
      type: listActions.SET_LIST, 
      list
    }
    expect(listActions.setEmployeeList(list)).toEqual(expectedAction)
  })

  it('addEmployeeName should create an action to add a new name to the existing list', () => {
    const name = 'Gabrielle Sin'
    const expectedAction = {
      type: listActions.ADD_EMPLOYEE,
      name
    }
    expect(listActions.addEmployeeName(name)).toEqual(expectedAction)
  })
})


export const findGroupSize = function(groupSize){
  /* Determine if group size evenly distributes across 3-5 team sizes */
  if (groupSize%5 === 0) return groupSize/5
  else if (groupSize%4 === 0) return groupSize/4
  else if (groupSize%3 === 0) return groupSize/3;
  // If not, divide the team by 5 (rounding up), can move names to fill smaller group but cannot move names from groups of 3, for example. This ensures that no team will be fewer than 3 and more than 5. 
  else return Math.ceil(groupSize/5)
} 

export const removeExcludedNames = function(fullListArr, excludedNamesArr){
  if (fullListArr && excludedNamesArr) return fullListArr.filter(elem => !excludedNamesArr.includes(elem))
  
}

export const generateGroups = function(fullListArr, excludedNamesArr){
  if (excludedNamesArr.length) fullListArr = removeExcludedNames(fullListArr, excludedNamesArr)
  let numOfGroups = findGroupSize(fullListArr.length), namesArr = [], counter = 0, newDate = new Date();
  // Initilize array w/ the number of groups determined from findGroupSize helper fn
  for (let i=0; i<numOfGroups; i++){ 
    namesArr[i] = [];
  }
  // Randomly select names, push into groups and remove name from the unallocated list
  while (fullListArr.length){
    let randomIdx = Math.floor(Math.random() * fullListArr.length)
    // To ensure even distribution, push one to each group, reset group counter when one name has been added to each group, then remove the allocated name
    if (counter === numOfGroups) counter = 0;
    namesArr[counter].push(fullListArr[randomIdx])
    fullListArr = fullListArr.slice(0, randomIdx).concat(fullListArr.slice(randomIdx + 1))
    counter++
  }
  localStorage.setItem('date_generated', newDate)
  localStorage.setItem('groups', JSON.stringify(namesArr))
  return namesArr;
}


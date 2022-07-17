export function FilterProject(projectList, displayNumber, recordIndex, nextPage, levelSelect, subSelect) {
    
    console.log('Filter this list ->', projectList)
        
    const lev = parseInt(levelSelect) + 1;
    const num = displayNumber;
    
     //const num = () => (displayNumber == 0) ? displayNumber : 5;
    const sub = parseInt(subSelect);

        
    console.log('Filter params ->', num , recordIndex, nextPage,lev, sub)
        
    const courseFilter = projectList.filter(project => project.course_id === lev)

    // const subFilter = courseFilter;
    // const projectFilter = [];
    //if (sub <3) { const subFilter = courseFilter.filter(project => project.SubscriptionID === sub) };
    

    
    const filtered = courseFilter.splice(0,num);

    console.log ('Filtered result ->',filtered)
    

    return (filtered)
}

    
/*              Fields to filter
    Activity: "Animation",ActivityTypeID: 1
    Course: "Beginner",CourseID: 1
    Subject: "Computer science,",SubjectMatterID: 1
    Subscription: "Free",SubscriptionId: 1
    YearRange: "1-4"  YearLevelID: 1,
*/
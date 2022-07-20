export function FilterProject(projectList, displayNumber, recordIndex, nextPage, levelSelect, subSelect) {
    
    console.log('Filter this list ->', projectList)
           
    const lev = parseInt(levelSelect) + 1;
    const notZero = (num) => (num) ? num : num;//fix for initial load value?
;   const sub = parseInt(subSelect);

    console.log('Filter params ->', notZero(displayNumber) , recordIndex, nextPage,lev, sub)
        
    const courseFilter = projectList.filter(project => project.course_id === lev)

    // const subFilter = courseFilter;
    // const projectFilter = [];
    //if (sub <3) { const subFilter = courseFilter.filter(project => project.SubscriptionID === sub) };
    
    const pageList = courseFilter.splice(0,notZero(displayNumber) );

    console.log ('Filtered result ->',pageList)
    

    return (pageList)
}

    
/*              Fields to filter
    Activity: "Animation",ActivityTypeID: 1
    Course: "Beginner",CourseID: 1
    Subject: "Computer science,",SubjectMatterID: 1
    Subscription: "Free",SubscriptionId: 1
    YearRange: "1-4"  YearLevelID: 1,
*/
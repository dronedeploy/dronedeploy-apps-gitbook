# Project

**What is a Project?**

A project is a collection of multiple flight plans and maps of the same site. A project may contain flight data collected during multiple flights from various points in time.

**Contents**

* [Projects.getCurrentlyViewed](#projectsgetcurrentlyviewed)

### Projects.getCurrentlyViewed

**Overview**

Returns the project that is the currently visible to the user. This method returns only project id for now.

**Example Call**

```javascript
// Get the current one time
dronedeployApi.Projects.getCurrentlyViewed()
  .then(function(project){
    console.log(project);
  });

// Will be called each time the project changes
dronedeployApi.Projects.getCurrentlyViewed()
  .subscribe(function(project){
    console.log(project);
  });
```

**Example Response**

```json
{
  "id": "12ab34cd56ef78gh90ij12kl"
}
```

[**Full Example**](/projects/example-projects.getcurrentlyviewed.md)

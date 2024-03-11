export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    timeZone: "UTC",
  })
}


export function orderPages(course, {
  filterOutDrafts = true,
  sortByOrder = true,
} = {}){
  const orderedPages = course.reduce((acc, course) => {
    const { published } = course.data;
    // filterOutDrafts if true
    if (filterOutDrafts && !published) return acc;
    // add post
    acc.push(course);
    return acc;
  }, [])

  if (sortByOrder) {
    orderedPages.sort((a, b) => a.data.order - b.data.order);
  }

  return orderedPages;
}

export function formatCourses(course, tag, {
  filterOutDrafts = true,
  filterOutTags = true,
  sortByOrder = true,
} = {}){
  const filteredCourses = course.reduce((acc, course) => {
    const { published, tags } = course.data;
    // filterOutDrafts if true
    if (filterOutDrafts && !published) return acc;
    // filterOutTopics if true
    if (filterOutTags && !tags.includes(tag)) return acc;
    // add post
    acc.push(course);
    return acc;
  }, [])

  if (sortByOrder) {
    filteredCourses.sort((a, b) => a.data.order - b.data.order);
  }

  return filteredCourses;
}

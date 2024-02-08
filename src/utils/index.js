export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    timeZone: "UTC",
  })
}

export function formatCourses(course, tag, {
  filterOutDrafts = true,
  filterOutTags = true,
  sortByOrder = true,
} = {}){
  const filteredCourses = course.reduce((acc, course) => {
    const { published, categories } = course.frontmatter;
    // filterOutDrafts if true
    if (filterOutDrafts && !published) return acc;
    // filterOutTopics if true
    if (filterOutTags && !categories.includes(tag)) return acc;
    // add post
    acc.push(course);
    return acc;
  }, [])

  if (sortByOrder) {
    filteredCourses.sort((a, b) => a.frontmatter.order - b.frontmatter.order);
  }

  return filteredCourses;
}

export function formatPages(course, {
  filterOutDrafts = true,
  sortByOrder = true,
} = {}){
  const filteredPages = course.reduce((acc, course) => {
    const { published } = course.frontmatter;
    // filterOutDrafts if true
    if (filterOutDrafts && !published) return acc;
    // add post
    acc.push(course);
    return acc;
  }, [])

  if (sortByOrder) {
    filteredPages.sort((a, b) => a.frontmatter.order - b.frontmatter.order);
  }

  return filteredPages;
}
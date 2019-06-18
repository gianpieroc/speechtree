const createPath = (path, idToAddInRoute, id) => {
  let route = path;

  if (typeof route === 'string') {
    if (route.includes(idToAddInRoute)) {
      route = route.replace(idToAddInRoute, id);
    }
  }
  return route;
};

export default createPath;

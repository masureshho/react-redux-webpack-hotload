import _ from 'lodash';

export const replaceWithParams = (route, ...replaceParam) => {
  const listOfParams  = route.match(/:[^\s/]+/g);
  let formatedRoute = route;
  if (replaceParam.length === listOfParams.length) {
    _.forEach(replaceParam, (param) => {
      formatedRoute = formatedRoute.replace(/:[^\s/]+/, param);
    });
  }
  return formatedRoute;
};

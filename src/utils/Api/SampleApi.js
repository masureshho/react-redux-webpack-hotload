import xhttp from 'xhttp';
import config from 'config';

export function getSampleData(someId) {
  return xhttp({
    method: 'GET',
    url: `${config.api_host}/someapi/${someId}`,
    params: {},
    timeout: 30 * 1000
  });
}

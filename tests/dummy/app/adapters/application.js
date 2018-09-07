import DS from 'ember-data';
import fetch from 'fetch';
import config from '../config/environment';

const { host } = config;
const { JSONAPIAdapter } = DS;

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = host;

  async query(store, type) {
    const URL = `${this.buildURL(type.modelName)}.json`;
     return fetch(`${URL}`, {
      method: 'GET',
    }).then(blob => blob.json());
  }
}

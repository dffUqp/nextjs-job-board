import axios, { AxiosResponse } from 'axios';
import { JobsType } from '../ts/JobsTypes';

export default class jobService {
  static async getJobs(): Promise<AxiosResponse<JobsType>> {
    return await axios({
      method: 'GET',
      url: 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data',
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        'Accept-Encoding': 'application/json',
      },
    });
  }
}

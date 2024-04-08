import { ResponseStatus } from '../constants';
import { getQueryString } from '../utils/StringUtil';
import { AxiosPrivateInstance } from './axiosInstance';

export default class PodcastService {
    static async createPodcast(body) {
        try {
            const response = await AxiosPrivateInstance.post(
                `/create/post-cast`,
                body
            );
            const data = await response.data;
            if (data.status === ResponseStatus.success) return data.data;
            throw new Error(data.message);
        } catch (error) {
            return null;
        }
    }
}

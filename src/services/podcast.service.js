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
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async getListPodcast() {
        try {
            const response =
                await AxiosPrivateInstance.get(`/get-all-post-cast`);
            const data = await response.data;
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
}

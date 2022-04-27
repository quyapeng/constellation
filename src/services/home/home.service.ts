//www.fastmock.site/mock/2214fc633be6576d93ce7c1e651ab470/img/banner

https: import BaseRequest from '~/utils/request';

/**
 * 莲藕相关服务
 */
class HomeService extends BaseRequest {
	constructor() {
		super({
			// hostKey: 'API_HOST',
		});
	}

	/**
	 * 根据药品获取疾病
	 */
	getBanner() {
		return this.get({
			url: '/img/banner',
			// data: payload,
		});
	}
}

export default new HomeService();

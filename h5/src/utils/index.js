const Utils = {
	deepCopy: (obj) => {
		let map = new WeakMap();
		let dp = (obj) => {
			let result = null;
			let keys = null,
				key = null,
				temp = null,
				existObj = null;

			existObj = map.get(obj);
			// 如果这个对象已被记录则直接返回
			if (existObj) {
				return existObj;
			}
			keys = Object.keys(obj);
			result = {};
			// 记录当前对象
			map.set(obj, result);
			for (let i = 0; i < keys.length; i++) {
				key = keys[i];
				temp = obj[key];
				// 如果字段的值也是一个对象则递归复制
				if (temp && typeof temp === 'object') {
					result[key] = dp(temp);
				} else {
					// 否则直接赋值给新对象
					result[key] = temp;
				}
			}
			return result;
		}
		return dp(obj);
	}
}
export default Utils;
class Hash {
	constructor(...hashes){

		let hash = this;
		hash.indexes = [];
		hash.values = [];

		hash.get = index => {
			return hash.values[hash.indexes.indexOf(index)];
		}

		hash.indexOf = value => {
			return hash.indexes[hash.values.indexOf(value)];
		}

		if (hashes.length > 3) {
			hash.pop = () => {
				return new Hash(hash.indexes.pop(), hash.values.pop());
			}

			hash.shift = () => {
				return new Hash(hash.indexes.shift(), hash.values.shift());
			}
		}

		hash.set = (index, value) => {
			hash.values[hash.indexes.indexOf(index)] = value;
		}

		hash.push = (index, value) => {
			hash.indexes.push(index);
			hash.values.push(value);
		}

		for (let i = 0; i < hashes.length; i++) {
			let el = hashes[i];
			i % 2 == 0 ? hash.indexes.push(el) : hash.values.push(el);
		}
		hash.type = 'hash';
		hash.length = hash.indexes.length;
	}
}

export class Hash {
	constructor(...hashes){
		let hash = this;
		hash.indexes = [];
		hash.values = [];
		hash.type = 'hash';

		hash.length = () => hash.indexes.length;
		hash.get = index => hash.values[hash.indexes.indexOf(index)];
		hash.indexOf = value => hash.indexes[hash.values.indexOf(value)];
		hash.pop = () => new Hash(hash.indexes.pop(), hash.values.pop());
		hash.shift = () => new Hash(hash.indexes.shift(), hash.values.shift());
		hash.set = (index, value) => hash.values[hash.indexes.indexOf(index)] = value;
		hash.push = (index, value) => {
			hash.indexes.push(index);
			hash.values.push(value);
		}

		for (let i = 0; i < hashes.length; i++) {
			i % 2 == 0 ? hash.indexes.push(hashes[i]) : hash.values.push(hashes[i]);
		}
	}
}

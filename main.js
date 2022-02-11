const main = {
	data() {
		return {
			bbb: 'asd',
			count: 0,
			show: true,
		};
	},
	mounted() {
		setInterval(() => {
			this.count++;
		}, 1000);
		console.log(this);
	},
	methods: {
		funccc(e) {
			console.log(e.target);
		},
		scrollwidth(e) {
			console.log(e.target.scrollWidth);
		},
	},
};
let vm = Vue.createApp(main).mount('.vue3');
console.log(vm);

// let a = new Date()
// console.log(typeof a)
let str = 'hou jie';
str.split('');
// let c = str.split('')
// c.reverse()
// c = c.join('')
let name_a = 'qwe';
let a = {
	key: 1,
};
Object.defineProperty(a, 'name', {
	// value: name_a,
	// get() {
	// 	console.log('get方法');
	// 	return name_a;
	// },
	set(par) {
		console.log('set');
		name_a = par;
	},
});

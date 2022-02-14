new Vue({
	el: '#test',
	data() {
		return {
			btn_text: '发送验证码',
			count: 10,
			ban: false,
		};
	},
	methods: {
		count_down() {
			let timer = setInterval(() => {
				this.count--;
				this.ban = true;
				this.btn_text = `${this.count}s后重新发送`;
				console.log(this.count);
				if (this.count == 0) {
					this.btn_text = '重新发送验证码';
					this.ban = false;
					this.count = 10;
					clearInterval(timer);
				}
			}, 1000);
		},
	},
});

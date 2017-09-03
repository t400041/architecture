new Vue({
	el: "#h_ome",
	data: {
		bgList: [],
		currentIndex: 0,
		timer: ''
	},
	mounted: function() {
		this.homeView();
		this.created();
	},
	methods: {
		homeView: function() {
			this.$http.get("data/bg.json").then(response => {
				var res = response.data;
				if(res && res.status == "1") {
					this.bgList = res.result;
				}

			});
		},
		created() {
			//在DOM加载完成后，下个tick中开始轮播
			this.$nextTick(() => {
				this.timer = setInterval(() => {
					this.autoPlay()
				}, 4000)
			})
		},
		change(index) {
			this.currentIndex = index
		},
		autoPlay() {
			this.currentIndex++
				if(this.currentIndex > this.bgList.length - 1) {
					this.currentIndex = 0
				}
		}
	}
})
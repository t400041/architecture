new Vue({
	el: "#w_orks",
	data:{
		wList: [],
	},
	mounted: function() {
		this.w_View();
	},
	methods: {
		w_View: function() {
			this.$http.get("data/bg.json").then(response => {
				var res = response.data;
				if(res && res.status == "1") {
					this.wList = res.result;
				}
			});
		},
	}
})

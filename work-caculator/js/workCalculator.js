var app = new Vue({
    el: '#app',
    data: {
        startTime: "",
        endTime: "",
        breakTime: "0",
        total: ""
    },
    methods: {
        test: function () {
            console.log("test");
            let self = this;
            if (self.startTime.length === 1) {
                self.startTime = "0" + self.startTime;
            }
            if (self.endTime.length === 1) {
                self.endTime = "0" + self.endTime;
            }
            if (self.startTime.length < 4) {
                for (i = 0; i < 4; i++) {
                    if (self.startTime.length < 4) {
                        self.startTime = self.startTime + "0";
                    }
                }
            }
            if (self.endTime.length < 4) {
                for (i = 0; i < 4; i++) {
                    if (self.endTime.length < 4) {
                        self.endTime = self.endTime + "0";
                    }
                }
            }
            console.log(self.startTime);
            console.log(self.endTime);

            let startNumber = parseInt(self.startTime);
            let endNumber = parseInt(self.endTime);
            let breakNumber = parseFloat(self.breakTime);
            if (endNumber > startNumber) {
                let count = (endNumber - startNumber) / 100;
                self.total = count - breakNumber;
            } else {
                let count = ((2400 - startNumber) + endNumber) / 100;
                self.total = count - breakNumber;
            }
        }
    }
})
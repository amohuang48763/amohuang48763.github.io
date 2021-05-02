var app = new Vue({
    el: '#app',
    data: {
        startTime: "08:00",
        endTime: "16:00",
        breakTime: "0.5",
        total: "7.5",
        hourMoney: "158",
        dayMoney: "0",
        copyInputValue:"",
        breakTimeList: [
            { id: "0", text: "0" },
            { id: "0.25", text: "0.25" },
            { id: "0.5", text: "0.5" },
            { id: "0.75", text: "0.75" },
            { id: "1", text: "1" }
        ],
        timeList: [
            { id: "08:00", text: "08:00" },
            { id: "08:15", text: "08:15" },
            { id: "08:30", text: "08:30" },
            { id: "08:45", text: "08:45" },
            { id: "09:00", text: "09:00" },
            { id: "09:15", text: "09:15" },
            { id: "09:30", text: "09:30" },
            { id: "09:45", text: "09:45" },
            { id: "10:00", text: "10:00" },
            { id: "10:15", text: "10:15" },
            { id: "10:30", text: "10:30" },
            { id: "10:45", text: "10:45" },
            { id: "11:00", text: "11:00" },
            { id: "11:15", text: "11:15" },
            { id: "11:30", text: "11:30" },
            { id: "11:45", text: "11:45" },
            { id: "12:00", text: "12:00" },
            { id: "12:15", text: "12:15" },
            { id: "12:30", text: "12:30" },
            { id: "12:45", text: "12:45" },
            { id: "13:00", text: "13:00" },
            { id: "13:15", text: "13:15" },
            { id: "13:30", text: "13:30" },
            { id: "13:45", text: "13:45" },
            { id: "14:00", text: "14:00" },
            { id: "14:15", text: "14:15" },
            { id: "14:30", text: "14:30" },
            { id: "14:45", text: "14:45" },
            { id: "15:00", text: "15:00" },
            { id: "15:15", text: "15:15" },
            { id: "15:30", text: "15:30" },
            { id: "15:45", text: "15:45" },
            { id: "16:00", text: "16:00" },
            { id: "16:15", text: "16:15" },
            { id: "16:30", text: "16:30" },
            { id: "16:45", text: "16:45" },
            { id: "17:00", text: "17:00" },
            { id: "17:15", text: "17:15" },
            { id: "17:30", text: "17:30" },
            { id: "17:45", text: "17:45" },
            { id: "18:00", text: "18:00" },
            { id: "18:15", text: "18:15" },
            { id: "18:30", text: "18:30" },
            { id: "18:45", text: "18:45" },
            { id: "19:00", text: "19:00" },
            { id: "19:15", text: "19:15" },
            { id: "19:30", text: "19:30" },
            { id: "19:45", text: "19:45" },
            { id: "20:00", text: "20:00" },
            { id: "20:15", text: "20:15" },
            { id: "20:30", text: "20:30" },
            { id: "20:45", text: "20:45" },
            { id: "21:00", text: "21:00" },
            { id: "21:15", text: "21:15" },
            { id: "21:30", text: "21:30" },
            { id: "21:45", text: "21:45" },
            { id: "22:00", text: "22:00" },
            { id: "22:15", text: "22:15" },
            { id: "22:30", text: "22:30" },
            { id: "22:45", text: "22:45" },
            { id: "23:00", text: "23:00" },
            { id: "23:15", text: "23:15" },
            { id: "23:30", text: "23:30" },
            { id: "23:45", text: "23:45" },
            { id: "00:00", text: "00:00" },
            { id: "00:15", text: "00:15" },
            { id: "00:30", text: "00:30" },
            { id: "00:45", text: "00:45" },
            { id: "01:00", text: "01:00" },
            { id: "01:15", text: "01:15" },
            { id: "01:30", text: "01:30" },
            { id: "01:45", text: "01:45" },
            { id: "02:00", text: "02:00" },
            { id: "02:15", text: "02:15" },
            { id: "02:30", text: "02:30" },
            { id: "02:45", text: "02:45" },
            { id: "03:00", text: "03:00" },
            { id: "03:15", text: "03:15" },
            { id: "03:30", text: "03:30" },
            { id: "03:45", text: "03:45" },
            { id: "04:00", text: "04:00" },
            { id: "04:15", text: "04:15" },
            { id: "04:30", text: "04:30" },
            { id: "04:45", text: "04:45" },
            { id: "05:00", text: "05:00" },
            { id: "05:15", text: "05:15" },
            { id: "05:30", text: "05:30" },
            { id: "05:45", text: "05:45" },
            { id: "06:00", text: "06:00" },
            { id: "06:15", text: "06:15" },
            { id: "06:30", text: "06:30" },
            { id: "06:45", text: "06:45" },
            { id: "07:00", text: "07:00" },
            { id: "07:15", text: "07:15" },
            { id: "07:30", text: "07:30" },
            { id: "07:45", text: "07:45" },
        ]
    },
    mounted: function () {
        let self = this;
        self.countHour();
    },
    computed: {
        copyText: function () {
            return this.startTime + "-" + this.endTime + " " + this.total + " " + this.dayMoney;
        }

    },
    watch: {

    },
    methods: {
        countHour: function () {
            console.log("countHour");
            let self = this;
            if (self.startTime !== "00:00" || self.endTime !== "00:00") {
                let startNumber = self.renderHourNumber(self.startTime.replace(":", ""));
                let endNumber = self.renderHourNumber(self.endTime.replace(":", ""));
                let breakNumber = parseFloat(self.breakTime);
                if (endNumber > startNumber) {
                    let count = (endNumber - startNumber);
                    self.total = count - breakNumber;
                    self.dayMoney = self.total * self.hourMoney;
                } else {
                    let count = ((24 - startNumber) + endNumber);
                    self.total = count - breakNumber;
                    self.dayMoney = 100 + (self.total * self.hourMoney) + endNumber * 40;
                }
            } else {
                self.total = "0";
                self.dayMoney = "0";
            }
        },
        renderHourNumber: function (str) {
            let hourtStr = str.substring(0, 2);
            let minStr = str.substring(2, 4);
            console.log(hourtStr);
            console.log(minStr);
            let minNumber = 0;
            switch (minStr) {
                case "00":
                    minNumber = 0;
                    break;
                case "15":
                    minNumber = 0.25;
                    break;
                case "30":
                    minNumber = 0.5;
                    break;
                case "45":
                    minNumber = 0.75;
                    break;
            }
            return parseInt(hourtStr) + minNumber;
        },
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
        },
        copy: function () {
            let self = this;

            self.copyInputValue = self.startTime + "-" + self.endTime + " " + self.total + " " + self.dayMoney;
            /* Get the text field */
            var text = document.getElementById("copyInput");
            text.value=self.copyInputValue;
            console.log(self.copyInputValue);
            console.log(text.value);
            /* Select the text field */
            text.select();
            text.setSelectionRange(0, 99999); /* For mobile devices */

            /* Copy the text inside the text field */
            document.execCommand("copy");

            navigator.clipboard.writeText(text.value)
            .then(() => { console.log(`Copied!`) })
            .catch((error) => { console.log(`Copy failed! ${error}`) })

            /* Alert the copied text */
            alert("Copied :" + text.value);
        }
    }
})
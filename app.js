let app = new Vue({
    el: "#app",
    data: {
        tasks: [
            "ZF05 8900 0060 0004 3589",
            // "456 95212",
            // "ZX763900009000048936",
            // "3226088964020044",
            // "2534 0653 9788 6385"
        ],
        results: [
            
        ],
        textInput: "",
        isValid: null,
        step: 1,
        startDate: null,
        tries: 0
},
    methods: {
        validateInput: function () {
            let input = this.textInput.replace(/ /g, '');
            let answer = this.tasks[this.step -1].replace(/ /g, '');
            
            if (input === answer) {
                this.isValid = true;
        
                                
                let self = this;
                setTimeout(function () {
                    self.textInput = " "; //text field clear
                    self.isValid = null;
                    self.step += 1;
                }, 1000);
            } else {
                this.isValid = false;
                this.tries += 1;
            }

                 // Get duration
                let now = new Date();
                let duration = ((now - this.startDate) / 1000).toFixed(2) + " seconds";
                console.log(duration);
                
                //Save Results
                this.results.push({
                    "task" : this.tasks[this.step - 1],
                    "duration" : duration,
                    "tries" : this.tries
                })

        },
        startTimer: function () {
            this.startDate = new Date();
            console.log("Type faster ya bastard!");
        }
}
});

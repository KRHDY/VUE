let app = new Vue ({
    el: '#app',
    data: {
        user : null,
        comment : null,
        messages:[],
    },
    methods:{
        save(){
            const message= {
                user:this.user,
                comment:this.comment,
            };
            // 내림차순 unshift
            this.messages.unshift(message)
            this.user=null
            this.comment=null
        }
    },
});
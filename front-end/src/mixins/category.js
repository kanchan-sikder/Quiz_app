

export default{
    computed:{
        filterCategory: function () {
            if(this.cat_choice===null && this.lev_choice===null){
                return this.questions
            }
            else if(this.lev_choice===null)
            {
                return this.questions.filter((ques) => {
                    return ques.category===this.cat_choice;
                })
            }else if (this.cat_choice===null){
                return this.questions.filter((ques) => {
                    return ques.level===this.lev_choice;
                })
            }else{
                return this.questions.filter((ques) => {
                    return (ques.level===this.lev_choice && ques.category===this.cat_choice);
                })
            }
        
    }
    }
}
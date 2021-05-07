class Food{
    constructor(){
        this.foodStock=0;
        this.image=loadImage("Images/milk.png");
    }
    
    getFoodStock(){
        return this.foodStock;
    }

    updateFoodStock(fs){
        this.foodStock=fs;
    }

    deductFood(){
        if(this.foodStock>0){
            this.foodStock=this.foodStock-1;
        }  
    }

    display(){
        var x=90;
        var y=100;
        
        imageMode(CENTER)
        image(this.image, 700, 200, 40, 40);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10===0){
                    x=90;
                    y=y+50;
                }
                image(this.image, x, y, 40, 40)
                x=x+30;
            }
        }
    }
}

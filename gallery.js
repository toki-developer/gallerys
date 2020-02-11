class Gallery {
    constructor(classname){
        this.classname = classname;
        this.doing(0);
        for(let i=0;i<this.gallerys.length;i++){
            this.doing(i);
        }
    }
    
    info(i){

        this.gallerys = document.querySelectorAll(this.classname);
        this.galleryChildren = this.gallerys[i].children;
        this.galleryCount = this.galleryChildren.length;
        this.galleryFirst = this.galleryChildren[0];
        this.FirstImg = this.galleryFirst.firstElementChild.firstElementChild;
        this.firstWidth = this.FirstImg.naturalWidth;
        this.firstHeight = this.FirstImg.naturalHeight;

        this.styleP = this.gallerys[i].style;
        this.style1 =this.galleryFirst.style;

        this.gallery2 = this.galleryChildren[1];
        this.gallery3 = this.galleryChildren[2];
        this.gallery4 = this.galleryChildren[3];
        this.gallery5 = this.galleryChildren[4];

        
    };
    
    twoOver(i){
        this.info(i);
        this.ThirdW = this.gallery3.firstElementChild.firstElementChild.naturalWidth;
        this.ThirdH = this.gallery3.firstElementChild.firstElementChild.naturalHeight;
    };


    // 分割代入バージョン===========

    // twoOver(i){
    //     this.info(i);
    //     const { firstElementChild } = this.gallery3;
    //     const { naturalWidth, naturalHeight } = firstElementChild;
    //     this.ThirdW = naturalWidth;
    //     this.ThirdH = naturalHeight;
    // };

    // ================


    photos2(i){
        this.info(i)
        if(this.firstWidth>=this.firstHeight){
            this.styleP.gridTemplateRows ="50% 50%";
        }else{
            this.styleP.gridTemplateColumns ="1fr 1fr";
        };
    };

    photos3(i){
        this.twoOver(i);
        this.styleP.gridTemplateColumns ="1fr 1fr";
            if(this.firstHeight>this.firstWidth){
                this.style1.gridRow="1/3";
            }else if(this.firstHeight>=this.firstWidth*3/5){
                this.styleP.gridTemplateRows =" 62% 38%";
                this.style1.gridColumn="1/3";
            }else{
                this.styleP.gridTemplateRows =" 50% 50%";
                this.style1.gridColumn="1/3";
            };
    };

    photos4(i){
        this.twoOver(i);
        if(this.firstHeight*2/3>this.firstWidth){
            this.styleP.gridTemplateColumns ="4fr 3fr";
            this.styleP.gridTemplateRows ="1fr 1fr 1fr";
            this.style1.gridRow="1/4";
        }else if(this.firstHeight*3/4>this.firstWidth){
            this.styleP.gridTemplateColumns ="2fr 1fr";
            this.styleP.gridTemplateRows ="1fr 1fr 1fr";
            this.style1.gridRow="1/4";
        }else if(this.firstHeight>this.firstWidth*3/4){
            this.styleP.gridTemplateColumns ="1fr 1fr";
            this.styleP.gridTemplateRows ="1fr 1fr";
        }else if(this.firstHeight>this.firstWidth*2/3){
            this.styleP.gridTemplateColumns ="1fr 1fr 1fr";
            this.styleP.gridTemplateRows ="2fr 1fr";
            this.style1.gridColumn="1/4";
        }else{
            this.styleP.gridTemplateColumns ="1fr 1fr 1fr";
            this.styleP.gridTemplateRows ="4fr 3fr";
            this.style1.gridColumn="1/4";
        }

    };

    photos5(i){
        this.twoOver(i);
        this.style5 =this.gallery5.style;
        this.style4 =this.gallery4.style;
        this.style3 =this.gallery3.style;
        this.style2 =this.gallery2.style;

        if(this.firstHeight*2/3>this.firstWidth){
            this.style1.gridColumn="1/4";
            this.style2.gridColumn="4/7";
            this.style3.gridColumn="1/3";
            this.style4.gridColumn="3/5";
            this.style5.gridColumn="5/7";
        }else if(this.firstHeight>this.firstWidth*2/3){
            if(this.ThirdH>this.ThirdW){
                this.style1.gridColumn="1/4";
                this.style2.gridColumn="4/7";
                this.style3.gridColumn="1/3";
                this.style4.gridColumn="3/5";
                this.style5.gridColumn="5/7";
            }else{
                this.style1.gridRow="1/4";
                this.style2.gridRow="4/7";
                this.style3.gridRow="1/3";
                this.style4.gridRow="3/5";
                this.style5.gridRow="5/7";
            };
        }else{
            this.styleP.gridTemplateColumns ="2fr 1fr";
            this.style1.gridRow="1/4";
            this.style2.gridRow="4/7";
            this.style3.gridRow="1/3";
            this.style4.gridRow="3/5";
            this.style5.gridRow="5/7";

        };
    };


    doing(i){
        this.info(i)
        switch(this.galleryCount){
            case 1:
                break;
            case 2:
                this.photos2(i);
                break;
            case 3:
                this.photos3(i);
                break;
            case 4:
                this.photos4(i);
                break;
            case 5:
                this.photos5(i);
                break;
        }
        
    }




};

// const mygallery= new Gallery(".js-gallery");
// mygallery.doing(1);
// mygallery.doing(2);
// mygallery.doing(3);
// mygallery.doing(4);
// mygallery.doing(5);
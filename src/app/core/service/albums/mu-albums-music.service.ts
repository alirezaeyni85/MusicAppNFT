import { Injectable } from "@angular/core";
import { InformationArtist } from "./descriptionArtist/mu-information-artist.service";

@Injectable({providedIn:'root'})
export class MuAlbumsMusic {
    constructor(){}


    

   public artist =[  
    {id:1, artistName:'Keepitreal',imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png',},
    {id:2, artistName:'Keepitreal',imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png',},
    {id:3, artistName:'Keepitreal',imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png',},
    {id:4, artistName:'Keepitreal',imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png',},
    {id:5, artistName:'Keepitreal',imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png',},
    {id:6, artistName:'Keepitreal',imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png',},
    {id:7, artistName:'Keepitreal',imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png',},
    {id:8, artistName:'Keepitreal',imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png',},
    {id:9, artistName:'Keepitreal',imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png',},
    {id:10, artistName:'Keepitreal',imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png',},
    {id:11, artistName:'Keepitreal',imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png',},
    {id:12, artistName:'Keepitreal',imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png',},
    {id:13, artistName:'Keepitreal',imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png',},
    {id:14, artistName:'Keepitreal',imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png',},
    {id:15, artistName:'Keepitreal',imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png',},
    {id:16, artistName:'Keepitreal',imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png',},
    {id:17, artistName:'Keepitreal',imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png',},
    {id:18, artistName:'Keepitreal',imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png',},
    {id:19, artistName:'Keepitreal',imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png',},
   ]




 public songs:any[] =[
           { 
            id:1,
            albumView:10 ,
            qauntityLike:30,
            artist:[this.artist[0]],
             mainImg:'./ImagesDiscover/discover-images-1.png',
             highesBid:'evenly',
             minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], 
             imgAvat:'./avators/fox.png'
            },
       
          { id:2,
            albumView:3,
            artist:[this.artist[1]],
            qauntityLike:20,
            imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Avatar Placeholder.png',
            mainImg:'./ImagesDiscover/discover-images-2.png',
            highesBid:'0.33 wETH',
            minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], 

        },
          
           {
            id:3,
            albumView:6,
            qauntityLike:80,
            artist:[this.artist[2]],
            imgArtist:'./ImagesDiscover/ProfileArtist-Discover/Avatar.png',
            mainImg:'./ImagesDiscover/discover-images-3.png',
            highesBid:'0.33 wETH',
            minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'],
            imgAvat:'./avators/fox.png'
        },
      
          {id:4,
            albumView:10,
            artist:[this.artist[3]],
             qauntityLike:100,     
              mainImg:'./ImagesDiscover/mashroom-image-trend.png', 
              minimalImages:['./minimal-Images/mashroomMini.png','./minimal-Images/mashroomMini.png'],
                highesBid:'0.33 wETH',
                 imgAvat:'./avators/humon.png'},
      
          {id:5, 
            artist:[this.artist[4]],
        
            albumView:40 , qauntityLike:109 ,mainImg:'./ImagesDiscover/ironman-image-trend.png',minimalImages:['./minimal-Images/ironManMini.png','./minimal-Images/ironManMini.png'],highesBid:'0.33 wETH',imgAvat:'./avators/ironAvator.png'},
      
        {id:6, 
            artist:[this.artist[5]],
             albumView:25 , qauntityLike:110,mainImg:'./ImagesDiscover/dog-image-trend.png',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png' ,highesBid:'0.33 wETH'},

        {id:7,
            artist:[this.artist[6]],
              albumView:25 , qauntityLike:110,mainImg:'./ImagesDiscover/dog-image-trend.png',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png' ,highesBid:'0.33 wETH'},
       
        {id:8, 
            artist:[this.artist[7]],
             albumView:25 , qauntityLike:110,mainImg:'./ImagesDiscover/dog-image-trend.png',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png' ,highesBid:'0.33 wETH'},
       
        {id:9, 
            artist:[this.artist[8]],
             albumView:25 , qauntityLike:110,mainImg:'./ImagesDiscover/dog-image-trend.png',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png' ,highesBid:'0.33 wETH'},
      
        {id:10,
            artist:[this.artist[9]],
              albumView:25 , qauntityLike:110,mainImg:'./ImagesDiscover/dog-image-trend.png',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png' ,highesBid:'0.33 wETH'},
      
        {id:11, 
            artist:[this.artist[10]],
             albumView:25 , qauntityLike:110,mainImg:'./ImagesDiscover/dog-image-trend.png',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png' ,highesBid:'0.33 wETH'},
      
        {id:12,   
            artist:[this.artist[11]],
            
            albumView:25 , qauntityLike:110,mainImg:'./ImagesDiscover/dog-image-trend.png',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png' ,highesBid:'0.33 wETH'},
      
        {id:13,   
            artist:[this.artist[12]],
            
            albumView:250 , qauntityLike:110,mainImg:'./ImagesDiscover/dog-image-trend.png',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png' ,highesBid:'0.33 wETH'},
      
        {id:14,   
            artist:[this.artist[13]],
            
            albumView:25 , qauntityLike:110,mainImg:'./ImagesDiscover/dog-image-trend.png',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png' ,highesBid:'0.33 wETH'},
      
        {id:15,   
            artist:[this.artist[14]],
            
            albumView:25 , qauntityLike:110,mainImg:'./ImagesDiscover/dog-image-trend.png',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png' ,highesBid:'0.33 wETH'},
      
        {id:16,   
            artist:[this.artist[15]],
            
            albumView:25 , qauntityLike:110,mainImg:'./ImagesDiscover/dog-image-trend.png',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png' ,highesBid:'0.33 wETH'},
      
        {id:17,   
            artist:[this.artist[16]],
            
            albumView:25 , qauntityLike:110,mainImg:'./ImagesDiscover/dog-image-trend.png',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png' ,highesBid:'0.33 wETH'},
      
        {id:18,   
            artist:[this.artist[17]],
            
            albumView:25 , qauntityLike:110,mainImg:'./ImagesDiscover/dog-image-trend.png',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png' ,highesBid:'0.33 wETH'},
      
        {id:19, 
            artist:[this.artist[18]],
            
            albumView:25 , qauntityLike:110,mainImg:'./ImagesDiscover/dog-image-trend.png',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png' ,highesBid:'0.33 wETH'},
            
    ]


 public infoesOfArtist = [
        {   id:1, 
            firstParagraph:'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain', 
            secondParagraph:'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.', 
            thirdParagraph:'They live in a metal space machines, high up in the sky and only have one foot on Earth.These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
            tags:['Animation','illustration','moon','moon']
        }, {   id:2, 
            firstParagraph:'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain', 
            secondParagraph:'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.', 
            thirdParagraph:'They live in a metal space machines, high up in the sky and only have one foot on Earth.These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
            tags:['Animation','illustration','moon','moon']
        },
         {   id:3, 
            firstParagraph:'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain', 
            secondParagraph:'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.', 
            thirdParagraph:'They live in a metal space machines, high up in the sky and only have one foot on Earth.These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
            tags:['Animation','illustration','moon','moon']
        },
         {   id:4, 
            firstParagraph:'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain', 
            secondParagraph:'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.', 
            thirdParagraph:'They live in a metal space machines, high up in the sky and only have one foot on Earth.These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
            tags:['Animation','illustration','moon','moon']
        }, {   id:5, 
            firstParagraph:'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain', 
            secondParagraph:'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.', 
            thirdParagraph:'They live in a metal space machines, high up in the sky and only have one foot on Earth.These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
            tags:['Animation','illustration','moon','moon']
        }, {   id:6, 
            firstParagraph:'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain', 
            secondParagraph:'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.', 
            thirdParagraph:'They live in a metal space machines, high up in the sky and only have one foot on Earth.These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
            tags:['Animation','illustration','moon','moon']
        }, {   id:7, 
            firstParagraph:'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain', 
            secondParagraph:'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.', 
            thirdParagraph:'They live in a metal space machines, high up in the sky and only have one foot on Earth.These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
            tags:['Animation','illustration','moon','moon']
        }, {   id:8, 
            firstParagraph:'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain', 
            secondParagraph:'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.', 
            thirdParagraph:'They live in a metal space machines, high up in the sky and only have one foot on Earth.These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
            tags:['Animation','illustration','moon','moon']
        }, {   id:9, 
            firstParagraph:'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain', 
            secondParagraph:'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.', 
            thirdParagraph:'They live in a metal space machines, high up in the sky and only have one foot on Earth.These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
            tags:['Animation','illustration','moon','moon']
        }, {   id:10, 
            firstParagraph:'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain', 
            secondParagraph:'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.', 
            thirdParagraph:'They live in a metal space machines, high up in the sky and only have one foot on Earth.These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
            tags:['Animation','illustration','moon','moon']
        }, {   id:11, 
            firstParagraph:'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain', 
            secondParagraph:'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.', 
            thirdParagraph:'They live in a metal space machines, high up in the sky and only have one foot on Earth.These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
            tags:['Animation','illustration','moon','moon']
        }, {   id:12, 
            firstParagraph:'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain', 
            secondParagraph:'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.', 
            thirdParagraph:'They live in a metal space machines, high up in the sky and only have one foot on Earth.These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
            tags:['Animation','illustration','moon','moon']
        }, {   id:13, 
            firstParagraph:'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain', 
            secondParagraph:'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.', 
            thirdParagraph:'They live in a metal space machines, high up in the sky and only have one foot on Earth.These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
            tags:['Animation','illustration','moon','moon']
        }, {   id:14, 
            firstParagraph:'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain', 
            secondParagraph:'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.', 
            thirdParagraph:'They live in a metal space machines, high up in the sky and only have one foot on Earth.These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
            tags:['Animation','illustration','moon','moon']
        }, {   id:15, 
            firstParagraph:'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain', 
            secondParagraph:'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.', 
            thirdParagraph:'They live in a metal space machines, high up in the sky and only have one foot on Earth.These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
            tags:['Animation','illustration','moon','moon']
        }, {   id:16, 
            firstParagraph:'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain', 
            secondParagraph:'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.', 
            thirdParagraph:'They live in a metal space machines, high up in the sky and only have one foot on Earth.These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
            tags:['Animation','illustration','moon','moon']
        }, {   id:17, 
            firstParagraph:'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain', 
            secondParagraph:'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.', 
            thirdParagraph:'They live in a metal space machines, high up in the sky and only have one foot on Earth.These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
            tags:['Animation','illustration','moon','moon']
        }, {   id:18, 
            firstParagraph:'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain', 
            secondParagraph:'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.', 
            thirdParagraph:'They live in a metal space machines, high up in the sky and only have one foot on Earth.These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
            tags:['Animation','illustration','moon','moon']
        }, {   id:19, 
            firstParagraph:'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain', 
            secondParagraph:'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.', 
            thirdParagraph:'They live in a metal space machines, high up in the sky and only have one foot on Earth.These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they have taken to make human beings their target.',
            tags:['Animation','illustration','moon','moon']
        },
    ]


    public album = [
        {
            id:1,
            albumName:'Distant Galaxy',
            artist:[this.artist[0]],
            songs:[this.songs[0], this.songs[1]],
            information:[this.infoesOfArtist[0]],
        },{
            id:2, 
            albumName:'Distant Galaxy',
            artist:[this.artist[1]],
            songs:[this.songs[2], this.songs[3]],
            information:[this.infoesOfArtist[1]]
        },{
            id:3, 
            albumName:'GravityOne',
            artist:[this.artist[2]],
            songs:[this.songs[4], this.songs[5]],
            information:[this.infoesOfArtist[2]]
        },{
            id:4, 
            albumName:'Juanie',
            artist:this.artist[3],
            songs:[this.songs[6], this.songs[7]],
            information:[this.infoesOfArtist[3]]
     },{
            id:5, 
            albumName:'BlueWhale',
            artist:this.artist[4],
            songs:[this.songs[8], this.songs[9]],
            information:[this.infoesOfArtist[4]]        },
            {
            id:6, 
            albumName:'Mr fox',
            artist:this.artist[5],
            songs:[this.songs[10], this.songs[11]],
            information:[this.infoesOfArtist[5]]
        },{
            id:7, 
            albumName:'Shroomie',
            artist:this.artist[6],
            songs:[this.songs[12], this.songs[13]],
            information:[this.infoesOfArtist[6]]
        },{
            id:8, 
            albumName:'robotica',
            artist:this.artist[7],
            songs:[this.songs[14], ],
            information:[this.infoesOfArtist[7]]

        },{
            id:9, 
            information:[this.infoesOfArtist[8]],       
            albumName:'RustyRobot',
            artist:this.artist[8],
            songs:[this.songs[15],]
        },{
            id:10,      
            albumName:'animakid',
            artist:this.artist[9],
            songs:[this.songs[16], this.songs[1]],
            information:[this.infoesOfArtist[9]]
        },{
            id:11, 
            albumName:'Dotgu',
            artist:this.artist[10],
            songs:[this.songs[17], this.songs[1]]
            ,information:[this.infoesOfArtist[10]]
        },{
            id:12, 
            albumName:'Ghiblier',
            artist:this.artist[11],
            songs:[this.songs[0], this.songs[1]],     
            information:[this.infoesOfArtist[11]]   
          },{
            id:13, 
            albumName:'animakid',
            artist:this.artist[12],
            songs:[this.songs[6], this.songs[1]],
            information:[this.infoesOfArtist[12]] 
    },{
            id:15, 
            albumName:'Catch 22',
            artist:this.artist[14],
            songs:[this.songs[8], this.songs[1]],
            information:[this.infoesOfArtist[13]]        },{
            id:16, 
            albumName:'Ice Ape Club',
            artist:this.artist[15],
            songs:[this.songs[9], this.songs[1]],
            information:[this.infoesOfArtist[14]]
       },{
            id:17, 
            albumName:'PuppyPower',
            artist:this.artist[16],
            songs:[this.songs[17], this.songs[1]]
            ,information:[this.infoesOfArtist[15]]
        },{
            id:18, 
            albumName:'NebulaKid',
            artist:this.artist[17],
            songs:[this.songs[18], this.songs[1]]
            ,information:[this.infoesOfArtist[16]]

        },{
            id:19, 
            albumName:'MoonDancer',
            artist:this.artist[18],
            songs:[this.songs[10], this.songs[1]] ,
            information:[this.infoesOfArtist[17]]
        }
    ]

     


  getDatas(id:number,option:{includeAlbum:boolean,includeSongs:boolean}){
    const album = this.album.find(item=>item.id ==id)
    if(!album)undefined;
    let albumCopy = {}
    albumCopy = {
        album:option.includeAlbum==true? album :undefined,
        songs:option.includeSongs == true? this.songs :undefined
    }

 return albumCopy

  }









}
export interface MuAlbumsModel {
    id:number,
    albumName:string,
    artist:MuArtistModel[],
    songs:object[],
    information:object[]
}
export interface MuArtistModel{
    id:number,
    artistName:string,
    imgArtist:string
}
export interface MuSongsModel{
    id:number,
    albumView:number,
    qauntityLike:number,
    artist:MuArtistModel[],
    mainImg:string,
    highesBid:string,
    minimalImages:string[],
    imgAvat:string
}
export interface MuInfoesOfArtists{
    id:number,
    firstParagraph:string,
    secondParagraph:string,
    thirdParagraph:string,
    tags:string[],
}
export interface MuMethod{
    getDatas(id:number,option:{includeAlbum:boolean,includeSongs:boolean}):object;
}
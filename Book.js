export class Book
{
  constructor(title, author, description, pages, currentPage, read)
  {
    this.title = title;
    this.author = author;
    this.description = desription;
    this.pages = pages;
    this.currentPage = currentPage;
    this.read = read;
  }

  readBook(page)
  {
    if( page > 1 || page < this.pages )
    {
      return 0;
    }
      else if ( page <=1 && page > this.pages )
      {
        this.currentPage = page;
        return 1;
      }
        else
        {
          this.currentPage = ;
          this.read = true;
          return 1;
        }

  }
}


let harryPotter = new Book("harry Potter", "moi", "Orphelin, le jeune Harry Potter peut enfin quitter ses tyranniques oncle et tante Dursley lorsqu'un curieux messager lui révèle qu'il est un sorcier. À 11 ans, Harry va enfin pouvoir intégrer la légendaire école de sorcellerie de Poudlard, y trouver une famille digne de ce nom et des amis, développer ses dons, et préparer son glorieux avenir.", 350, 0, false);
let naruto = new Book("Naruto", "Masashi Kishimito", " Naruto est un garçon qui vit à Konoha,il rêve de devenir Hokage. il est détesté de tout le monde, car il a un démon enfermé en lui (Kuybi). Puis, petit à petit, il va se faire des amis, jusqu’à devenir le héros de son village.", 400, 0, false);
let ewilan = new Book("Ewilan", "Pierre Bottero", "Ewilan Gil' Sayan est la fille d'Elicia et Altan Gil' Sayan. Elle est née dans un autre monde parallèle : Gwendalavir. Mais pour la protéger d'une guerre naissante, ses parents l'ont envoyée, ainsi que son frère Akiro, dans le nôtre, bloquant ses souvenirs à leur arrivée.", 800, 254, false);

export const books =
  [
    harryPotter,
    naruto,
    ewilan
  ];

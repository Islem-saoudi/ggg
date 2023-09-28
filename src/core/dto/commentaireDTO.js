class CommentaireDTO {
  constructor(
      CommentaireId, Commentaire, DateHeure, UserId, ActionId
  )
  {
      this.CommentaireId = CommentaireId;
      this.Commentaire = Commentaire;
      this.DateHeure = DateHeure;
      this.UserId = UserId;
      this.ActionId = ActionId;

  }
}

module.exports = CommentaireDTO;
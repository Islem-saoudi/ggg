const ActionService = require('./interfaces/intActionService');
const Action = require('../core/entities/action');

class ActionServiceImpl extends ActionService {
  constructor(actionRepository) {
    super();
    this.actionRepository = actionRepository;
  }

  async getAll() {
    return this.actionRepository.getAll();
  }

  async getAllPaginated(pageNumber, pageSize) {
    return this.actionRepository.getAllPaginated(pageNumber, pageSize);
  }

  async getTotalCount() {
    return Action.countDocuments();
  }

  async create(actionDTO) {
    return this.actionRepository.create(actionDTO);
  }

  async getById(id) {  
    return this.actionRepository.findById(id);    
  }

  // async getActionWithCommentsById(id) {
  //   try {
  //     return Action.findById(id).populate('CommentaireIds');
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  async update(id, actionDTO) {
    return this.actionRepository.update(id, actionDTO);
  }

  async delete(id) {
    return this.actionRepository.delete(id);
  }

  async addCommentToAction(id, CommentaireId) {
    return this.actionRepository.addCommentToAction(id, CommentaireId);
  }


  // async addCommentToAction(ActionId, CommentaireId) {
  //   try {
  //     const action = await this.actionRepository.getById(ActionId);
  //     if (!action) {
  //       throw new Error('Action not found');
  //     }
  //     action.CommentaireIds.push(CommentaireId);
  //     await action.save();
  //     return action;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  

}

module.exports = ActionServiceImpl;

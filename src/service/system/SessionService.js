const BaseService = require('../BaseService.js');

class SessionService extends BaseService{
  constructor(){
    super();
  }

  gc() {
    // 删除过期时间
  }

  updateDeadline(id, deadline) {
    return this.getCurrentDao().update(id, {deadline: deadline});
  }

  update(id, fields) {
    return this.getCurrentDao().update(id, fields);
  }

  deleteById(id) {
    return this.getCurrentDao().delete(id);
  }

  getCurrentDao() {
    return this.createDao('system/SessionDao');
  }
}

module.exports = new SessionService();
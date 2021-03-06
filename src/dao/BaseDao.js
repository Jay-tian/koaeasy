
const db = require('../db/init.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = class BaseDao{
  constructor(table) {
    this.db = db;
    this.table = table;
    this.createModel();
  }
  
  update(id, fields) {
    return this.model.update(fields, {where: {id: id}});
  }

  getById(id) {
    return this.model.findById(id);
  }

  create(fields) {
    return this.model.create(fields);
  }

  delete(id) {
    return this.model.destroy({'where':{'id':id}});
  }

  count(condition) {
    return this.model.count({ where: condition});
  }

  search(condition, order, start, limit) {
    return this.model.findAll({
      where: condition,
      order: order,
      offset: start,
      limit: limit
    });
  }

  findByIds(ids) {
    return this.model.findAll({
      where: {
        id: {
          [Op.in]: ids,
        } 
      }
    });
  }

  createModel() {
    let defaultConfig = {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      }
    };

    let config = Object.assign(defaultConfig, this.config());
    this.model = this.db.define(this.table, config, {
      timestamps: true,
      freezeTableName: true,
    });
  }

  config() {
  }
};